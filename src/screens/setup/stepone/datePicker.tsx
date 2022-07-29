import React from 'react';
import {SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Picker = ({open, setOpen, infoData, setInfoDetails}: any) => {
  return (
    <SafeAreaView>
      <DatePicker
        maximumDate={new Date()}
        modal
        androidVariant="nativeAndroid"
        mode="date"
        open={open}
        date={infoData.date}
        onConfirm={data => {
          setOpen(false);
          setInfoDetails({...infoData, date: data});
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

export default Picker;
