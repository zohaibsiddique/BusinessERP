import { Box, ChevronDownIcon, Icon, Input, InputField, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, onChange,Text, HStack } from '@gluestack-ui/themed';
import React from 'react'


function AddMultipleUnit() {
  return (
    <HStack space='md' p={"$1"}>
      <Text>1 Unit = </Text>
      <Input sx={{ height: 30 }}>
        <InputField size="sm" placeholder='times base unit' />
      </Input>
      <Select>
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
            <SelectItem label="Pieces (Pc(s))" value="pcs" />
            <SelectItem label="Piece (Pc)" value="pc" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </HStack>
  );
}

export default AddMultipleUnit