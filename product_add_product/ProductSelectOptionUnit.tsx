import { Box } from "@gluestack-ui/themed";
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
  HStack,
} from "@gluestack-ui/themed";
import React from "react";
import ProductUnitButton from "./ProductUnitButton";

function ProductSelectOptionUnit({ responsiveWidth }) {
  return (
    <Box p="$1" width={responsiveWidth}>
      <HStack space={"none"}>
        <Box width={"90%"}>
          <FormControl isRequired={true} isInvalid={false} size="sm">
            <FormControlLabel mt="$2.5">
              <FormControlLabelText>Unit: </FormControlLabelText>
            </FormControlLabel>
            <Select>
              <SelectTrigger
                borderBottomRightRadius={0}
                borderTopRightRadius={0}
                height={30}
              >
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
                  <SelectItem label="    Pieces (Pc(s)" value="pcs" />
                  <SelectItem label="    Piece (Pc)" value="c39" />
                </SelectContent>
              </SelectPortal>
            </Select>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>Mandatory field</FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
        <Box width={"10%"} mt="$2.5">
          <ProductUnitButton />
        </Box>
      </HStack>
    </Box>
  );
}

export default ProductSelectOptionUnit;
