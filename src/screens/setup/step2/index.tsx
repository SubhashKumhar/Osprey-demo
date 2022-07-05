import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import LocalImages from '../../../utils/constant/localImages';
import Strings from '../../../utils/constant/string';
import {useNavigation} from '@react-navigation/native';
import ItemSeparator from '../../../components/ItemSeparator';
import Color from '../../../utils/constant/colors';
import DottedLine from '../../../components/dottedLine';
import CustomButtonWithBorder from '../../../components/customButtonWithBorder';

export default function Step2() {
  const navigation = useNavigation<any>();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowleftContainer}
          activeOpacity={0.8}
          onPress={onBackPress}>
          <Image
            source={LocalImages.Arrow_Left}
            style={styles.arrowleft}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{Strings.Job_Preferences}</Text>
      </View>
      <ItemSeparator />
      <ScrollView>
        <View style={styles.stepView}>
          <Image
            source={LocalImages.CheckIcon}
            resizeMode={'contain'}
            style={styles.arrowleftContainer}
          />
          <View style={styles.stepLine} />
          <View style={styles.selectedStep}>
            <Text>{Strings.Two}</Text>
          </View>
          <View style={styles.stepLine} />
          <View
            style={[styles.selectedStep, {backgroundColor: Color.Light_Grey}]}>
            <Text>{Strings.Three}</Text>
          </View>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            {Strings.Know_Your_Job_Preferences}
          </Text>
          <DottedLine />
        </View>
        <View style={styles.jobCategory}>
          <Text style={styles.jobCategoryText}>
            {Strings.Add_Prefered_Job_Category}
          </Text>
          <CustomButtonWithBorder
            text={Strings.Add_Job_Roles}
            textColor={Color.Cyan_Blue}
            bgColor={Color.Cyan_Blue_Light}
            onPressButton={() => {}}
            disable={false}
            disableColor={null}
            borderColor={Color.Cyan_Blue}
          />
        </View>
        <View style={styles.skillContainer}>
          <Text style={styles.skillHeaderText}>{Strings.Add_Skills}</Text>
          <Text style={styles.skillTitle}>{Strings.Skills}</Text>
          <TouchableOpacity style={styles.addSkillButton}>
            <Text style={styles.addSkillButtonText}>{Strings.Know_Skills}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
