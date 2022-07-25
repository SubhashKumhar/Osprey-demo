import React from 'react';
import {SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Picker = ({
  open,
  setOpen,
  data,
  setDate,
  setInfoDetails,
  infoData,
}: any) => {
  // const Picker = ({open, setOpen, date, setDate}: any) => {
  return (
    <SafeAreaView>
      <DatePicker
        modal
        androidVariant="nativeAndroid"
        mode="date"
        open={open}
        date={data}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setInfoDetails({...infoData, date: date});
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

export default Picker;
