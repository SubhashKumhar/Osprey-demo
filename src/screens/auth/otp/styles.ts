import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  innerContainer: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: vw(16),
    marginVertical: vh(11),
  },
  headerText: {
    fontSize: vh(18),
    fontWeight: '700',
  },
  mainView: {
    marginHorizontal: vw(16),
    marginVertical: vh(20),
  },
  otpBoxImg: {
    height: vh(70),
    width: vw(60),
  },
  otpHeaderText: {
    fontSize: vw(16),
    fontWeight: '600',
    paddingHorizontal: vw(10),
    paddingRight: vw(6),
  },
  otpHeaderView: {
    flexDirection: 'row',
    marginRight: vw(15),
    alignItems: 'center',
    paddingRight: vw(20),
  },
  dashLine: {
    marginVertical: vh(10),
    opacity: 0.2,
  },
  otpSentView: {
    marginVertical: vh(24),
  },
  otpSentText: {
    fontSize: vw(14),
    fontWeight: '500',
  },
  number: {
    marginTop: vh(8),
    fontSize: vw(16),
    fontWeight: '700',
    color: Color.cyanBlue,
  },
  button: {
    marginHorizontal: vw(16),
    marginBottom: vh(16),
  },
  bottom: {
    marginTop: 'auto',
  },
  resendBtn: {
    fontWeight: '600',
    color: Color.cyanBlue,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: vw(70),
    alignItems: 'center',
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockIcon: {
    height: vh(17),
    width: vw(17),
    marginRight: vw(5),
  },
  clockText: {
    color: Color.orange,
    fontSize: vw(14),
  },
  borderStyleBase: {
    width: vw(30),
    height: vh(45),
  },

  borderStyleHighLighted: {
    borderColor: Color.grey,
  },

  underlineStyleBase: {
    width: vw(56),
    height: vw(56),
    borderWidth: 1,
    backgroundColor: Color.cyanLightOpacity,
    color: Color.black,
    fontSize: vw(24),
    alignItems: 'center',
    justifyContent: 'center',
  },

  underlineStyleHighLighted: {
    borderColor: Color.cyanBlue,
    fontSize: vw(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpView: {
    height: vh(100),
    width: vw(272),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
