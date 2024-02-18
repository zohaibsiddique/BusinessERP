import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-searchable-dropdown-kj";
import {
  FormControl,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  Box,
} from "@gluestack-ui/themed";
import { Controller } from "react-hook-form";

const DropdownComponent = ({
  control,
  errors,
  rules,
  name,
  isRequired = false,
  disabled = false,
  list,
  keyLabel,
  values,
  responsiveWidth,
  label,
}) => {
  const [isFocus, setIsFocus] = useState(false);

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
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={list}
              search
              maxHeight={300}
              labelField={keyLabel}
              valueField={values}
              placeholder={!isFocus ? "Select" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={onBlur}
              onChange={(item) => {
                onChange(item[keyLabel]);
              }}
            />
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
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 30,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
});
