import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';
import {vw, vh} from '../../../utils/dimensions';
import Fonts from '../../../utils/constant/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: vw(16),
    marginVertical: vh(15),
  },
  stepText: {
    color: Color.white,
  },
  arrowleftContainer: {
    height: vh(24),
    width: vw(24),
  },
  arrowleft: {
    height: '100%',
    width: '100%',
  },
  headerText: {
    fontSize: vw(18),
    fontFamily: Fonts.Lato_Bold,
    marginLeft: vw(8),
    color: Color.black,
  },
  stepView: {
    flexDirection: 'row',
    marginVertical: vh(24),
    marginHorizontal: vw(63.5),
    alignItems: 'center',
  },
  stepLine: {
    width: vw(80),
    marginHorizontal: vw(4),
    backgroundColor: Color.grey,
    opacity: 0.5,
    height: vh(1),
  },
  selectedStep: {
    height: vh(24),
    width: vh(24),
    backgroundColor: Color.cyanBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(12),
  },
  subHeader: {
    paddingHorizontal: vw(16),
    marginVertical: vh(16),
  },
  subHeaderText: {
    fontSize: vw(16),
    lineHeight: vh(24),
    fontFamily: Fonts.Lato_Heavy,
  },
  topTextView: {
    marginHorizontal: vh(16),
  },
  topText: {
    fontSize: vw(14),
    lineHeight: vh(26),
    fontFamily: Fonts.Lato_Light,
  },
  dottedLineView: {
    marginHorizontal: vw(16),
  },
  bottom: {
    marginTop: vh(16),
    paddingHorizontal: vw(16),
  },
  requirementHeaderText: {
    fontSize: vw(14),
    fontFamily: Fonts.Lato_Bold,
    lineHeight: vh(30),
  },
  requirementText: {
    fontSize: vw(14),
    lineHeight: vh(30),
    marginTop: vh(14),
    fontFamily: Fonts.Lato_Medium,
  },
  bottomButton: {
    marginTop: 'auto',
  },
  bottomButtons: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttons: {
    marginHorizontal: vh(8),
  },
});

export default styles;
