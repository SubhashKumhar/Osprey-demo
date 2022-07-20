import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useMemo, useState} from 'react';
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
import {useSelector} from 'react-redux';
import LocalData from '../../../utils/constant/localData';
import TimePreferenceModal from '../components/timePreferenceModal';
import SkillModal from '../components/skillModal';
import ComponentNames from '../../../utils/constant/componentNames';
import Header from './header';
import Location from './location';
import JobRole from './jobRoles';
import Skills from './skills';

function Step2() {
  const navigation = useNavigation<any>();
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [skillModal, setSkillModal] = useState(false);
  const [modalData, setModalData] = useState<Array<Object>>([]);
  const [viewTimeModal, setViewTimeModal] = useState<boolean>(false);
  const [action, setAction] = useState<String>('');
  const [modalTitle, setModalTitle] = useState('');
  const {timePreference, skills} = useSelector(
    (state: any) => state.SetupReducer,
  );
  const onBackDropPress = () => {
    setViewModal(false);
  };

  const onEditTimePreference = () => {
    setViewTimeModal(true);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedValue = useMemo(() => check(), [timePreference]);

  function check() {
    for (let i = 0; i < 7; i++) {
      if (timePreference[Object.keys(timePreference)[i]] !== '') {
        return true;
      }
    }
    return false;
  }

  const renderTimePreferences = ({item}: any) => {
    return (
      <View style={styles.selectedTimePreferenceView}>
        <Text style={styles.timePreferenceSelectedText}>{item}</Text>
        {timePreference[item.toLowerCase()] !== '' && (
          <Image
            source={
              timePreference[item.toLowerCase()] === 'Early Shift'
                ? LocalImages.early
                : timePreference[item.toLowerCase()] === 'Day Shift'
                ? LocalImages.dayIcon
                : timePreference[item.toLowerCase()] === 'Night Shift'
                ? LocalImages.nightIcon
                : timePreference[item.toLowerCase()] === 'All Day'
                ? LocalImages.anyTimeSelected
                : null
            }
            style={styles.timeIcon}
          />
        )}
        <Text style={styles.timePreferenceSelectedText}>
          {timePreference[item.toLowerCase()].split(' ')[0]}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />
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

        <JobRole
          setModalTitle={setModalTitle}
          setModalData={setModalData}
          setAction={setAction}
          setViewModal={setViewModal}
        />

        {/* Skills  */}
        <Skills setModalTitle={setModalTitle} setSkillModal={setSkillModal} />

        {/* Location */}
        <Location
          setModalTitle={setModalTitle}
          setModalData={setModalData}
          setAction={setAction}
          setViewModal={setViewModal}
        />

        {/* Time Preference */}

        <View style={styles.skillContainer}>
          <View style={styles.timePreferenceHeader}>
            <View style={styles.itemTitle}>
              <Text style={styles.itemTitleText}>{Strings.timePreference}</Text>
              <Text style={styles.astrickText}>{Strings.astrick}</Text>
            </View>
            {memoizedValue && (
              <>
                <TouchableOpacity
                  style={styles.editIcon}
                  onPress={onEditTimePreference}>
                  <Image
                    source={LocalImages.editIcon}
                    style={styles.deleteButton}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
          {memoizedValue && (
            <>
              <DottedLine />
              <FlatList
                data={LocalData.timePreferences}
                renderItem={renderTimePreferences}
                horizontal
                scrollEnabled={false}
                bounces={false}
                contentContainerStyle={styles.timeFlatlist}
              />
            </>
          )}
          {!memoizedValue && (
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
          )}
        </View>
      </ScrollView>

      {/* Modal for Location and Job roles */}

      <View>
        <Modal
          isVisible={viewModal}
          style={styles.modal}
          animationInTiming={500}
          animationOutTiming={300}
          animationOut="fadeOutDown"
          // onBackdropPress={onBackDropPress}
        >
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
        <Modal
          isVisible={viewTimeModal}
          style={styles.modal}
          animationInTiming={500}
          animationOutTiming={300}
          animationOut="fadeOutDown"
          onBackdropPress={onBackDropPress}>
          <TimePreferenceModal
            setViewTimeModal={setViewTimeModal}
            modalData={LocalData.timePreferences}
          />
        </Modal>
      </View>

      {/* Skill Modal */}

      <View>
        <Modal
          isVisible={skillModal}
          style={styles.modal}
          animationInTiming={500}
          animationOutTiming={300}
          animationOut="fadeOutDown"
          onBackdropPress={onBackDropPress}>
          <SkillModal
            data={LocalData.SkillData}
            title={modalTitle}
            setViewModal={setSkillModal}
            setModalData={setModalData}
            storeList={action}
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
          onPressButton={() => {
            navigation.navigate(ComponentNames.Step3);
          }}
          disable={!(memoizedValue && skills.length !== 0)}
          disableColor={Color.cyanLightBlue}
        />
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Step2);
