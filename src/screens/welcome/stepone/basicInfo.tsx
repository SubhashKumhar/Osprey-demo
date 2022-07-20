import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import Header from './header';
import Picker from './datePicker';
import ModalScreen from './modalScreen';
import ImageSelector from './imageSelector';
import GenderDropdown from './genderDropdown';
import Button from '../../../component/button';
import Input from '../../../component/input/input';
import Color from '../../../utils/constant/colors';
import React, {useCallback, useState} from 'react';
import localImages from '../../../utils/localImages';
import Strings from '../../../utils/constant/string';

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

const BasicInfo = ({navigation}: any) => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selJob, setJob] = useState(data[0].item);
  const [selectGender, setSelectGender] = useState(null);

  const onCalenderPress = () => {
    setOpen(true);
  };

  const onModalPress = () => {
    setModal(!modal);
  };

  const handleJob = useCallback(
    (item: any) => {
      setJob(item);
    },
    [selJob],
  );

  const [infoDetails, setInfoDetails] = useState({
    natinality: '',
    location: '',
    address: '',
    cName: '',
    zipcode: '',
  });

  const onSelect = (item: React.SetStateAction<null>) => {
    setSelectGender(item);
  };

  const [img, setImg] = useState(
    'https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png',
  );

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

        <ImageSelector />
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


