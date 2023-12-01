import { TextInput, TouchableOpacity } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import FormInput from './FormInput';
import React from "react";

export default function DatePicker() {
    const [date, setDate] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);
  
    const onDismissSingle = React.useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirmSingle = React.useCallback(
      (params) => {
        setOpen(false);
        setDate(params.date);
      },
      [setOpen, setDate]
    );
    return (
      <>
        <FormInput focus={() => setOpen(true)} type={"text"} isRequired={true} label={"Start Date"} error={"This field is required"}/>
        <DatePickerModal
          locale="en"
          mode="single"
          label="Select Date"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </>
       
    );
}