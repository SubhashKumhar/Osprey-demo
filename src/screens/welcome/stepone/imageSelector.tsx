import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {vh, vw} from '../../../utils/dimensions';
import Color from '../../../utils/constant/colors';
import localImages from '../../../utils/localImages';
import ImagePicker from 'react-native-image-crop-picker';
import LocalImages from '../../../utils/constant/localImages';

export default function ImageSelector() {
  const [img, setImg] = useState(LocalImages.defaultImagePicker);

  return (
    <View style={styles.imageMainView}>
      <Text style={styles.profileText}>{'Upload your profile photo'}</Text>
      <View style={styles.pictureView}>
        <TouchableOpacity
          style={styles.deleteIconView}
          activeOpacity={0.5}
          onPress={() => {
            setImg(LocalImages.defaultImagePicker);
          }}>
          <Image source={localImages.deleteIcon} style={styles.deleteImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imagePickView}
          activeOpacity={0.5}
          onPress={() => {
            ImagePicker.openPicker({
              width: 400,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log(image);
              setImg(image.sourceURL);
            });
          }}>
          <Image source={{uri: img}} style={styles.selectImageStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageMainView: {
    height: vh(125),
    width: vw(158),
    marginLeft: vw(16),
    marginTop: vh(24),
  },
  profileText: {fontSize: vh(13)},
  pictureView: {height: vh(96), width: vh(96), marginTop: vh(12)},
  deleteIconView: {
    height: vh(26),
    width: vh(26),
    backgroundColor: Color.White,
    padding: 2,
    position: 'absolute',
    borderRadius: 40,
    right: 0,
    borderColor: 'white',
  },
  deleteImage: {zIndex: 1},
  imagePickView: {
    height: '100%',
    width: '100%',
    borderRadius: vh(100),
    borderWidth: 1,
    zIndex: -1,
  },
  selectImageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: vh(100),
  },
});
