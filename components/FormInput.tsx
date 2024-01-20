import {
  Input,
  InputField,
  Box,
  FormControl,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from "@gluestack-ui/themed";

export default function FormInput({
  stateValue = "",
  type,
  isRequired,
  label,
  placeholder,
  error,
  disabled = false,
  focus = null,
  responsiveWidth
}) {
  
  return (
    <Box width={responsiveWidth} p="$1">
      <FormControl isRequired={isRequired} isDisabled={disabled}>
        <FormControlLabel mt="$2.5">
          <FormControlLabelText size="sm">{label}</FormControlLabelText>
        </FormControlLabel>
        <Input sx={{height: 30}}>
          <InputField value={stateValue} size="sm" type={type}  onFocus={focus} 
             onChangeText={newValue => set(newValue)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="sm">{error}</FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
    
  );
}
