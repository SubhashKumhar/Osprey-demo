import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import Color from '../../../utils/constant/colors';

const styles = StyleSheet.create({
  parentMainView: {flex: 1},
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
    opacity: 0.5,
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
  numberStyle: {
    color: Color.doveGrey,
  },
  highlightNumStyle: {
    color: Color.White,
  },
  tellUsTextView: {
    height: vh(40),
    marginTop: vh(30),
    marginHorizontal: vw(16),
    borderBottomWidth: 1,
    borderBottomColor: Color.lightGrey,
  },
  tellUsText: {
    fontSize: vh(15),
    fontWeight: '500',
  },
  genderMainView: {
    height: vh(67),
    marginTop: vh(24),
    marginHorizontal: vw(16),
    flexDirection: 'row',
  },
  genderView: {
    width: vw(164),
  },
  calanderView: {
    width: vw(164),
    marginLeft: vw(14),
  },
  astrickStyle: {
    color: Color.red,
  },
  genderText: {
    color: Color.Black,
    fontSize: vh(13),
  },
  selectGender: {
    height: vh(42),
    marginTop: vh(8),
    borderWidth: 1,
  },
  jobRoleView: {
    height: vh(69),
    marginHorizontal: vw(16),
    marginTop: vh(24),
    zIndex: -1,
  },
  selectJobRoleStyle: {
    height: vh(42),
    marginTop: vh(10),
    backgroundColor: Color.cyanLightOpacity,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Color.Cyan_Blue,
    borderWidth: 0.2,
  },
  nationalityView: {
    marginHorizontal: vw(16),
    marginTop: vh(20),
  },
  placeColor: {
    color: Color.Black,
  },
  nationalityViewStyle: {
    justifyContent: 'center',
    height: vh(42),
    marginTop: vh(10),
    width: '100%',
    borderRadius: 4,
    backgroundColor: Color.cyanLightOpacity,
    borderWidth: 0.2,
    borderColor: Color.Cyan_Blue,
  },
  inputViewStyle: {
    marginLeft: vw(16),
  },
  buttonContainerView: {
    backgroundColor: '#2474ff',
    marginHorizontal: vw(16),
    marginTop: vh(12),
    borderRadius: 4,
  },
  buttonTitleView: {
    color: Color.White,
    fontWeight: '600',
  },
  buttonView: {
    marginHorizontal: vw(16),
    marginBottom: vh(8),
  },
  scrollSecondView: {
    marginBottom: vh(10),
  },
  calenderView: {
    height: vh(42),
    marginTop: vh(7.5),
    backgroundColor: Color.cyanLightOpacity,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    borderColor: Color.Cyan_Blue,
  },
  calenderText: {
    marginLeft: vw(16),
    width: vw(94),
    fontSize: vh(15),
  },
  calenderIcon: {
    tintColor: Color.Cyan_Blue,
    height: vh(26),
    width: vw(26),
  },
  bottomArrowImage: {
    height: vh(24),
    width: vh(24),
    marginRight: vw(9),
  },
  jobRoleText: {
    marginLeft: vw(16),
    width: '80%',
    height: vh(20),
  },
});

export default styles;
