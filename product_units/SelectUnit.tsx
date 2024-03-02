import {
  AlertCircleIcon,
  ChevronDownIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

function SelectPrice() {
  
  return (
    <FormControl
      mt={"$3"}
      isRequired={true}
      isInvalid={false}
      paddingHorizontal={"$0.5"}
    >
      <FormControlLabel>
        <FormControlLabelText>Allow decimal:</FormControlLabelText>
      </FormControlLabel>
      <Select justifyContent="center">
        <SelectTrigger height={25}>
          <SelectInput placeholder="Please Select " />
          <SelectIcon>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Yes" value="yes" />
            <SelectItem label="No" value="no" />
          </SelectContent>
        </SelectPortal>
      </Select>

      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>Mandatory field</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}

export default SelectPrice;
