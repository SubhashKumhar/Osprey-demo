import {StyleSheet} from 'react-native';
import Color from '../../utils/constant/colors';
import {vw, vh} from '../../utils/Dimension';

export const styles = StyleSheet.create({
  container: {
    height: vh(700),
    width: '100%',
    position: 'absolute',
    bottom: vh(0),
  },
  innerContainer: {
    backgroundColor: Color.White,
    minHeight: vh(640),
    paddingHorizontal: vw(15),
    paddingTop: vh(15),
    borderTopStartRadius: vh(20),
    borderTopEndRadius: vh(20),
    paddingBottom: vh(30),
  },
  flatListContainer: {
    paddingHorizontal: vw(7),
  },
  itemContainer: {
    height: vh(50),
    paddingHorizontal: vw(5),
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: vh(5),
    justifyContent: 'space-between',
  },
  leftInsideContainer: {
    flexDirection: 'row',
  },
  dialCodeText: {
    fontSize: vw(16),
  },
  countryName: {
    fontSize: vw(16),
  },
  closeText: {
    color: Color.White,
    fontSize: vw(16),
    textAlign: 'right',
    fontWeight: '600',
    marginVertical: vh(20),
    marginHorizontal: vw(20),
  },
  lineSeparator: {
    backgroundColor: Color.Black,
    height: vh(1),
    opacity: 0.3,
  },
  listHeader: {
    backgroundColor: Color.White,
  },
  textInput: {
    height: vh(48),
    width: '100%',
    backgroundColor: Color.TextInputBackground,
    borderRadius: vh(10),
    padding: vh(10),
  },
  textInputContainer: {
    // height: vh(70),
    // bottom: vh(10),
    backgroundColor: Color.White,
    borderRadius: vh(5),
    marginVertical: vh(8),
    alignSelf: 'center',
    width: '95%',
  },
  emptyFlatlist: {
    backgroundColor: Color.White,
    height: vh(650),
  },
});
