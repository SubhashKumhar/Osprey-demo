import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {vh, vw} from '../../../utils/dimensions';
import LocalImages from '../../../utils/constant/localImages';
import Strings from '../../../utils/constant/string';
import Color from '../../../utils/constant/colors';
import Services from '../../../services/Services';
import EndPoint from '../../../utils/endPoint';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {storeCountryId} from '../../../redux/auth/action';

export default function TopAuthHeader(props: any) {
  const [region, setRegion] = useState([]);
  const [showCountry, setShowCountry] = useState(false);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    country();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function country() {
    Services.getApiCall(
      EndPoint.country,
      Strings.pageOne,
      (resp: any) => {
        setRegion(resp.data.data.result);
        console.log('resp', region);
      },
      (err: any) => {
        console.log('error', err);
      },
    );
  }
  const onClosePress = () => {
    setShowCountry(false);
  };

  const onFlagPress = () => {
    setShowCountry(true);
  };

  const selectFlag = (item: any) => {
    props.setCountryName(item.name);
    dispatch(storeCountryId(item._id));
    setShowCountry(false);
  };

  const renderCountryItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => selectFlag(item)}
        style={styles.listFlagView}
        activeOpacity={0.8}>
        <Image
          source={
            item.name === 'Singapore'
              ? LocalImages.singapore_flag
              : LocalImages.malaysian_flag
          }
          style={styles.flagImg}
          resizeMode={'contain'}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.topContainer}>
      {showCountry && (
        <Modal
          isVisible={showCountry}
          onBackdropPress={onClosePress}
          backdropColor={Color.transparent}
          onBackButtonPress={onClosePress}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}>
          <View style={styles.countryFlatlist}>
            <FlatList
              data={region}
              renderItem={renderCountryItem}
              scrollEnabled={false}
            />
          </View>
        </Modal>
      )}
      <Image
        source={LocalImages.ospreyQRLogo}
        style={styles.logoImg}
        resizeMode={'contain'}
      />
      <Text style={styles.logoText}>{Strings.Name}</Text>
      <View style={[styles.circle, styles.topCircle]} />
      <View style={[styles.circle, styles.bottomCircle]} />
      <TouchableOpacity
        onPress={onFlagPress}
        style={styles.topFlag}
        activeOpacity={0.8}>
        <Image
          source={
            props.countryName === 'Singapore'
              ? LocalImages.singapore_flag
              : props.countryName === 'Malaysia'
              ? LocalImages.malaysian_flag
              : null
          }
          style={styles.flagImg}
          resizeMode={'contain'}
        />
        <Image
          source={LocalImages.arrowDown}
          style={styles.dropDownButton}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImg: {
    height: vh(90.55),
    width: vw(105.5),
  },
  modal: {
    margin: 0,
  },
  topContainer: {
    height: vh(442),
    backgroundColor: Color.cyanBlue,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoText: {
    fontSize: vh(20),
    fontWeight: '700',
    color: Color.white,
    marginTop: vh(29.4),
  },
  circle: {
    height: vh(204.11),
    width: vh(212),
    borderRadius: vh(200),
    borderWidth: vh(25),
    borderWidthColor: Color.white,
    opacity: 0.05,
    position: 'absolute',
  },
  bottomCircle: {
    bottom: vh(-106),
    left: vh(-102.5),
  },
  topCircle: {
    top: vh(-106),
    right: vh(-102.5),
  },
  flagsView: {},
  topFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: vh(40),
    right: vw(20),
  },
  flagImg: {
    height: vh(40),
    width: vw(40),
  },
  dropDownButton: {
    height: vh(30),
    width: vw(20),
    tintColor: Color.white,
  },
  countryFlatlist: {
    backgroundColor: Color.TextInputBackground,
    position: 'absolute',
    top: vh(60),
    right: vw(0),
    paddingVertical: vh(16),
  },
  listFlagView: {
    flexDirection: 'row',
    marginVertical: vh(5),
    alignItems: 'center',
  },
});
