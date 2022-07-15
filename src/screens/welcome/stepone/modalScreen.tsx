import {
  View,
  Text,
  Modal,
  Alert,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {vh, vw} from '../../../utils/dimensions';
import Color from '../../../utils/constant/colors';
import ItemSeparator from '../../../components/ItemSeparator';
import localImages from '../../../utils/localImages';
import Input from '../../../component/input/input';
import Button from '../../../component/button';

export default function ModalScreen({modal, setModal, data, setJob}: any) {
  const filterData = (txt:any) => {
    let newData = data.filter(item =>
      item?.item?.toLowerCase().includes(txt.toLowerCase()),
    );
    return newData;
  };

  const [curr, setCurr] = useState(0);
  const [search, setSearch] = useState('');

  const onSearch = (text: any) => {
    setSearch(text);
  };

  const onRender = ({item, index}: any) => {
    return (
      <View style={styles.renderMainView}>
        <TouchableOpacity
          onPress={() => {
            let i = filterData(search).findIndex((x: any) => x === item);
            setCurr(i);
            setJob(filterData(search)[i].item);
          }}>
          {!(index === curr) ? (
            <Image
              source={localImages.jobRadioButtonInActive}
              style={styles.radioButtonStyle}
            />
          ) : (
            <Image
              source={localImages.jobRadioButtonActive}
              style={styles.radioButtonStyle}
            />
          )}
        </TouchableOpacity>
        <View style={styles.renderItemView}>
          <Text style={styles.renderItemText}>{item.item}</Text>
          <ItemSeparator lineWidth={styles.itemSeperatorStyle} />
        </View>
      </View>
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modal}>
      <View style={styles.mainTopView}>
        <View style={styles.currentJobTextFrame}>
          <Text style={styles.jobRoleText}>{'Select current job role'}</Text>
          <TouchableOpacity
            onPress={() => {
              setModal(!modal);
              setSearch("")
            }}>
            <Image
              source={localImages.cancelIcon}
              style={styles.cancelIconStyle}
            />
          </TouchableOpacity>
        </View>
        <ItemSeparator />
        <View style={styles.searchInputView}>
          <Input
            place={'Search & select job role'}
            style={styles.inputStyle}
            onChangeText={(text: string) => {
              onSearch(text);
            }}
          />
          <Image source={localImages.search} style={styles.searchIcon} />
        </View>
        <View>
          <FlatList
            data={filterData(search)}
            renderItem={onRender}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => {
            setModal(!modal);
          }}
          title="Done"
          customContainerStyle={[styles.buttonContainerView]}
          customTextStyle={styles.buttonTitleView}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  mainTopView: {
    bottom: 0,
    position: 'absolute',
    height: vh(617),
    width: vw(375),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.White,
  },
  currentJobTextFrame: {
    height: vh(58),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    height: vh(87),
    width: '100%',
    bottom: vh(0),
    position: 'absolute',
    justifyContent: 'center',
  },
  jobRoleText: {
    marginLeft: vw(16),
  },
  cancelIconStyle: {
    height: vh(20),
    width: vh(20),
    marginRight: vw(16),
  },
  searchInputView: {
    height: vh(42),
    marginHorizontal: vw(16),
    marginTop: vh(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#f3f3f3',
    alignItems: 'center',
    backgroundColor: '#f4f8ff',
    borderRadius: vh(8),
  },
  inputStyle: {marginLeft: vw(8), fontSize: vh(15)},
  searchIcon: {height: vh(24), width: vh(24), marginRight: vw(8)},
  itemSeperatorStyle: {
    width: vw(311),
    marginTop: vh(20),
  },
  radioButtonStyle: {
    height: vh(21),
    width: vh(21),
  },
  renderMainView: {
    marginTop: vh(32),
    height: vh(30),
    flexDirection: 'row',
    marginHorizontal: vw(16),
  },
  renderItemView: {
    marginLeft: vw(8),
  },
  renderItemText: {
    fontSize: vh(13),
    width: '82%',
  },
});
