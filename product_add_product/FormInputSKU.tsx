import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Input,
  InputField,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  FormControlLabel,
  Text,
  FormControlLabelText,
  Pressable,
  VStack,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import InfoTooltip from "../components/InfoTooltip";

export default function FormInputSKU({
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
  // hovering effect
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box width={responsiveWidth} p="$1">
      <FormControl
        isRequired={isRequired}
        isDisabled={disabled}
        isInvalid={errors[name]?.message ? true : false}
      >
        <FormControlLabel mt="$3">
          <FormControlLabelText size="sm">SKU:</FormControlLabelText>
        </FormControlLabel>
        <Pressable
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ color: "#38bdf8", marginLeft: 35, marginTop: -20 }}
          />
          {isHovering && (
            <Box
              position="absolute"
              p={"$3"}
              borderRadius={"$sm"}
              mt={"$1.5"}
              rounded={"$md"}
              bgColor="$$backgroundLight0"
             borderWidth={"$1"}
            >
              <Text>Unique product ID or Stock keeping Unit</Text>
              <Text>Keep it blank to automatically generate SKU </Text>
              <Text fontWeight={"$light"}fontSize={"$sm"}>You can modify SKU prefix in Business Settings</Text>
            </Box>
          )}
        </Pressable>
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
