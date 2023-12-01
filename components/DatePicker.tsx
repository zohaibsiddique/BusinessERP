import { Platform, TextInput, TouchableOpacity } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import FormInput from './FormInput';
import React from "react";
import { Box, FormControl, FormControlLabel, FormControlLabelText, Heading, Text } from "@gluestack-ui/themed";

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
       <FormControl isRequired={true} >
        <FormControlLabel mt="$4.5">
            <FormControlLabelText>Start Date</FormControlLabelText>
          </FormControlLabel>
       </FormControl>
       
        <TouchableOpacity  onPress={() => {setOpen(true);}}>
            <Text p="$2" borderWidth="$1" borderColor="$secondary200" borderRadius="$md" color="$secondary300">Start Date</Text>
        </TouchableOpacity>
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