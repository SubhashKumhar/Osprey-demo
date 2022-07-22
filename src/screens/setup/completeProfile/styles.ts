import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';
import Fonts from '../../../utils/constant/fonts';
import {vh, vw} from '../../../utils/dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  storeInfoButtons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: vw(16),
    marginVertical: vh(16),
    marginTop: vh(24),
  },
  storeTextView: {},
  storeText: {
    fontSize: vw(14),
    lineHeight: vh(18),
    color: Color.black,
    fontFamily: Fonts.Lato_Semibold,
  },
  storeSubText: {
    fontSize: vw(12),
    lineHeight: vh(18),
    fontFamily: Fonts.Lato_Regular,
    color: Color.peach,
    backgroundColor: Color.lightPeach,
    paddingVertical: vh(5),
    borderRadius: vh(5),
    marginVertical: vh(4),
    textAlign: 'center',
    justifyContent: 'center',
    width: vw(108),
  },
  arrow: {
    height: vh(24),
    width: vh(24),
    resizeMode: 'contain',
  },
  buttons: {
    marginTop: 'auto',
    marginHorizontal: vw(8),
    bottom: vh(7),
  },
  storeSavedText: {
    fontSize: vw(12),
    lineHeight: vh(18),
    fontFamily: Fonts.Lato_Regular,
    color: Color.Cyan_Blue,
    backgroundColor: Color.cyanLightOpacity,
    paddingVertical: vh(5),
    borderRadius: vh(5),
    marginVertical: vh(4),
    textAlign: 'center',
    justifyContent: 'center',
    width: vw(48),
  },
});
