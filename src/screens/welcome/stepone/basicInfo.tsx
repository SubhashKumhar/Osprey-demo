import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {vh, vw} from '../../../utils/dimensions';
import localImages from '../../../utils/localImages';
import Strings from '../../../utils/constant/string';
import Color from '../../../utils/constant/colors';
import GenderDropdown from './genderDropdown';
import Input from '../../../component/input/input';
import Button from '../../../component/button';
import Picker from './datePicker';
import Header from './header';
import ModalScreen from './modalScreen';

const data = [
  {
    item: Strings.warehouseAssistent,
    state: false,
  },
  {
    item: Strings.picker,
    state: false,
  },
  {
    item: Strings.forkliftDriver,
    state: false,
  },
  {
    item: Strings.deliveryDriver,
    state: false,
  },
  {
    item: Strings.administrativeAssistant,
    state: false,
  },
  {
    item: Strings.frontDeskAssistant,
    state: false,
  },
  {
    item: Strings.customerServiceAssistant,
    state: false,
  },
];

const gender = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
  {
    id: 3,
    name: 'Others',
  },
];

const BasicInfo = ({navigation}:any) => {
  const [infoDetails, setInfoDetails] = useState({
    natinality: '',
    location: '',
    address: '',
    cName: '',
    zipcode: '',
  });

  const [open, setOpen] = useState(false);

  const [date, setDate] = useState(new Date());

  const onCalenderPress = () => {
    setOpen(true);
  };
  const [selectGender, setSelectGender] = useState(null);

  const [selJob, setJob] = useState(data[0].item);

  const onSelect = (item: React.SetStateAction<null>) => {
    setSelectGender(item);
  };

  const handleJob = useCallback(
    (item:any) => {
      setJob(item);
    },
    [selJob],
  );

  const [modal, setModal] = useState(false);

  const onModalPress = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.parentMainView}>
      <Header />
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
              value={selectGender}
              data={gender}
              onSelect={onSelect}
            />
          </View>
          <View style={styles.calanderView}>
            <Text style={styles.genderText}>
              {`${Strings.dob}`}
              <Text style={styles.astrickStyle}>{Strings.astrick}</Text>
            </Text>
            <View style={styles.calenderView}>
              <Text style={styles.calenderText}>
                {`${JSON.stringify(date.getDate())}/${JSON.stringify(
                  date.getMonth() + 1,
                )}/${JSON.stringify(date.getFullYear())}`}
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
                date={date}
                setDate={setDate}
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
          />
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>
            {`${Strings.nationality}`}
            <Text style={styles.astrickStyle}>{Strings.astrick}</Text>
          </Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place="Singapore"
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
              place="Singapore"
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
            />
          </View>
        </View>

        <View style={styles.nationalityView}>
          <Text style={styles.genderText}>{`${Strings.location}`}</Text>
          <View style={styles.nationalityViewStyle}>
            <Input
              place="Location"
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
              place="Address"
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
              place="City Name"
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
              place="Zipcode"
              placeholderColor={styles.placeColor}
              style={styles.inputViewStyle}
              onChangeText={(text: string) => {
                setInfoDetails({...infoDetails, zipcode: text});
              }}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonView}>
        <Button
          title="Save and Continue"
          customContainerStyle={[styles.buttonContainerView]}
          customTextStyle={styles.buttonTitleView}
        />
      </View>
    </View>
  );
};

export default React.memo(BasicInfo);

const styles = StyleSheet.create({
  parentMainView: {flex: 1},
  stepView: {
    flexDirection: 'row',
    marginVertical: vh(24),
    marginHorizontal: vw(63.5),
    alignItems: 'center',
  },
  stepLine: {
    width: vw(80),
    marginHorizontal: vw(4),
    backgroundColor: Color.Grey,
    opacity: 0.5,
    height: vh(1),
  },
  selectedStep: {
    height: vh(24),
    width: vh(24),
    backgroundColor: Color.Cyan_Blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(12),
  },
  numberStyle: {
    color: Color.doveGrey,
  },
  highlightNumStyle: {
    color: Color.White,
  },
  tellUsTextView: {
    height: vh(40),
    marginTop: vh(30),
    marginHorizontal: vw(16),
    borderBottomWidth: 1,
    borderBottomColor: Color.lightGrey,
  },
  tellUsText: {
    fontSize: vh(15),
    fontWeight: '500',
  },
  genderMainView: {
    height: vh(67),
    marginTop: vh(24),
    marginHorizontal: vw(16),
    flexDirection: 'row',
  },
  genderView: {
    width: vw(164),
  },
  calanderView: {
    width: vw(164),
    marginLeft: vw(14),
  },
  astrickStyle: {
    color: Color.red,
  },
  genderText: {
    color: Color.Black,
    fontSize: vh(13),
  },
  selectGender: {
    height: vh(42),
    marginTop: vh(8),
    borderWidth: 1,
  },
  jobRoleView: {
    height: vh(69),
    marginHorizontal: vw(16),
    marginTop: vh(24),
    zIndex: -1,
  },
  selectJobRoleStyle: {
    height: vh(42),
    marginTop: vh(10),
    backgroundColor: Color.solitude,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nationalityView: {
    marginHorizontal: vw(16),
    marginTop: vh(20),
  },
  placeColor: {
    color: Color.Black,
  },
  nationalityViewStyle: {
    justifyContent: 'center',
    height: vh(42),
    marginTop: vh(10),
    width: '100%',
    borderRadius: 4,
    backgroundColor: Color.solitude,
  },
  inputViewStyle: {
    marginLeft: vw(16),
  },
  buttonContainerView: {
    backgroundColor: '#2474ff',
    marginHorizontal: vw(16),
    marginTop: vh(12),
    borderRadius: 4,
  },
  buttonTitleView: {
    color: Color.White,
    fontWeight: '600',
  },
  buttonView: {height: vh(87)},
  scrollSecondView: {marginBottom: vh(10)},
  calenderView: {
    height: vh(42),
    marginTop: vh(7.5),
    backgroundColor: Color.solitude,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calenderText: {
    marginLeft: vw(16),
    width: vw(94),
    fontSize: vh(15),
  },
  calenderIcon: {tintColor: Color.Cyan_Blue, marginRight: vw(12)},
  bottomArrowImage: {height: vh(24), width: vh(24), marginRight: vw(9)},
  jobRoleText: {marginLeft: vw(16), width: '80%', height: vh(16)},
});
