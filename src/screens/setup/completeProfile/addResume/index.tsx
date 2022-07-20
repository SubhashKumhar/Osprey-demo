import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Strings from '../../../../utils/constant/string';
import BackHeader from '../../../../components/backHeader';
import DocumentPicker from 'react-native-document-picker';
import LocalImages from '../../../../utils/constant/localImages';
import CustomButtonWithBorder from '../../../../components/customButtonWithBorder';
import Color from '../../../../utils/constant/colors';
import {useNavigation} from '@react-navigation/native';
import ComponentNames from '../../../../utils/constant/componentNames';
import FileViewer from 'react-native-file-viewer';

export default function AddResume() {
  const navigation = useNavigation<any>();
  const [resume, setResume] = useState({});

  const handleLinking = async () => {
    try {
      // const isSupported = await Linking.canOpenURL(resume.fileCopyUri);
      // if (isSupported) {
      //   await Linking.openURL(
      //     'http://www.africau.edu/images/default/sample.pdf',
      // );
      // }
      await FileViewer.open(resume.uri);
    } catch (err) {
      console.log('err', err);
      Alert.alert(JSON.stringify(err));
    }
  };

  const handleDocumentPicker = async () => {
    try {
      let res = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: false,
        copyTo: 'documentDirectory',
        type: [DocumentPicker.types.pdf],
      });
      console.log('resume', res[0]);
      if (res[0]?.size > 500096) {
        Alert.alert('File is too Large');
      } else {
        setResume(res[0]);
      }
    } catch {
      Alert.alert('Item Pickeup Failed');
    }
  };
  const onUpdateResume = () => {
    Alert.alert(
      'Do you want to Update Resume',
      '',
      [
        {
          text: 'Yes',
          onPress: handleDocumentPicker,
        },
        {
          text: 'No',
        },
      ],
      {cancelable: false},
    );
  };

  const onAddWorlExperience = () => {
    navigation.navigate(ComponentNames.experienceDetails);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={Strings.resumeExperience} />
      <View style={styles.uploadResumeView}>
        <Text style={styles.resumeHeaderText}>{Strings.Resume}</Text>
        {Object.keys(resume).length === 0 ? (
          <>
            <TouchableOpacity
              style={styles.documentPicker}
              onPress={handleDocumentPicker}>
              <Image
                source={LocalImages.uploadIcon}
                style={styles.uploadIcon}
              />
              <Text style={styles.documentPickerText}>
                {Strings.tapToUploadYourResume}
              </Text>
            </TouchableOpacity>

            <Text style={styles.belowDocumentPickerText}>
              {Strings.fileSizeMaxFormatPDFDoc}
            </Text>
          </>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.resumeImgContainer}
            onPress={handleLinking}>
            <Image
              source={LocalImages.resume}
              style={styles.resumeImg}
              resizeMode={'contain'}
            />
            <TouchableOpacity
              style={styles.updateResumeContainer}
              activeOpacity={0.8}
              onPress={onUpdateResume}>
              <Image
                source={LocalImages.uploadIcon}
                style={styles.updateResume}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.uploadResumeView}>
        <Text style={styles.workExperienceText}>{Strings.workExperience}</Text>
        <CustomButtonWithBorder
          onPressButton={onAddWorlExperience}
          textColor={Color.cyanBlue}
          bgColor={Color.cyanLightBlue}
          text={Strings.addWorkExperience}
          disable={false}
          disableColor={''}
          borderColor={Color.cyanBlue}
        />
      </View>
    </SafeAreaView>
  );
}
