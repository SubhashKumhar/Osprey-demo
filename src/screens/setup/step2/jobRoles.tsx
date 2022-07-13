import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Strings from '../../../utils/constant/string';
import {useDispatch, useSelector} from 'react-redux';
import {storeJobRoles} from '../../../redux/setup/action';
import Color from '../../../utils/constant/colors';
import LocalImages from '../../../utils/constant/localImages';
import DottedLine from '../../../components/dottedLine';
import CustomButtonWithBorder from '../../../components/customButtonWithBorder';
import LocalData from '../../../utils/constant/localData';
import Fonts from '../../../utils/constant/fonts';

export default function JobRole({
  setModalTitle,
  setModalData,
  setAction,
  setViewModal,
}: any) {
  const dispatch = useDispatch<any>();
  const {jobRoles} = useSelector((state: any) => state.SetupReducer);

  const onDeleteJobRoles = (index: number) => {
    jobRoles.splice(index, 1);
    dispatch(storeJobRoles(jobRoles));
  };

  const onAddJobRolesPress = () => {
    setModalTitle(Strings.selectJobRoles);
    setModalData(LocalData.jobRoleData);
    setAction('jobRole');
    setViewModal(true);
  };

  return (
    <View>
      <View style={styles.jobCategory}>
        <Text style={styles.jobCategoryText}>
          {Strings.Add_Prefered_Job_Category}
        </Text>
        {jobRoles.map((item: any, index: number) => {
          return (
            <View key={index.toString()} style={styles.selectedJobRoles}>
              <Text style={styles.itemText}>{item[Object.keys(item)[0]]}</Text>
              <Text
                style={[
                  styles.itemText,
                  {fontFamily: Fonts.Lato_Regular},
                ]}>{` - ${item[Object.keys(item)[1]]}`}</Text>
              <TouchableOpacity
                style={styles.deleteButtonView}
                activeOpacity={0.8}
                onPress={() => onDeleteJobRoles(index)}>
                <Image
                  source={LocalImages.delete}
                  style={styles.deleteButton}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          );
        })}
        <CustomButtonWithBorder
          text={Strings.Add_Job_Roles}
          textColor={Color.cyanBlue}
          bgColor={Color.cyanBlueLight}
          onPressButton={onAddJobRolesPress}
          disable={false}
          disableColor={null}
          borderColor={Color.cyanBlue}
        />
      </View>
      <View style={styles.dottedLine}>
        <DottedLine />
      </View>
    </View>
  );
}
