import { AlertCircleIcon, ChevronDownIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Icon, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@gluestack-ui/themed';
import React from 'react'

function SelectOption() {
  return (
    <FormControl mt={"$2.5"} isRequired={false} isInvalid={false}>
      <FormControlLabel>
        <FormControlLabelText size='sm'>Select Parent category</FormControlLabelText>
      </FormControlLabel>
      <Select height={30}>
        <SelectTrigger>
          <SelectInput placeholder="Select option" />
          <SelectIcon >
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Fruits" value="red" />
            <SelectItem label="Vegetables" value="blue" />
            <SelectItem label="Keryana" value="black" />
            <SelectItem label="Hard Ware" value="pink"  />
            <SelectItem label="Grocerry" value="green" />
          </SelectContent>
        </SelectPortal>
      </Select>
      <FormControlHelper>
        <FormControlHelperText>
          You can only select one option
        </FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>Mandatory field</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}

export default SelectOption