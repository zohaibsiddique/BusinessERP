import { Box, Input, InputField, Button, ButtonText, Center, FormControl, FormControlError, FormControlLabel, FormControlLabelText, FormControlHelperText, FormControlHelper, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from '@gluestack-ui/themed';

export default function FormInput({type, isRequired, label, error, disabled = false, focus = null}){
    return (
        <FormControl isRequired={isRequired} isDisabled={disabled} >
          <FormControlLabel mt="$4.5">
            <FormControlLabelText>{label}</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type={type} placeholder={label} onFocus={focus}/>
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {error}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
    );
}