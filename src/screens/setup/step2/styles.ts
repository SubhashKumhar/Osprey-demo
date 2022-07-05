import {StyleSheet} from 'react-native';
import Color from '../../../utils/constant/colors';
import {vh, vw} from '../../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
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
    fontWeight: '700',
    marginLeft: vw(8),
    color: Color.Black,
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
    backgroundColor: Color.Grey,
    opacity: 0.2,
    height: vh(1),
  },
  selectedStep: {
    height: vh(24),
    width: vh(24),
    backgroundColor: Color.Cyan_Blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(12),
  },
  stepText: {
    fontSize: vw(12),
    color: Color.Black,
  },
  subHeader: {
    marginVertical: vh(8),
    marginHorizontal: vw(16),
  },
  subHeaderText: {
    fontSize: vw(15),
    fontWeight: '600',
    marginBottom: vh(6),
    color: Color.Black,
  },
  jobCategory: {
    marginHorizontal: vw(16),
    marginVertical: vh(10),
  },
  jobCategoryText: {
    fontSize: vw(14),
    fontFamily: 'Lato-Bold',
    color: Color.Black,
    lineHeight: vw(24),
  },
  skillHeaderText: {
    fontSize: vw(14),
    lineHeight: vh(24),
  },
  skillContainer: {
    marginHorizontal: vw(16),
  },
  skillTitle: {
    fontSize: vw(14),
    lineHeight: vh(16.8),
    marginTop: vh(16),
  },
  addSkillButton: {
    backgroundColor: Color.Light_SkyBlue,
    height: vh(42),
    alignItems: 'center',
    flexDirection: 'row',
  },
  addSkillButtonText: {
    fontSize: vw(16),
    lineHeight: vh(26),
  },
});
export default styles;
