import { CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@gluestack-ui/themed';
import React from 'react'

function CheckBox() {
  return (
    <Checkbox
      mt={"$2.5"}
      size="sm"
      
      isInvalid={false}
      isDisabled={false}
      value=''
    >
      <CheckboxIndicator mr="$2">
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Add as sub taxonomy</CheckboxLabel>
    </Checkbox>
  );
}

export default CheckBox