import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Strings from '../../../utils/constant/string';
import {vh, vw} from '../../../utils/dimensions';
import LocalImages from '../../../utils/constant/localImages';
import Color from '../../../utils/constant/colors';
import CustomButton from '../../../components/customButton';
import {useDispatch} from 'react-redux';
import {storeJobRoles, storeLocation} from '../../../redux/setup/action';
import Fonts from '../../../utils/constant/fonts';
import ItemSeparator from '../../../components/ItemSeparator';

export default function TimePreferenceModal({...props}) {
  const [selected, setSelected] = useState<Array<Object>>([]);
  const dispatch = useDispatch<any>();

  /**
   * @name renderItem
   * @param item
   * @returns
   */

  console.log(props);
  const renderList = ({item}: any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.dayText}>{item}</Text>
        <View style={styles.dayIconCotainer}>
          <TouchableOpacity style={styles.dayIcon}>
            <Image source={LocalImages.early} style={styles.dayIconImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayIcon}>
            <Image source={LocalImages.early} style={styles.dayIconImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayIcon}>
            <Image source={LocalImages.early} style={styles.dayIconImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayIcon}>
            <Image source={LocalImages.early} style={styles.dayIconImg} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={styles.lineSeparator} />;
  };

  const emptyList = () => {
    return <View style={styles.emptyFlatlist} />;
  };

  const onClosePress = () => {
    props.setViewTimeModal(false);
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
        <Text style={styles.headerText}>{Strings.timePreference}</Text>
        <TouchableOpacity
          onPress={onClosePress}
          style={styles.crossImgContainer}>
          <Image source={LocalImages.cross} style={styles.crossImg} />
        </TouchableOpacity>
      </View>
      <ItemSeparator />
      <FlatList
        data={props.modalData}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={emptyList}
        contentContainerStyle={styles.innerContainer}
      />
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
    height: vh(700),
    width: '100%',
    position: 'absolute',
    bottom: vh(0),
    backgroundColor: Color.white,
    borderTopEndRadius: vh(20),
    borderTopStartRadius: vh(20),
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
    height: '60%',
    width: '60%',
  },
  header: {
    borderTopEndRadius: vh(20),
    borderTopStartRadius: vh(20),
    backgroundColor: Color.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(17),
    flexDirection: 'row',
  },
  innerContainer: {
    backgroundColor: Color.white,
    paddingHorizontal: vw(15),
    paddingTop: vh(15),
    minHeight: vh(450),
    paddingBottom: vh(100),
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
    backgroundColor: Color.lineSeparator,
    height: vh(1),
    width: vw(279),
    alignSelf: 'flex-end',
  },
  emptyFlatlist: {
    backgroundColor: Color.white,
    height: vh(650),
  },
  buttonView: {
    position: 'absolute',
    bottom: vh(0),
    width: '100%',
    paddingHorizontal: vh(16),
    backgroundColor: Color.white,
    height: vh(87),
  },
  itemContainer: {
    marginVertical: vh(18),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayText: {
    height: vh(26),
    fontSize: vw(12),
    lineHeight: vh(18),
    width: vw(48),
    fontFamily: Fonts.Lato_Medium,
  },
  dayIconImg: {
    height: '100%',
    width: '100%',
  },
  dayIcon: {
    height: vh(24),
    width: vw(24),
  },
  dayIconCotainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
