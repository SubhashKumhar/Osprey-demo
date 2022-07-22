import {StyleSheet} from 'react-native';
import Color from '../../../../utils/constant/colors';
import Fonts from '../../../../utils/constant/fonts';
import {vh, vw} from '../../../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  noLanguageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw(16),
  },
  noLanguageToDisplayText: {
    fontSize: vw(16),
    fontFamily: Fonts.Lato_Medium,
    marginVertical: vh(5),
    color: Color.grey,
  },
  boxImage: {
    height: vh(100),
    width: vw(200),
  },
});
