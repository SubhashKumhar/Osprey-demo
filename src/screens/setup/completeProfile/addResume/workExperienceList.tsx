import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../../../../utils/constant/colors';
import {vh, vw} from '../../../../utils/dimensions';
import Fonts from '../../../../utils/constant/fonts';
import LocalImages from '../../../../utils/constant/localImages';
import ItemSeparator from '../../../../components/ItemSeparator';
import CustomButtonWithBorder from '../../../../components/customButtonWithBorder';
import Strings from '../../../../utils/constant/string';
import {updateManualResume} from '../../../../redux/setup/action';
import {useNavigation} from '@react-navigation/native';
import ComponentNames from '../../../../utils/constant/componentNames';

export default function WorkExperienceList(props: any) {
  const {manualResume} = useSelector((state: any) => state.SetupReducer);
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();

  const _onDeletePress = useCallback(
    (index: number) => {
      let temp = [...manualResume];
      temp.splice(index, 1);
      dispatch(updateManualResume(temp));
    },
    [dispatch, manualResume],
  );

  const _onEditPress = useCallback(
    (item: any, index: number) => {
      navigation.navigate(ComponentNames.experienceDetails, {
        item,
        index,
      });
    },
    [navigation],
  );

  const _renderItem = useCallback(
    ({item, index}: any) => {
      return (
        <View style={styles.listItemContainer}>
          <View style={styles.listItem}>
            <View style={styles.headerContainer}>
              <Text style={styles.jobRoleText}>{item.jobRole}</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => _onDeletePress(index)}
                  style={styles.iconInnerContainer}>
                  <Image
                    source={LocalImages.delete}
                    style={[styles.icons, {tintColor: Color.red}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => _onEditPress(item, index)}
                  style={styles.iconInnerContainer}>
                  <Image source={LocalImages.editIcon} style={styles.icons} />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={
                styles.experienceText
              }>{`${item.years} Years and ${item.months} Months`}</Text>
            <ItemSeparator />
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          {index === manualResume.length - 1 && (
            <View>
              <ItemSeparator />
              <View style={styles.buttonContainer}>
                <CustomButtonWithBorder
                  onPressButton={props.onAddWorlExperience}
                  textColor={Color.cyanBlue}
                  bgColor={Color.cyanLightBlue}
                  text={Strings.addWorkExperience}
                  disable={false}
                  disableColor={''}
                  borderColor={Color.cyanBlue}
                />
              </View>
            </View>
          )}
        </View>
      );
    },
    [
      _onDeletePress,
      _onEditPress,
      manualResume.length,
      props.onAddWorlExperience,
    ],
  );

  const _listHeader = useCallback(() => {
    return (
      <Text style={styles.workExperienceText}>{Strings.workExperience}</Text>
    );
  }, []);

  return (
    <FlatList
      data={manualResume}
      ListHeaderComponent={_listHeader}
      renderItem={_renderItem}
      style={styles.container}
      bounces={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: vh(8),
    marginHorizontal: vw(16),
  },
  listItemContainer: {
    backgroundColor: Color.cyanBlueLight,
    borderWidth: vh(1),
    borderColor: Color.cyanLightBlue,
    borderRadius: vh(4),
    marginVertical: vh(8),
  },
  listItem: {
    paddingTop: vh(16),
    paddingHorizontal: vw(16),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobRoleText: {
    fontFamily: Fonts.Lato_Regular,
    fontSize: vw(14),
    lineHeight: vh(18),
    marginVertical: vh(2),
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconInnerContainer: {},
  icons: {
    height: vh(15),
    width: vw(14),
    marginRight: vw(6),
  },
  experienceText: {
    fontSize: vw(12),
    lineHeight: vh(14.4),
    color: Color.grey,
    marginVertical: vh(4),
    fontFamily: Fonts.Lato_Medium,
  },
  descriptionText: {
    fontSize: vw(14),
    lineHeight: vh(24),
    fontFamily: Fonts.Lato_Regular,
    marginVertical: vh(4),
  },
  buttonContainer: {
    marginHorizontal: vw(16),
    marginVertical: vh(16),
  },
  workExperienceText: {
    fontSize: vw(14),
    lineHeight: vh(24),
    color: Color.black,
  },
});
