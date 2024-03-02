import { Box } from "@gluestack-ui/themed";
import {
  AlertCircleIcon,
  ChevronDownIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
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
import React from "react";

function ProductSelectOption() {
  return (
    <Box py="$2.5">
      <FormControl isRequired={true} isInvalid={false} p={"$1"} size="sm">
        <FormControlLabel>
          <FormControlLabelText>Barcode Type: </FormControlLabelText>
        </FormControlLabel>
        <Select initialLabel="Code 128 (C128)">
          <SelectTrigger height={30}>
            <SelectInput placeholder="Select option" />
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
              <SelectItem label="Code 128 (C128)" value="c128" />
              <SelectItem
                label="Code 39 (C39)"
                value="c39"
              />
              <SelectItem label="EAN-13" value="ean13" />
              <SelectItem label="EAN-8" value="ean8" />
              <SelectItem label="UPC-A" value="upca" />
              <SelectItem label="UPC-E" value="upce" />
            </SelectContent>
          </SelectPortal>
        </Select>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Mandatory field</FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
}

export default ProductSelectOption;
