import {vh, vw} from '../../../utils/dimensions';
import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';
import Fonts from '../../../utils/constant/fonts';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  bottomContainer: {
    marginHorizontal: vw(16),
    marginTop: vh(27),
  },
  headerText: {
    fontSize: vw(20),
    fontWeight: '600',
  },
  subheaderText: {
    fontSize: vw(16),
    fontWeight: '400',
    marginTop: vh(8),
  },
  headerTextView: {
    height: vh(58),
  },
  textInputHeader: {
    fontSize: vw(14),
    fontWeight: '400',
    marginTop: vh(62),
  },
  textInputView: {
    flexDirection: 'row',
  },
  countryCodeView: {
    backgroundColor: Color.textInputBackground,
    borderRadius: vh(5),
    marginVertical: vh(8),
    height: vh(48),
    width: vw(74),
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: vw(10),
  },
  countryCodeText: {
    fontSize: vw(16),
    marginLeft: vw(12),
    marginRight: vw(6),
  },
  dropDownButton: {
    height: vh(20),
    width: vw(15),
    tintColor: 'blue',
  },
  buttonContainer: {
    marginTop: vh(40),
    // bottom: vh(40),
  },
  number: {
    marginTop: vh(8),
    fontSize: vw(16),
    fontWeight: '700',
    color: Color.cyanBlue,
  },
  headerTopText: {
    flexDirection: 'row',
  },
  modalStyles: {
    margin: 0,
    marginHorizontal: vw(3),
  },
  eyeImg: {
    height: '100%',
    width: '100%',
  },
  eyeContainer: {
    height: vh(25),
    width: vw(25),
    position: 'absolute',
    right: vw(15),
    alignSelf: 'center',
  },
  phoneTextViewStyle: {
    height: vh(42),
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
  },
  countryCodeVie: {
    height: vh(42),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryCodeTex: {
    fontSize: vh(16),
    fontFamily: Fonts.Lato_Bold,
    color: Color.cyanBlue,
    lineHeight: vh(24),
  },
  phoneView: {
    justifyContent: 'center',
    width: vw(279),
    height: vh(42),
    borderRadius: 4,
  },
  phNumberTextStyle: {
    fontSize: vh(15),
    fontFamily: Fonts.Lato_Bold,
    lineHeight: vh(24),
    color: Color.Cyan_Blue,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: Color.cyanBlue,
    fontFamily: Fonts.Lato_Black,
    fontSize: vw(14),
    lineHeight: vh(16.8),
  },
});
export default styles;
