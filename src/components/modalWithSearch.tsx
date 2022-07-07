import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Strings from '../utils/constant/string';
import {vh, vw} from '../utils/Dimension';
import LocalImages from '../utils/constant/localImages';
import Color from '../utils/constant/colors';
import CustomButton from './customButton';
import {useDispatch, useSelector} from 'react-redux';
import {storeJobRoles, storeLocation} from '../redux/setup/action';
import Fonts from '../utils/constant/fonts';
import debounce from '../utils/debounce';
import ItemSeparator from './ItemSeparator';

export default function ModalWithTick({...props}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');
  const [helperData, setHelperData] = useState(props.data);
  const {jobRoles, location} = useSelector((state: any) => state.SetupReducer);
  const [selected, setSelected] = useState<Array<Object>>([]);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (props.storeList === 'jobRole') {
      setSelected(jobRoles);
    } else if (props.storeList === 'location') {
      setSelected(location);
    }
  }, [jobRoles, location, props.storeList]);

  /**
   * @name renderItem
   * @param item
   * @returns
   */

  const renderList = ({item}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.itemContainer}
        onPress={() => {
          let i = selected.findIndex(
            (element: any) =>
              element[Object.keys(element)[0]] === item[Object.keys(item)[0]] &&
              element[Object.keys(element)[1]] === item[Object.keys(item)[1]],
          );
          if (i !== -1) {
            selected.splice(i, 1);
            setSelected([...selected]);
          } else {
            setSelected([...selected, item]);
          }
        }}>
        <Image
          source={
            selected.length !== 0
              ? selected.findIndex(
                  (element: any) =>
                    element[Object.keys(element)[0]] ===
                      item[Object.keys(item)[0]] &&
                    element[Object.keys(element)[1]] ===
                      item[Object.keys(item)[1]],
                ) !== -1
                ? LocalImages.tickedBox
                : LocalImages.emptyBox
              : LocalImages.emptyBox
          }
          style={styles.tickBox}
        />
        <Text style={styles.itemText}>{item[Object.keys(item)[0]]}</Text>
        <Text
          style={[styles.itemText, {fontFamily: Fonts.Lato_Regular}]}>{` - ${
          item[Object.keys(item)[1]]
        }`}</Text>
      </TouchableOpacity>
    );
  };

  const onChangeText = debounce((text: string) => {
    setSearch(text);
    if (text) {
      const newData = props?.data.filter((item: any) => {
        const itemData = item[Object.keys(item)[0]]
          ? item[Object.keys(item)[0]].toUpperCase() +
            item[Object.keys(item)[1]].toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setHelperData(newData);
    } else {
      setHelperData(props?.data);
    }
  });

  const itemSeparator = () => {
    return <View style={styles.lineSeparator} />;
  };

  const emptyList = () => {
    return <View style={styles.emptyFlatlist} />;
  };

  const onClosePress = () => {
    props.setViewModal(false);
  };

  const onDonePress = () => {
    if (props.storeList === 'jobRole') {
      dispatch(storeJobRoles(selected));
    } else if (props.storeList === 'location') {
      dispatch(storeLocation(selected));
    }
    props.setViewModal(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{props.title}</Text>
        <TouchableOpacity
          onPress={onClosePress}
          style={styles.crossImgContainer}>
          <Image source={LocalImages.cross} style={styles.crossImg} />
        </TouchableOpacity>
      </View>
      <ItemSeparator />
      <View style={styles.innerContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            // value={search}
            onChangeText={onChangeText}
            placeholder={Strings.Search}
            style={styles.textInput}
          />
        </View>
        <FlatList
          data={helperData}
          renderItem={renderList}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={emptyList}
          contentContainerStyle={styles.innerContainer}
        />
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          textColor={Color.white}
          bgColor={Color.cyanBlue}
          text={Strings.done}
          onPressButton={onDonePress}
          disable={selected.length === 0 ? true : false}
          disableColor={Color.lightSkyBlue}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    height: vh(700),
    width: '100%',
    position: 'absolute',
    bottom: vh(0),
    borderTopStartRadius: vh(20),
    borderTopEndRadius: vh(20),
  },
  innerContainer: {
    backgroundColor: Color.white,
    paddingHorizontal: vw(8),
    paddingTop: vh(15),
    minHeight: vh(450),
    paddingBottom: vh(100),
  },
  headerText: {
    fontSize: vw(16),
    marginLeft: vw(16),
    lineHeight: vh(24),
  },
  crossImgContainer: {
    backgroundColor: Color.lightGrey,
    borderRadius: vh(10),
    height: vh(20),
    width: vw(20),
    overflow: 'hidden',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw(15),
  },
  crossImg: {
    height: '50%',
    width: '50%',
    right: vw(1),
  },
  header: {
    backgroundColor: Color.white,
    borderTopStartRadius: vh(20),
    borderTopEndRadius: vh(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: vh(17),
  },
  flatListContainer: {
    paddingHorizontal: vw(7),
  },
  itemContainer: {
    height: vh(50),
    paddingHorizontal: vw(5),
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: vh(5),
  },
  leftInsideContainer: {
    flexDirection: 'row',
  },
  closeText: {
    color: Color.white,
    fontSize: vw(16),
    textAlign: 'right',
    fontWeight: '600',
    marginVertical: vh(20),
    marginHorizontal: vw(20),
  },
  lineSeparator: {
    backgroundColor: Color.black,
    height: vh(1),
    opacity: 0.3,
  },
  listHeader: {
    backgroundColor: Color.white,
  },
  textInput: {
    height: vh(48),
    width: '100%',
    backgroundColor: Color.textInputBackground,
    borderRadius: vh(10),
    padding: vh(10),
  },
  textInputContainer: {
    backgroundColor: Color.white,
    borderRadius: vh(5),
    marginVertical: vh(8),
    alignSelf: 'center',
    width: '95%',
  },
  emptyFlatlist: {
    backgroundColor: Color.white,
    height: vh(650),
  },
  tickBox: {
    height: vh(22),
    width: vw(22),
    marginRight: vw(15),
  },
  buttonView: {
    position: 'absolute',
    bottom: vh(0),
    width: '100%',
    paddingHorizontal: vw(16),
    backgroundColor: Color.white,
    height: vh(87),
  },
  itemText: {
    fontSize: vw(14),
    fontFamily: Fonts.Lato_Bold,
    lineHeight: vh(16.8),
  },
});
