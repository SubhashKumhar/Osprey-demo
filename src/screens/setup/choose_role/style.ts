import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  innerContainer: {
    marginHorizontal: vw(16),
  },
  mainView: {
    height: vh(50),
    justifyContent: 'flex-end',
  },
  roleTextStyle: {
    marginBottom: vh(11),
    fontSize: vh(17),
    fontWeight: '500',
  },
  lineView: {
    backgroundColor: Color.grey,
    height: vh(2),
    opacity: 0.1,
    marginTop: vh(26),
  },
  secondViewStyle: {
    flex: 0.76,
    marginTop: vh(4),
  },
  profileTypeStyle: {
    alignSelf: 'center',
    marginTop: vh(24),
    height: vw(207),
    width: vw(207),
  },
  buttonContainerView: {
    backgroundColor: '#2474ff',
    marginTop: vh(12),
    borderRadius: 4,
  },
  buttonTitleView: {
    color: '#ffffff',
    fontWeight: '600',
  },
  chooseRoleText: {
    fontSize: vh(16),
    marginTop: vh(24),
  },
  setupProfileText: {
    marginTop: vh(48),
    fontSize: vh(16),
    fontWeight: '400',
  },

  buttonView: {
    // flex: 0.1,
    backgroundColor: 'white',
    marginHorizontal: vw(16),
    bottom: vh(5),
  },
  buttonUnselectedContainerView: {
    backgroundColor: '#f3f3f3',
    marginTop: vh(12),
    borderRadius: 4,
  },
  workerClientView: {flexDirection: 'row', marginTop: vh(16)},
  staffWorkerStyle: {
    height: vw(164),
    width: vw(164),
  },
  clientStyle: {
    marginLeft: vw(15),
    height: vw(164),
    width: vw(164),
  },
  buttonUnselectedText: {
    color: '#bad3ff',
    fontWeight: '600',
  },
});

export default styles;
