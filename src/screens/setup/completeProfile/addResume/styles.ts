import {StyleSheet} from 'react-native';
import Color from '../../../../utils/constant/colors';
import Fonts from '../../../../utils/constant/fonts';
import {vh, vw} from '../../../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  uploadResumeView: {
    marginHorizontal: vw(16),
    marginVertical: vh(24),
  },
  resumeHeaderText: {
    color: Color.black,
  },
  documentPicker: {
    alignItems: 'center',
    justifyContent: 'center',
    height: vh(180),
    backgroundColor: Color.cyanLightBlue,
    borderWidth: 1,
    borderColor: Color.cyanBlue,
    borderRadius: vh(4),
    marginVertical: vh(8),
  },
  uploadIcon: {
    height: vh(38.87),
    width: vw(25.33),
  },
  documentPickerText: {
    fontSize: vw(14),
    lineHeight: vh(16.8),
    fontFamily: Fonts.Lato_Medium,
    color: Color.grey,
    opacity: 0.7,
    marginTop: vh(14),
    textAlign: 'center',
  },
  belowDocumentPickerText: {
    fontSize: vw(12),
    lineHeight: vh(14.4),
    fontFamily: Fonts.Lato_Medium,
    color: Color.grey,
    opacity: 0.7,
    marginTop: vh(10),
  },
  workExperienceText: {
    fontSize: vw(14),
    lineHeight: vh(24),
    color: Color.black,
  },
  resumeImg: {
    height: '90%',
    width: '100%',
  },
  resumeImgContainer: {
    height: vh(150),
    width: vw(110),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(4),
    marginTop: vh(10),
    backgroundColor: Color.cyanLightBlue,
  },
  updateResumeContainer: {
    height: vh(30),
    width: vh(30),
    position: 'absolute',
    top: vh(10),
    right: vw(5),
  },
  updateResume: {
    height: '100%',
    width: '100%',
  },
});
