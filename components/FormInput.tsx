import {
  Input,
  InputField,
  Box,
  FormControl,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";


export default function FormInput({
  control,errors,rules, name,
  type,
  label,
  disabled = false,
  responsiveWidth
}) {
  return (

    <Box width={responsiveWidth} p="$1">
      <FormControl isDisabled={disabled} isInvalid={errors[name]?.message ? true : false}>
        <FormControlLabel mt="$2.5">
          <FormControlLabelText size="sm">{label}</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input sx={{height: 30}} >
               <InputField 
                onBlur={onBlur} 
                onChangeText={onChange} 
                value={value} 
                size="sm" 
                type={type}  
               />
             </Input> 
          )}
          name={name}
        />
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="sm">
              {errors[name]?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
    
  );
}
