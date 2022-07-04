import { StyleSheet } from "react-native";
import { normalize } from "../../utils/dimensions";

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
      marginBottom: normalize(11),
      marginLeft: normalize(16),
      fontSize: normalize(17),
      fontWeight: '500',
    },
    secondViewStyle: {
      flex: 0.76,
      marginTop: normalize(4),
      backgroundColor: '#ffff',
    },
    profileTypeStyle: {
      alignSelf: 'center',
      marginTop: normalize(24),
      height: normalize(172),
      width: normalize(227),
    },
    lineView: {
      marginTop: normalize(26),
      marginHorizontal: normalize(16),
      height: normalize(1),
      backgroundColor: '#f3f3f3',
    },
    buttonContainerView: {
      backgroundColor: '#2474ff',
      marginHorizontal: normalize(16),
      marginTop: normalize(12),
      borderRadius: 4,
    },
    buttonTitleView: {
      color: '#ffffff',
      fontWeight: '600',
    },
    chooseRoleText: {
      marginHorizontal: normalize(16),
      fontSize: normalize(16),
      marginTop: normalize(24),
    },
    setupProfileText: {
      marginTop: normalize(48),
      fontSize: normalize(16),
      marginHorizontal: normalize(16),
      fontWeight: '400',
    },
  
    buttonView: {
      flex: 0.1,
      backgroundColor: 'white',
      marginTop: normalize(4),
    },
    buttonUnselectedContainerView: {
      backgroundColor: '#f3f3f3',
      marginHorizontal: normalize(16),
      marginTop: normalize(12),
      borderRadius: 4,
    },
    workerClientView: {flexDirection: 'row', marginTop: normalize(16)},
    staffWorkerStyle: {
      marginLeft: normalize(16),
      height: normalize(164),
      width: normalize(164),
    },
    clientStyle: {
      marginLeft: normalize(15),
      height: normalize(164),
      width: normalize(164),
    },
    buttonUnselectedText: {
      color: '#bad3ff',
      fontWeight: '600',
    },
  });

  export default styles;