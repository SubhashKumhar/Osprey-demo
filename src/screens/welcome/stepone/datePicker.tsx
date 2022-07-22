import React, {useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Picker = ({open, setOpen, date, setDate}: any) => {
  return (
    <SafeAreaView>
      <DatePicker
        modal
        androidVariant="nativeAndroid"
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

export default Picker;
