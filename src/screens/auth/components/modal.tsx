import {FlatList, StyleSheet, Modal, View, Text} from 'react-native';
import React from 'react';
import {vh} from '../../../utils/Dimension';
import Color from '../../../utils/constant/colors';

interface Props {
  showModal: Boolean;
  setShowModal: any;
  data: any;
  SetCurrentCountryCode: any;
}

export default function CustomModal({data, SetCurrentCountryCode}: Props) {
  const renderCountryCodes = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <Modal visible={true}>
      <FlatList
        data={data}
        renderItem={renderCountryCodes}
        contentContainerStyle={styles.modalView}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    height: vh(100),
    backgroundColor: Color.White,
  },
});
