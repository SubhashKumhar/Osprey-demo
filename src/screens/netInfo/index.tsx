import {StyleSheet, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function NetworkInfo(props: any) {
  const [connected, setConnected] = useState(false);
  // useEffect(() => {
  //   const subscribe = NetInfo.addEventListener(state => {
  //     console.log('Connection type', state.type);
  //     console.log('Is connected?', state.isConnected);
  //     if (state.isConnected) {
  //       console.log('inside connected');
  //       setConnected(false);
  //     } else {
  //       console.log('inside not connected');
  //       setConnected(true);
  //     }
  //   });

  //   return subscribe;
  // }, []);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
      console.log('connect', state.isConnected);
    });
  }, []);

  const onRetryPress = () => {
    NetInfo.refresh().then(state => {
      setConnected(state.isConnected);
      console.log('refresh', state.isConnected);
    });
  };

  if (connected) {
    return null;
  }

  return (
    <Modal
      coverScreen
      avoidKeyboard
      scrollHorizontal
      isVisible={!connected}
      animationInTiming={600}
      animationOutTiming={300}
      animationOut="fadeOutDown"
      style={styles.container}>
      {/* <NoInternet onPressRetry={() => onRetryPress()} /> */}
      <Text>{'No Internet'}</Text>
      <Button title="Retry" onPress={onRetryPress} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
