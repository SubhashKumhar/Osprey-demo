import {StyleSheet} from 'react-native';
import Color from '../../../../../utils/constant/colors';
import Fonts from '../../../../../utils/constant/fonts';
import {vh, vw} from '../../../../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  innerContainer: {
    marginHorizontal: vw(16),
    marginVertical: vh(24),
  },
  itemTitle: {
    flexDirection: 'row',
  },
  astrickText: {
    color: Color.red,
    fontSize: vw(14),
    lineHeight: vh(16.8),
    fontFamily: Fonts.Lato_Medium,
  },
  itemTitleText: {
    fontSize: vw(14),
    lineHeight: vh(16.8),
    color: Color.black,
    fontFamily: Fonts.Lato_Medium,
  },
  stillEmployedView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: vh(11),
  },
  stillEmployedText: {
    fontSize: vw(12),
    lineHeight: vh(18),
    color: Color.black,
  },
  stillEmployedImg: {
    height: '100%',
    width: '100%',
  },
  stillEmployedImgContainer: {
    height: vh(15),
    width: vh(15),
    marginHorizontal: vw(7),
  },
  jobDetailes: {
    marginTop: vh(25),
    marginBottom: vh(7),
  },
  calenderImg: {
    tintColor: Color.cyanBlue,
  },
  descriptionInputContainer: {
    height: vh(187),
    marginVertical: vh(10),
    backgroundColor: Color.cyanLightOpacity,
    borderRadius: vh(8),
    padding: vw(16),
  },
  customButton: {
    backgroundColor: Color.cyanBlue,
    opacity: 0.05,
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  addResumeButtonContainer: {
    paddingHorizontal: vw(16),
  },
  experienceTime: {
    flexDirection: 'row',
  },
  textInput: {
    marginRight: vw(12),
  },
  descriptionInput: {
    height: '100%',
    width: '100%',
    color: Color.Black,
    fontFamily: Fonts.Lato_Medium,
    fontSize: vw(16),
    lineHeight: vh(19.2),
  },
});
