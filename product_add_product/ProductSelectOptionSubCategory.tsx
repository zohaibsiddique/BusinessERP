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

function ProductSelectOptionSubCategory({ responsiveWidth }) {
  return (
    <Box width={responsiveWidth}>
      <FormControl isRequired={false} isInvalid={false} p={"$1"} size="sm">
        <FormControlLabel mt="$2.5">
          <FormControlLabelText>Sub Category: </FormControlLabelText>
        </FormControlLabel>
        <Select>
          <SelectTrigger height={30}>
            <SelectInput placeholder="Please Select" />
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
              <SelectItem label="Fruit" value="fruit" />
              <SelectItem label="Groceries" value="grocery" />
              <SelectItem label="Mobiles" value="mobile" />
              <SelectItem label="Electronics" value="electronic" />
              <SelectItem label="Vegetables" value="vegetables" />
              <SelectItem label="Arhat" value="arhat" />
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

export default ProductSelectOptionSubCategory;
