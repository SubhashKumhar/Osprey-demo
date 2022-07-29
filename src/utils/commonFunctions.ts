import Snackbar from 'react-native-snackbar';
import Color from './constant/colors';

export const showToast = (message: string) => {
  Snackbar.show({
    text: message,
    backgroundColor: Color.black,
    duration: 1000,
    textColor: Color.white,
  });
};
