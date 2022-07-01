import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/dimensions';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  topHeaderView: {
    height: normalize(44),
    width: normalize(375),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#f3f3f3',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
  backArrow: {
    height: normalize(24),
    width: normalize(24),
    marginLeft: 15,
  },

  signUpTitleText: {
    lineHeight: normalize(24),
    fontWeight: '500',
    fontSize: normalize(16),
    marginTop: normalize(20),
    color: 'black',
  },
  FirstNameText: {
    lineHeight: normalize(24),
    fontWeight: '400',
    fontSize: normalize(14),
    marginTop: normalize(32),
    color: 'black',
  },
  scrollViewStyle: {
    paddingHorizontal: normalize(16),
    paddingBottom: normalize(80),
    backgroundColor: '#ffffff',
  },
  astrickColor: {
    color: 'red',
  },
  inputTextViewStyle: {
    height: normalize(42),
    padding: normalize(16),
    justifyContent: 'center',
    backgroundColor: '#dfebff',
    borderRadius: 4,
  },
  NextNameText: {
    lineHeight: normalize(24),
    fontWeight: '400',
    fontSize: normalize(14),
    marginTop: normalize(24),
    color: 'black',
  },
  optionalTextColor: {
    color: '#858585',
  },
  bottomFooterView: {
    height: normalize(135),
    marginTop: normalize(4),
    borderTopWidth: normalize(5),
    borderTopColor: '#f3f3f3',
  },
  bottomTextView: {
    height: normalize(36),
    marginTop: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleImageStyle: {
    marginLeft: normalize(20),
    height: normalize(24),
    width: normalize(24),
  },
  blueColorText: {
    color: '#2474ff',
  },
  creatingAccountText: {
    fontSize: normalize(12),
    width: 317,
    marginLeft: normalize(8),
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
  phoneTextViewStyle: {
    height: normalize(42),
    alignItems:'center',
    borderRadius: 4,
    flexDirection:'row'
  },
  countryCodeView:{
    height: normalize(42),
    width: normalize(56),
    backgroundColor: '#dfebff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryCodeText:{fontSize: normalize(16), color: '#231e1e'},
  phoneView:{
    marginLeft: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfebff',
    width: normalize(279),
    height: normalize(42),
    borderRadius:4
  }

});

export default styles;
