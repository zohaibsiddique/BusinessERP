import { Box, Text, Input, InputField, Button, ButtonText, Center, FormControl, FormControlError, FormControlLabel, FormControlLabelText, FormControlHelperText, FormControlHelper, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon, View, Modal, ModalContent, ModalBackdrop, ModalHeader, Heading, ModalCloseButton, Icon, ModalBody, ModalFooter, CloseIcon, ScrollView } from '@gluestack-ui/themed';
import FormInput from '../components/FormInput';
import { DatePickerInput, DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Platform, TouchableOpacity } from 'react-native';
import DatePicker from '../components/DatePicker';

export default function BusinessInformation() {
    
    return (
      <Box p="$2" bg="$white">
        <Center>
          <Button w="$32" h="$32"variant="outline"action="secondary">
            <ButtonText>ADD LOGO</ButtonText>
          </Button>
        </Center>
        
        <FormInput type={"text"} isRequired={true} label={"Business Name"} error={"Please specify your business name"}/>
        
        <DatePicker/>

        <FormInput type={"text"} isRequired={false} label={"Website"} error={""}/>
        <FormInput type={"text"} isRequired={false} label={"Business Contact number"} error={""}/>
        <FormInput type={"text"} isRequired={false} label={"Alternate Contact number"} error={""}/>
        <FormInput type={"text"} isRequired={true} label={"Country"} error={""}/>
        <FormInput type={"text"} isRequired={true} label={"State"} error={""}/>
        <FormInput type={"text"} isRequired={true} label={"City"} error={""}/>
        <FormInput type={"text"} isRequired={true} label={"Zip Code"} error={""}/>
        <FormInput type={"text"} isRequired={true} label={"Landmark"} error={""}/>

      </Box>
    );
  }