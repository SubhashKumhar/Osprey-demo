import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Color from '../../../../../utils/constant/colors';
import Strings from '../../../../../utils/constant/string';
import {styles} from './styles';

export default function RoleDescription(props: any) {
  return (
    <View style={styles.jobDetailes}>
      <View style={styles.itemTitle}>
        <Text style={styles.itemTitleText}>{Strings.breifAboutThisRole}</Text>
        <Text style={styles.astrickText}>{Strings.astrick}</Text>
      </View>
      <View style={styles.descriptionInputContainer}>
        <TextInput
          placeholder={Strings.enterDescription}
          placeholderTextColor={Color.grey}
          multiline
          autoCorrect={false}
          onChangeText={text => {
            props.setDescription(text);
          }}
          style={styles.descriptionInput}
          value={props.description}
        />
      </View>
    </View>
  );
}
