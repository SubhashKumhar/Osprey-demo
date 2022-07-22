import {View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackHeader from '../../../../../components/backHeader';
import Strings from '../../../../../utils/constant/string';
import {styles} from './styles';
import Color from '../../../../../utils/constant/colors';
import JobRole from './jobRole';
import CustomButton from '../../../../../components/customButton';
import ItemSeparator from '../../../../../components/ItemSeparator';
import RoleDescription from './roleDescription';
import {useDispatch, useSelector} from 'react-redux';
import CustomTextInput from '../../../../../components/customTextInput';
import {
  storeManualResume,
  updateManualResume,
} from '../../../../../redux/setup/action';
import {useNavigation, useRoute} from '@react-navigation/native';
import ComponentNames from '../../../../../utils/constant/componentNames';

function AddExperienceDetails() {
  const [stillEmployed, setStillEmployed] = useState(false);
  const [month, setMonth] = useState('');
  const [years, setYears] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [description, setDescription] = useState<String>('');
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {manualResume} = useSelector((state: any) => state.SetupReducer);

  useEffect(() => {
    if (route.params) {
      setJobRole(route.params.item.jobRole);
      setDescription(route.params.item.description);
      setMonth(route.params.item.months);
      setYears(route.params.item.years);
    }
  }, [route.params]);

  const onSubmitPress = () => {
    if (route.params) {
      let temp = manualResume;
      temp[route.params.index] = {
        jobRole: jobRole,
        years: parseInt(years, 10),
        months: parseInt(month, 10),
        stillInSame: stillEmployed,
        description: description,
      };
      console.log('temp', temp);
      dispatch(updateManualResume(temp));
    } else {
      let payload = {
        jobRole: jobRole,
        years: parseInt(years, 10),
        months: parseInt(month, 10),
        stillInSame: stillEmployed,
        description: description,
      };
      dispatch(storeManualResume(payload));
    }
    navigation.navigate(ComponentNames.AddResume);
  };

  const onChangeMonth = (text: string) => {
    setMonth(text);
  };

  const onChangeYears = (text: string) => {
    setYears(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={Strings.experienceDetails} />
      <View style={styles.innerContainer}>
        <JobRole
          stillEmployed={stillEmployed}
          setStillEmployed={setStillEmployed}
          setJobRole={setJobRole}
          jobRole={jobRole}
        />
        <View style={styles.experienceTime}>
          <CustomTextInput
            value={month.toString()}
            placeholder={Strings.numberOfMonths}
            width={165}
            onChangeText={onChangeMonth}
            keyboardType={'number-pad'}
            style={styles.textInput}
          />
          <CustomTextInput
            placeholder={Strings.numberOfYears}
            value={years.toString()}
            width={165}
            onChangeText={onChangeYears}
            keyboardType={'number-pad'}
            style={styles.textInput}
          />
        </View>
        <RoleDescription
          description={description}
          setDescription={setDescription}
        />
      </View>
      <View style={styles.bottom}>
        <ItemSeparator />
        <View style={styles.addResumeButtonContainer}>
          <CustomButton
            textColor={Color.white}
            bgColor={Color.cyanBlue}
            text={Strings.addResume}
            onPressButton={onSubmitPress}
            disable={
              jobRole.length === 0 ||
              years.length === 0 ||
              month.length === 0 ||
              description.length === 0
            }
            disableColor={Color.cyanLightBlue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(AddExperienceDetails);
