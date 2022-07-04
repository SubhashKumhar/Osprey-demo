import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {countryCodes} from './constants';
import {styles} from './styles';
import Strings from '../../utils/constant/string';

export default function CountryCode(props: any) {
  const [search, setSearch] = useState('');
  const [helperData, setHelperData] = useState(countryCodes);

  const renderList = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          props.setCurrentCountryCode(item.dial_code);
          props.onCloseModal();
        }}>
        <View style={styles.leftInsideContainer}>
          <Text style={styles.countryName}>{item.name.en}</Text>
        </View>
        <Text style={styles.dialCodeText}>{item.dial_code}</Text>
      </TouchableOpacity>
    );
  };

  const onChangeText = (text: string) => {
    setSearch(text);
    if (text) {
      const newData = countryCodes.filter((item: any) => {
        const itemData = item.name.en
          ? item.name.en.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setHelperData(newData);
    } else {
      setHelperData(countryCodes);
    }
  };
  const itemSeparator = () => {
    return <View style={styles.lineSeparator} />;
  };

  const emptyList = () => {
    return <View style={styles.emptyFlatlist} />;
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={props.onCloseModal}>
        <Text style={styles.closeText}>{Strings.Close}</Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={search}
            onChangeText={onChangeText}
            placeholder={Strings.Search}
            style={styles.textInput}
          />
        </View>
        <FlatList
          data={helperData}
          renderItem={renderList}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={emptyList}
          contentContainerStyle={styles.innerContainer}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
