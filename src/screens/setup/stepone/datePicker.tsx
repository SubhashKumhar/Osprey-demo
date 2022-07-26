import React from 'react';
import {SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Picker = ({
  open,
  setOpen,
  date,
  setDate,
  infoData,
  setInfoDetails,
}: any) => {
  return (
    <SafeAreaView>
      <DatePicker
        modal
        androidVariant="nativeAndroid"
        mode="date"
        open={open}
        date={date}
        onConfirm={data => {
          setOpen(false);
          setDate(data);
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
