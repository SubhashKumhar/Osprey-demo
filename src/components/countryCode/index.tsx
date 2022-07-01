import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {countryCodes} from './constants';
import {styles} from './styles';
import Strings from '../../utils/constant/string';
import CustomTextInput from '../customTextInput';

export default function CountryCode(props: any) {
  const [searchContent, setSearchContent] = useState('');
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
  const listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <CustomTextInput
          value={searchContent}
          placeholder={Strings.Search}
          onChangeText={onChangeText}
        />
      </View>
    );
  };

  const onChangeText = (text: string) => {
    setSearchContent(text);
  };
  const itemSeparator = () => {
    return <View style={styles.lineSeparator} />;
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={props.onCloseModal}>
        <Text style={styles.closeText}>{Strings.Close}</Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <FlatList
          data={searchContent ? helperData : countryCodes}
          renderItem={renderList}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={listHeader}
          ItemSeparatorComponent={itemSeparator}
          stickyHeaderIndices={[0]}
          contentContainerStyle={styles.innerContainer}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
