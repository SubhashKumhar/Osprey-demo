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
import {useDispatch, useSelector} from 'react-redux';
import Fonts from '../../../utils/constant/fonts';
import ItemSeparator from '../../../components/ItemSeparator';
import {storeTimePreference} from '../../../redux/setup/action';

export default function TimePreferenceModal({...props}) {
  const {timePreference} = useSelector((state: any) => state.SetupReducer);
  const [selected, setSelected] = useState<Array<Object>>(timePreference);
  const dispatch = useDispatch<any>();

  /**
   * @name renderItem
   * @param item
   * @returns
   */

  const renderList = ({item}: any) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.dayTitleView}>
          <Text style={styles.dayText}>{item.toUpperCase()}</Text>
        </View>
        <View style={styles.dayIconCotainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.dayIcon}
            onPress={() => {
              if (
                selected[item.toLowerCase()] !== '' &&
                selected[item.toLowerCase()] === 'Early Shift'
              ) {
                selected[item.toLowerCase()] = '';
              } else {
                selected[item.toLowerCase()] = 'Early Shift';
              }
              setSelected({...selected});
            }}>
            <Image
              source={LocalImages.early}
              style={
                selected[item.toLowerCase()] === 'Early Shift'
                  ? styles.dayIconImg
                  : [styles.dayIconImg, {tintColor: Color.grey}]
              }
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.dayIcon}
            onPress={() => {
              if (
                selected[item.toLowerCase()] !== '' &&
                selected[item.toLowerCase()] === 'Day Shift'
              ) {
                selected[item.toLowerCase()] = '';
              } else {
                selected[item.toLowerCase()] = 'Day Shift';
              }
              setSelected({...selected});
            }}>
            <Image
              source={LocalImages.dayIcon}
              style={
                selected[item.toLowerCase()] === 'Day Shift'
                  ? styles.dayIconImg
                  : [styles.dayIconImg, {tintColor: Color.grey}]
              }
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.dayIcon}
            onPress={() => {
              if (
                selected[item.toLowerCase()] !== '' &&
                selected[item.toLowerCase()] === 'Night Shift'
              ) {
                selected[item.toLowerCase()] = '';
              } else {
                selected[item.toLowerCase()] = 'Night Shift';
              }
              setSelected({...selected});
            }}>
            <Image
              source={LocalImages.nightIcon}
              style={
                selected[item.toLowerCase()] === 'Night Shift'
                  ? styles.dayIconImg
                  : [styles.dayIconImg, {tintColor: Color.grey}]
              }
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.dayIcon}
            onPress={() => {
              if (
                selected[item.toLowerCase()] !== '' &&
                selected[item.toLowerCase()] === 'All Day'
              ) {
                selected[item.toLowerCase()] = '';
              } else {
                selected[item.toLowerCase()] = 'All Day';
              }
              setSelected({...selected});
            }}>
            <Image
              source={LocalImages.anyTimeSelected}
              style={
                selected[item.toLowerCase()] === 'All Day'
                  ? styles.dayIconImg
                  : [styles.dayIconImg, {tintColor: Color.grey}]
              }
              resizeMode={'contain'}
            />
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
    dispatch(storeTimePreference(selected));
    props.setViewTimeModal(false);
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
      <View>
        <Text style={styles.subheaderText}>
          {Strings.timePreferenceSubHeader}
        </Text>
        <View style={styles.listHeader}>
          <View style={styles.listSubheader}>
            <Text style={styles.daysHeaderText}>{Strings.earlyShift}</Text>
            <Text style={styles.headerTimeText}>{Strings['4AM+']}</Text>
          </View>
          <View style={styles.listSubheader}>
            <Text style={styles.daysHeaderText}>{Strings.dayShift}</Text>
            <Text style={styles.headerTimeText}>{Strings['8AM+']}</Text>
          </View>
          <View style={styles.listSubheader}>
            <Text style={styles.daysHeaderText}>{Strings.nightShift}</Text>
            <Text style={styles.headerTimeText}>{Strings['6PM+']}</Text>
          </View>
          <View style={styles.listSubheader}>
            <Text style={styles.daysHeaderText}>{Strings.allDay}</Text>
            <Text style={styles.headerTimeText}>{Strings.anyShift}</Text>
          </View>
        </View>
      </View>
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
    color: Color.black,
  },
  crossImgContainer: {
    backgroundColor: Color.lightGrey,
    borderRadius: vh(10),
    height: vh(20),
    width: vh(20),
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
    marginHorizontal: vw(16),
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  dayTitleView: {
    height: vh(26),
    width: vw(48),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.cyanLightBlue,
    borderRadius: vw(3),
  },
  dayText: {
    fontSize: vw(12),
    lineHeight: vh(18),
    fontFamily: Fonts.Lato_Medium,
    color: Color.black,
  },
  dayIconImg: {
    height: '100%',
    width: '100%',
  },
  dayIcon: {
    height: vh(24),
    width: vw(24),
    marginHorizontal: vw(25),
  },
  dayIconCotainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subheaderText: {
    fontSize: vw(14),
    lineHeight: vh(24),
    fontFamily: Fonts.Lato_Medium,
    marginHorizontal: vw(16),
    marginVertical: vh(16),
    color: Color.black,
  },
  listHeader: {
    flexDirection: 'row',
    marginHorizontal: vw(16),
    marginLeft: vw(73.5),
    justifyContent: 'center',
  },
  daysHeaderText: {
    fontSize: vw(12),
    lineHeight: vh(18),
    color: Color.black,
    width: vw(35),
    fontFamily: Fonts.Lato_Light,
    textAlign: 'center',
  },
  listSubheader: {
    marginHorizontal: vw(9.5),
    height: vh(55),
    width: vw(54.75),
    alignSelf: 'center',
    alignItems: 'center',
  },
  headerTimeText: {
    fontSize: vw(12),
    lineHeight: vw(18),
    fontFamily: Fonts.Lato_Regular,
    textAlign: 'center',
    color: Color.black,
  },
});
