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
  const [selectedValue, setSelectedValue] = useState("25");
  return (
    <FormControl
      mt={"$3"}
      isRequired={false}
      isInvalid={false}
      paddingHorizontal={"$0.5"}
    >
      <Select justifyContent="center">
        <SelectTrigger height={25}>
          <SelectInput placeholder="Select " value={selectedValue} />
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
            <SelectItem label="25" value="25" />
            <SelectItem label="50" value="50" />
            <SelectItem label="100" value="100" />
            <SelectItem label="200" value="200" />
            <SelectItem label="500" value="500" />
            <SelectItem label="All" value="All" />
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
