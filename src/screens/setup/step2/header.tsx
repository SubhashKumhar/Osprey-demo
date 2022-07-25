import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import LocalImages from '../../../utils/constant/localImages';
import Strings from '../../../utils/constant/string';
import ItemSeparator from '../../../components/ItemSeparator';
import {useNavigation} from '@react-navigation/native';

function Header() {
  const navigation = useNavigation<any>();
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowleftContainer}
          activeOpacity={0.8}
          onPress={onBackPress}>
          <Image
            source={LocalImages.arrowLeft}
            style={styles.arrowleft}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{Strings.Job_Preferences}</Text>
      </View>
      <ItemSeparator />
    </View>
  );
}
export default React.memo(Header);
