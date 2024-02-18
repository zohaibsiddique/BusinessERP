import { AlertCircleIcon, ChevronDownIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, Icon, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@gluestack-ui/themed';
import React from 'react'

function SelectUnit() {
  return (
    <FormControl mt={"$2.5"} isRequired={false} isInvalid={false} p="$1">
      <FormControlLabel>
        <FormControlLabelText size="sm">Allow Decimal</FormControlLabelText>
      </FormControlLabel>
      <Select >
        <SelectTrigger size="sm" height={30}>
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

export default SelectUnit;