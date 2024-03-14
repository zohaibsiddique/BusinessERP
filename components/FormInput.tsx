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
import React from "react";
import { Controller } from "react-hook-form";

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
  placeholder,
}) {
  return (
    <Box width={responsiveWidth} p="$1">
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
            <Input sx={{ height: 30 }}>
              <InputField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
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
