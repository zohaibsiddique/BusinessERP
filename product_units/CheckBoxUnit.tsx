import { CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@gluestack-ui/themed';
import React from 'react'

function CheckBoxUnit() {
  return (
    <Checkbox
      mt={"$2.5"}
      size="sm"
      isInvalid={false}
      isDisabled={false}
      value=""
      p={"$1"}
    >
      <CheckboxIndicator mr="$2">
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Add as multiple of other unit</CheckboxLabel>
    </Checkbox>
  );
}

export default CheckBoxUnit;