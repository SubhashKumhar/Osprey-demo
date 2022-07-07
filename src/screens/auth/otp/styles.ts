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
  crossImg: {
    height: vh(25),
    width: vw(17),
    opacity: 0.2,
    position: 'absolute',
    alignSelf: 'center',
  },
  otpBox: {
    backgroundColor: Color.textInputBackground,
    height: vh(56),
    width: vh(56),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(5),
    marginHorizontal: vw(8),
  },
  otpSection: {
    flexDirection: 'row',
    marginVertical: vh(24),
  },
  otpInput: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    padding: vh(20),
    fontSize: vh(24),
    fontWeight: '800',
  },
  button: {
    marginHorizontal: vw(16),
    marginBottom: vh(16),
  },
  bottom: {
    marginTop: 'auto',
  },
  resendBtn: {
    fontSize: vw(14),
    marginHorizontal: vw(10),
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
});

export default styles;
