import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {vh, vw} from '../../../utils/dimensions';
import Color from '../../../utils/constant/colors';
import localImages from '../../../utils/localImages';

export default function GenderDropdown({
  data,
  value,
  infoData,
  setInfoDetails,
  onSelect = () => {},
}: any) {
  const [showData, setShowData] = useState(false);

  const onSelectedItem = (val: any) => {
    setShowData(false);
    onSelect(val);
  };

  return (
    <View style={styles.selectGender}>
      <TouchableOpacity
        style={styles.dropDownStyle}
        activeOpacity={0.7}
        onPress={() => {
          setShowData(!showData);
        }}>
        <Text style={styles.textStyle}>
          {value ? value?.name : 'Select Gender'}
        </Text>
        <Image
          source={localImages.bottomArrow}
          style={[
            styles.dropArrowStyle,
            {transform: [{rotate: showData ? '180deg' : '0deg'}]},
          ]}
        />
      </TouchableOpacity>
      {showData && (
        <View style={styles.dataItemView}>
          {data.map((val, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                onPress={() => {
                  setInfoDetails({...infoData, gender: val});
                  onSelectedItem(val);
                }}
                style={styles.genderItemStyle}
                activeOpacity={1}>
                <Text style={styles.genderTextStyle}>{val.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  selectGender: {
    marginTop: vh(7.5),
    backgroundColor: Color.cyanLightOpacity,
    borderWidth: 0.2,
    borderColor: Color.Cyan_Blue,
    borderRadius: 4,
  },
  dropDownStyle: {
    height: vh(42),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: vh(4),
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: vh(15),
    marginVertical: vh(8),
    marginLeft: vw(16),
  },
  dropArrowStyle: {
    height: vh(24),
    width: vh(24),
    marginRight: vw(10),
  },
  genderItemStyle: {
    alignItems: 'center',
    paddingVertical: vh(8),
  },
  genderTextStyle: {
    alignSelf: 'flex-start',
    marginLeft: vw(16),
    fontSize: vh(17),
  },
  dataItemView: {backgroundColor: '#f3f3f3', elevation: 10},
});
