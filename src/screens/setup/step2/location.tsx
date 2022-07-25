import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Strings from '../../../utils/constant/string';
import {useDispatch, useSelector} from 'react-redux';
import {storeLocation} from '../../../redux/setup/action';
import LocalData from '../../../utils/constant/localData';
import LocalImages from '../../../utils/constant/localImages';
import ItemSeparator from '../../../components/ItemSeparator';

function Location({setModalTitle, setModalData, setAction, setViewModal}: any) {
  const {location} = useSelector((state: any) => state.SetupReducer);
  const dispatch = useDispatch<any>();

  const onDeleteLocation = (index: number) => {
    location.splice(index, 1);
    dispatch(storeLocation(location));
  };

  const onLocationPress = () => {
    setModalTitle(Strings.selectLocation);
    setModalData(LocalData.LocationData);
    setAction('location');
    setViewModal(true);
  };

  return (
    <View>
      <View style={styles.skillContainer}>
        <Text style={styles.skillHeaderText}>
          {Strings.provideLocationPreferennce}
        </Text>
        <Text style={styles.skillTitle}>{Strings.location}</Text>
        <View style={styles.addSkillView}>
          {location.length !== 0 && (
            <View style={styles.innerLocationView}>
              {location.map((item: any, index: number) => {
                return (
                  <View key={index.toString()} style={styles.selectedLocations}>
                    <Text style={styles.locationText}>
                      {item[Object.keys(item)[0]]}
                    </Text>
                    <Text style={styles.locationText}>{` - ${
                      item[Object.keys(item)[1]]
                    }`}</Text>
                    <TouchableOpacity
                      style={styles.deleteLocationButtonView}
                      activeOpacity={0.8}
                      onPress={() => onDeleteLocation(index)}>
                      <Image
                        source={LocalImages.cross}
                        style={styles.deleteLocationButton}
                        resizeMode={'contain'}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          )}
          <TouchableOpacity
            style={styles.addSkillButton}
            activeOpacity={0.8}
            onPress={onLocationPress}>
            <Text style={styles.addSkillButtonText}>
              {Strings.selectLocation}
            </Text>
            <Image
              source={LocalImages.arrowDown}
              style={styles.arrow}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ItemSeparator />
    </View>
  );
}

export default React.memo(Location);
