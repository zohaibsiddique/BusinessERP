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
  control,
  errors,
  rules,
  name,
  inputType = "text",
  label,
  isRequired = false,
  disabled = false,
  responsiveWidth,
}) {
  return (
    <Box width={responsiveWidth} >
      <FormControl
        isRequired={isRequired}
        isDisabled={disabled}
        isInvalid={errors[name]?.message ? true : false}
      >
        <FormControlLabel mt="$2.5">
          <FormControlLabelText size="sm">{label}</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input sx={{ height: 40 }}>
              <InputField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                size="sm"
               
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
