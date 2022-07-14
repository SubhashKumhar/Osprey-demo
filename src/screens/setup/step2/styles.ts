import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';
import Fonts from '../../../utils/constant/fonts';
import {vh, vw} from '../../../utils/dimensions';

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
  dottedLine: {
    marginHorizontal: vw(16),
  },
  stepText: {
    fontSize: vw(12),
    color: Color.black,
  },
  subHeader: {
    marginVertical: vh(8),
    marginHorizontal: vw(16),
  },
  subHeaderText: {
    fontSize: vw(15),
    fontFamily: Fonts.Lato_Heavy,
    marginBottom: vh(6),
    color: Color.black,
  },
  jobCategory: {
    marginHorizontal: vw(16),
    marginVertical: vh(10),
  },
  jobCategoryText: {
    fontSize: vw(14),
    fontFamily: Fonts.Lato_Medium,
    color: Color.black,
    lineHeight: vw(24),
  },
  skillHeaderText: {
    fontSize: vw(14),
    lineHeight: vh(24),
    color: Color.black,
  },
  skillContainer: {
    marginHorizontal: vw(16),
    marginVertical: vh(12),
  },
  skillTitle: {
    fontSize: vw(14),
    fontFamily: Fonts.Lato_Semibold,
    lineHeight: vh(16.8),
    marginTop: vh(16),
  },
  addSkillButton: {
    height: vh(42),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addSkillButtonText: {
    fontSize: vw(16),
    fontFamily: Fonts.Lato_Medium,
    lineHeight: vh(26),
    color: Color.lightText,
    opacity: 0.5,
  },
  arrow: {
    height: vh(24),
    width: vw(24),
    tintColor: Color.cyanBlue,
  },
  contiueButton: {
    marginHorizontal: vw(16),
    paddingBottom: vh(6),
  },
  modal: {
    margin: 0,
  },
  itemText: {
    fontSize: vw(14),
    fontFamily: Fonts.Lato_Bold,
    lineHeight: vh(16.8),
  },
  selectedJobRoles: {
    flexDirection: 'row',
    marginHorizontal: vw(8),
    marginVertical: vh(5),
  },
  deleteButtonView: {
    height: vh(17),
    width: vw(17),
    position: 'absolute',
    right: 0,
  },
  deleteButton: {
    height: '100%',
    width: '100%',
  },
  addSkillView: {
    backgroundColor: Color.cyanBlueLight,
    borderRadius: vw(5),
    paddingHorizontal: vw(9),
    borderWidth: vh(1),
    borderColor: Color.cyanBlue,
    marginVertical: vh(10),
  },
  selectedLocations: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: vw(8),
    paddingHorizontal: vw(8),
    backgroundColor: Color.darkTextInputColor,
    height: vh(32),
    borderRadius: vw(4),
    marginTop: vh(8),
  },
  locationText: {
    fontSize: vw(14),
    lineHeight: vh(22),
    color: Color.cyanBlue,
    fontFamily: Fonts.Lato_Bold,
  },
  deleteLocationButtonView: {
    height: vh(16),
    width: vw(16),
    backgroundColor: Color.cyanBlue,
    borderRadius: vh(10),
    overflow: 'hidden',
    marginLeft: vw(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteLocationButton: {
    height: '50%',
    width: '50%',
    tintColor: Color.cyanBlueLight,
  },
  innerLocationView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: vw(8),
  },
  timePreferenceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timePreferenceText: {
    fontSize: vw(14),
    fontFamily: Fonts.Lato_Semibold,
    lineHeight: vh(16.8),
  },
  editIcon: {
    height: vh(24),
    width: vw(24),
  },
  selectedTimePreferenceView: {
    marginVertical: vh(16),
    marginHorizontal: vw(7),
    height: vh(92),
    alignItems: 'center',
    width: vw(34),
  },
  timeIcon: {
    height: vh(30),
    width: vw(30),
    resizeMode: 'contain',
    marginVertical: vh(14),
  },
  timeFlatlist: {
    // paddingHorizontal: vw(16),
  },
});
export default styles;
