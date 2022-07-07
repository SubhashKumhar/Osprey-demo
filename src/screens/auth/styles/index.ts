import {vh, vw} from '../../../utils/Dimension';
import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';

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
});
export default styles;
