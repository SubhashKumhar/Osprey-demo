import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Strings from '../../../utils/constant/string';
import {useDispatch, useSelector} from 'react-redux';
import {storeSkills} from '../../../redux/setup/action';
import LocalImages from '../../../utils/constant/localImages';
import DottedLine from '../../../components/dottedLine';

export default function Skills({setModalTitle, setSkillModal}: any) {
  const dispatch = useDispatch<any>();
  const {skills} = useSelector((state: any) => state.SetupReducer);

  const onSkillPress = () => {
    setModalTitle(Strings.selectSkills);
    setSkillModal(true);
  };

  const onDeleteSkills = (index: number) => {
    skills.splice(index, 1);
    dispatch(storeSkills(skills));
  };
  return (
    <View>
      <View style={styles.skillContainer}>
        <Text style={styles.skillHeaderText}>{Strings.Add_Skills}</Text>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>{Strings.Skills}</Text>
          <Text style={styles.astrickText}>{Strings.astrick}</Text>
        </View>
        <View style={styles.addSkillView}>
          {skills.length !== 0 && (
            <View style={styles.innerLocationView}>
              {skills.map((item: any, index: number) => {
                return (
                  <View key={index.toString()} style={styles.selectedLocations}>
                    <Text style={styles.locationText}>
                      {item[Object.keys(item)[0]]}
                    </Text>
                    <Text style={styles.locationText}>{` - ${
                      item[Object.keys(item)[1]]
                    }`}</Text>
                    <TouchableOpacity
                      style={styles.deleteLocationButtonView}
                      activeOpacity={0.8}
                      onPress={() => onDeleteSkills(index)}>
                      <Image
                        source={LocalImages.cross}
                        style={styles.deleteLocationButton}
                        resizeMode={'contain'}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addSkillButton}
            onPress={onSkillPress}>
            <Text style={styles.addSkillButtonText}>{Strings.Know_Skills}</Text>
            <Image
              source={LocalImages.arrowRight}
              style={styles.arrow}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <DottedLine />
      </View>
    </View>
  );
}
