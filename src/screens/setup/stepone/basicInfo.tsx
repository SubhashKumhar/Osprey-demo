import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import Picker from './datePicker';
import {data, gender} from './data';
import {useDispatch} from 'react-redux';
import ModalScreen from './modalScreen';
import ImageSelector from './imageSelector';
import GenderDropdown from './genderDropdown';
import Input from '../../../component/input/input';
import Color from '../../../utils/constant/colors';
import React, {useCallback, useState} from 'react';
import localImages from '../../../utils/localImages';
import Strings from '../../../utils/constant/string';
import BackHeader from '../../../components/backHeader';
import {InfoUserData} from '../../../redux/welcome/action';
import CustomButton from '../../../components/customButton';
import ComponentNames from '../../../utils/constant/componentNames';

const BasicInfo = ({navigation}: any) => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [selJob, setJob] = useState(data[0]?.item);
  const dispatch = useDispatch<any>();
  const [infoDetails, setInfoDetails] = useState({
    natinality: '',
    location: '',
    address: '',
    cName: '',
    zipcode: '',
    job: '',
    date: new Date(),
    gender: null,
    profile: '',
  });

  const onCalenderPress = () => {
    setOpen(true);
  };

  const onModalPress = () => {
    setModal(!modal);
  };

  const handleJob = useCallback(
    (item: any) => {
      setJob(item);
      setInfoDetails({...infoDetails, job: item});
    },
    [infoDetails],
  );

  const onSelect = (item: React.SetStateAction<null>) => {
    setInfoDetails({...infoDetails, gender: item});
  };

  const onPressSaveData = () => {
    dispatch(InfoUserData(infoDetails));
    navigation.navigate(ComponentNames.Step2);
  };

  return (
    <SafeAreaView style={styles.parentMainView}>
      <BackHeader title={Strings.basicInfo} />
      <ScrollView
        style={styles.scrollSecondView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.stepView}>
          <View style={styles.selectedStep}>
            <Text style={styles.highlightNumStyle}>{Strings.one}</Text>
          </View>
          <View style={styles.stepLine} />
          <View
            style={[styles.selectedStep, {backgroundColor: Color.lightGrey}]}>
            <Text style={styles.numberStyle}>{Strings.two}</Text>
          </View>
          <View style={styles.stepLine} />
          <View
            style={[styles.selectedStep, {backgroundColor: Color.lightGrey}]}>
            <Text style={styles.numberStyle}>{Strings.three}</Text>
          </View>
        </View>
        <View style={styles.tellUsTextView}>
          <Text style={styles.tellUsText}>{Strings.aboutYourSelf}</Text>
        </View>
        <View style={styles.genderMainView}>
          <View style={styles.genderView}>
            <Text style={styles.genderText}>
              {`${Strings.gender}`}
              <Text style={styles.astrickStyle}>{Strings.astrick}</Text>
            </Text>
            <GenderDropdown
              data={gender}
              onSelect={onSelect}
              infoData={infoDetails}
            />
          </View>
          <View style={styles.calanderView}>
            <Text style={styles.genderText}>
              {`${Strings.dob}`}
              <Text style={styles.astrickStyle}>{Strings.astrick}</Text>
            </Text>
            <View style={styles.calenderView}>
              <Text style={styles.calenderText}>
                {`${JSON.stringify(
                  infoDetails?.date?.getDate(),
                )}/${JSON.stringify(
                  infoDetails.date.getMonth() + 1,
                )}/${JSON.stringify(infoDetails.date.getFullYear() - 18)}`}
              </Text>
              <TouchableOpacity onPress={onCalenderPress}>
                <Image
                  source={localImages.calenderIcon}
                  style={styles.calenderIcon}
                />
              </TouchableOpacity>
              <Picker
                open={open}
                setOpen={setOpen}
                infoData={infoDetails}
                setInfoDetails={setInfoDetails}
              />
            </View>
          </View>
        </View>
        <View style={styles.jobRoleView}>
          <Text style={styles.genderText}>
            {`${Strings.jobRole}`}
            <Text style={styles.astrickStyle}>{Strings.astrick}</Text>
          </Text>
          <TouchableOpacity
            style={styles.selectJobRoleStyle}
            activeOpacity={0.8}
            onPress={onModalPress}>
            <Text style={styles.jobRoleText}>{selJob}</Text>
            <Image
              source={localImages.bottomArrow}
              style={styles.bottomArrowImage}
            />
          </TouchableOpacity>
          <ModalScreen
            selJob={selJob}
            setJob={handleJob}
            data={data}
            modal={modal}
            setModal={setModal}
            filterData={data}
          />
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>
            {`${Strings.nationality}`}
            <Text style={styles.astrickStyle}>{Strings.astrick}</Text>
          </Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place={Strings.singapore}
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
              maxLength={30}
              onChangeText={(text: string) => {
                setInfoDetails({...infoDetails, natinality: text});
              }}
            />
          </View>
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>{`${Strings.country}`}</Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place={Strings.singapore}
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
            />
          </View>
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>{`${Strings.location}`}</Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place={Strings.location}
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
              onChangeText={(text: string) => {
                setInfoDetails({...infoDetails, location: text});
              }}
            />
          </View>
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>{`${Strings.streetAddress}`}</Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place={Strings.address}
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
              onChangeText={(text: string) => {
                setInfoDetails({...infoDetails, address: text});
              }}
            />
          </View>
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>{`${Strings.cityName}`}</Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place={Strings.cityName}
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
              onChangeText={(text: string) => {
                setInfoDetails({...infoDetails, cName: text});
              }}
            />
          </View>
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>{`${Strings.zipcode}`}</Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place={Strings.zipcode}
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
              onChangeText={(text: string) => {
                setInfoDetails({...infoDetails, zipcode: text});
              }}
            />
          </View>
        </View>

        <ImageSelector infoData={infoDetails} setInfoDetails={setInfoDetails} />
      </ScrollView>

      <View style={styles.buttonView}>
        <CustomButton
          textColor={Color.white}
          bgColor={Color.cyanBlue}
          text={'Save and Continue'}
          onPressButton={onPressSaveData}
          disable={false}
          disableColor={''}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(BasicInfo);
