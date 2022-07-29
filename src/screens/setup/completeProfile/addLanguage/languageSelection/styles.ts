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
    flex: 1,
    backgroundColor: Color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(16),
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
  button: {},
  languageContainer: {},
  languageContainerHeader: {},
});
