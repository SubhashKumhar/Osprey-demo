import {View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../../../../../components/backHeader';
import Strings from '../../../../../utils/constant/string';
import {styles} from './styles';
import Color from '../../../../../utils/constant/colors';
import JobRole from './jobRole';
import CustomButton from '../../../../../components/customButton';
import ItemSeparator from '../../../../../components/ItemSeparator';
import JobDate from './jobDate';
import RoleDescription from './roleDescription';

export default function AddExperienceDetails() {
  const [stillEmployed, setStillEmployed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={Strings.experienceDetails} />
      <View style={styles.innerContainer}>
        <JobRole
          stillEmployed={stillEmployed}
          setStillEmployed={setStillEmployed}
        />
        <JobDate title={Strings.jobStartDate} />
        <JobDate title={Strings.jobEndDate} />
        <RoleDescription />
      </View>
      <View style={styles.bottom}>
        <ItemSeparator />
        <View style={styles.addResumeButtonContainer}>
          <CustomButton
            textColor={Color.white}
            bgColor={Color.cyanBlue}
            text={Strings.addResume}
            onPressButton={() => {}}
            disable={false}
            disableColor={Color.cyanLightBlue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
