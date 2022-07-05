import {StyleSheet} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },

  mainView: {
    flex: 0.12,
    justifyContent: 'flex-end',
    backgroundColor: '#ffff',
  },
  roleTextStyle: {
    marginBottom: vh(11),
    marginLeft: vw(16),
    fontSize: vh(17),
    fontWeight: '500',
  },
  secondViewStyle: {
    flex: 0.76,
    marginTop: vh(4),
    backgroundColor: '#ffff',
  },
  profileTypeStyle: {
    alignSelf: 'center',
    marginTop: vh(24),
    height: vw(207),
    width: vw(207),
  },
  lineView: {
    marginTop: vh(26),
    marginHorizontal: vw(16),
    height: vh(1),
    backgroundColor: '#f3f3f3',
  },
  buttonContainerView: {
    backgroundColor: '#2474ff',
    marginHorizontal: vw(16),
    marginTop: vh(12),
    borderRadius: 4,
  },
  buttonTitleView: {
    color: '#ffffff',
    fontWeight: '600',
  },
  chooseRoleText: {
    marginHorizontal: vw(16),
    fontSize: vh(16),
    marginTop: vh(24),
  },
  setupProfileText: {
    marginTop: vh(48),
    fontSize: vh(16),
    marginHorizontal: vw(16),
    fontWeight: '400',
  },

  buttonView: {
    flex: 0.1,
    backgroundColor: 'white',
    marginTop: vh(4),
  },
  buttonUnselectedContainerView: {
    backgroundColor: '#f3f3f3',
    marginHorizontal: vw(16),
    marginTop: vh(12),
    borderRadius: 4,
  },
  workerClientView: {flexDirection: 'row', marginTop: vh(16)},
  staffWorkerStyle: {
    marginLeft: vw(16),
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
