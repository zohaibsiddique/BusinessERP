import { Pressable, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import {
  ButtonText,
  CloseIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Button,
  Icon,
  Box,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Modal,
  View,
  VStack,
  AlertCircleIcon,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";
import FormInput from "./FormInput";
import { Controller } from "react-hook-form";

export default function DatePicker({
  control,errors,rules, name,
  inputType = "text",
  label,
  isRequired = false,
  disabled = false,
  responsiveWidth
}) {
  const [showModal, setShowModal] = useState(false);
  const [dateValue, setDateValue] = useState(dayjs());
  const ref = React.useRef(null);
 
  return (
    <>
    <VStack width={responsiveWidth} p="$1" >
      <FormControl isRequired={isRequired} isDisabled={disabled} isInvalid={errors[name]?.message ? true : false}>
        <FormControlLabel mt="$2.5">
          <FormControlLabelText size="sm">{label}</FormControlLabelText>
        </FormControlLabel>
        <Pressable onPress={() => {setShowModal(true);}} ref={ref}>
          <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Input sx={{height: 30}} >
                  <InputField 
                    onBlur={onBlur} 
                    onChangeText={onChange} 
                    value={value} 
                    size="sm" 
                    type={inputType}  
                  />
                </Input> 

                <Modal isOpen={showModal} onClose={() => { setShowModal(false);}} finalFocusRef={ref}>
                  <ModalBackdrop />
                  <ModalContent>
                    <ModalHeader>
                      <Heading size="lg" color="$red600">
                          {label}
                      </Heading>
                      <ModalCloseButton>
                        <Icon as={CloseIcon} />
                      </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                      <View>
                        <DateTimePicker
                          value={dateValue}
                          onValueChange={(date) => {onChange(date), setShowModal(false)}}
                          selectedItemColor="#dc2626"
                        />
                      </View>
                    </ModalBody>
                  </ModalContent>
                </Modal> 
              </>
             
            )}
            name={name}
          />
        </Pressable>
        
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="sm">
              {errors[name]?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

    </VStack>
     
        
    </>
    
  );
}
