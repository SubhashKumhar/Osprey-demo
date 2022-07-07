import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import LocalImages from '../../../utils/constant/localImages';
import Strings from '../../../utils/constant/string';
import {useNavigation} from '@react-navigation/native';
import ItemSeparator from '../../../components/ItemSeparator';
import Color from '../../../utils/constant/colors';
import DottedLine from '../../../components/dottedLine';
import CustomButtonWithBorder from '../../../components/customButtonWithBorder';
import CustomButton from '../../../components/customButton';
import ModalWithTick from '../../../components/modalWithSearch';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import Fonts from '../../../utils/constant/fonts';
import {storeJobRoles, storeLocation} from '../../../redux/setup/action';
import TimePreferenceModal from '../components/timePreferenceModal';

export default function Step2() {
  const navigation = useNavigation<any>();
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Array<Object>>([]);
  const [viewTimeModal, setViewTimeModal] = useState<boolean>(false);
  const [action, setAction] = useState<String>('');
  const [modalTitle, setModalTitle] = useState('');
  const {jobRoles, location} = useSelector((state: any) => state.SetupReducer);
  const dispatch = useDispatch<any>();
  const timePreference = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const jobRoleData = [
    {type: 'Worker', job: 'Puller'},
    {type: 'Engineer', job: 'Civil'},
    {type: 'Teacher', job: 'Maths'},
  ];
  const LocationData = [
    {Country: 'Singapore', City: 'City'},
    {Country: 'India', City: 'Delhi'},
    {Country: 'India', City: 'UP'},
  ];
  const onBackPress = () => {
    navigation.goBack();
  };

  const onAddJobRolesPress = () => {
    setModalTitle(Strings.selectJobRoles);
    setModalData(jobRoleData);
    setAction('jobRole');
    setViewModal(true);
  };

  const onSkillPress = () => {
    // setViewModal(true);
  };

  const onLocationPress = () => {
    setModalTitle(Strings.selectLocation);
    setModalData(LocationData);
    setAction('location');
    setViewModal(true);
  };

  const onDeleteJobRoles = (index: number) => {
    jobRoles.splice(index, 1);
    dispatch(storeJobRoles(jobRoles));
  };

  const onDeleteLocation = (index: number) => {
    location.splice(index, 1);
    dispatch(storeLocation(location));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowleftContainer}
          activeOpacity={0.8}
          onPress={onBackPress}>
          <Image
            source={LocalImages.arrowLeft}
            style={styles.arrowleft}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{Strings.Job_Preferences}</Text>
      </View>
      <ItemSeparator />
      <ScrollView>
        {/* Top Current Step View  */}

        <View style={styles.stepView}>
          <Image
            source={LocalImages.checkIcon}
            resizeMode={'contain'}
            style={styles.arrowleftContainer}
          />
          <View style={styles.stepLine} />
          <View style={styles.selectedStep}>
            <Text>{Strings.Two}</Text>
          </View>
          <View style={styles.stepLine} />
          <View
            style={[styles.selectedStep, {backgroundColor: Color.lightGrey}]}>
            <Text>{Strings.Three}</Text>
          </View>
        </View>

        {/* SubHeader */}

        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            {Strings.Know_Your_Job_Preferences}
          </Text>
          <DottedLine />
        </View>

        {/* Add Job roles */}

        <View style={styles.jobCategory}>
          <Text style={styles.jobCategoryText}>
            {Strings.Add_Prefered_Job_Category}
          </Text>
          {jobRoles.map((item: any, index: number) => {
            return (
              <View key={index.toString()} style={styles.selectedJobRoles}>
                <Text style={styles.itemText}>
                  {item[Object.keys(item)[0]]}
                </Text>
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
        <DottedLine />

        {/* Skills  */}

        <View style={styles.skillContainer}>
          <Text style={styles.skillHeaderText}>{Strings.Add_Skills}</Text>
          <Text style={styles.skillTitle}>{`${Strings.Skills} *`}</Text>
          <View style={styles.addSkillView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.addSkillButton}
              onPress={onSkillPress}>
              <Text style={styles.addSkillButtonText}>
                {Strings.Know_Skills}
              </Text>
              <Image
                source={LocalImages.arrowRight}
                style={styles.arrow}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <DottedLine />

        {/* Location */}

        <View style={styles.skillContainer}>
          <Text style={styles.skillHeaderText}>
            {Strings.provideLocationPreferennce}
          </Text>
          <Text style={styles.skillTitle}>{Strings.location}</Text>
          <View style={styles.addSkillView}>
            {location.length !== 0 && (
              <View style={styles.innerLocationView}>
                {location.map((item: any, index: number) => {
                  return (
                    <View
                      key={index.toString()}
                      style={styles.selectedLocations}>
                      <Text style={styles.locationText}>
                        {item[Object.keys(item)[0]]}
                      </Text>
                      <Text style={styles.locationText}>{` - ${
                        item[Object.keys(item)[1]]
                      }`}</Text>
                      <TouchableOpacity
                        style={styles.deleteLocationButtonView}
                        activeOpacity={0.8}
                        onPress={() => onDeleteLocation(index)}>
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
              style={styles.addSkillButton}
              activeOpacity={0.8}
              onPress={onLocationPress}>
              <Text style={styles.addSkillButtonText}>
                {Strings.selectLocation}
              </Text>
              <Image
                source={LocalImages.arrowDown}
                style={styles.arrow}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ItemSeparator />

        {/* Time Preference */}

        <View style={styles.skillContainer}>
          <Text style={styles.skillTitle}>{Strings.timePreference}</Text>
          <CustomButtonWithBorder
            text={Strings.addTimePreferences}
            textColor={Color.cyanBlue}
            bgColor={Color.cyanBlueLight}
            onPressButton={() => {
              setViewTimeModal(true);
            }}
            disable={false}
            disableColor={null}
            borderColor={Color.cyanBlue}
          />
        </View>
      </ScrollView>

      {/* Modal for Location and Job roles */}

      <View>
        <Modal isVisible={viewModal} style={styles.modal}>
          <ModalWithTick
            data={modalData}
            title={modalTitle}
            setViewModal={setViewModal}
            setModalData={setModalData}
            storeList={action}
          />
        </Modal>
      </View>

      {/* Modal for Time Preferennce */}

      <View>
        <Modal isVisible={viewTimeModal} style={styles.modal}>
          <TimePreferenceModal
            setViewTimeModal={setViewTimeModal}
            modalData={timePreference}
          />
        </Modal>
      </View>

      {/* Continue Button */}

      <View style={styles.contiueButton}>
        <ItemSeparator />
        <CustomButton
          textColor={Color.cyanBlueLight}
          bgColor={Color.cyanBlue}
          text={Strings.saveAndContinue}
          onPressButton={() => {}}
          disable={false}
          disableColor={undefined}
        />
      </View>
    </SafeAreaView>
  );
}
