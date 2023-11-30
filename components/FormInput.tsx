import { Box, Input, InputField, Button, ButtonText, Center, FormControl, FormControlError, FormControlLabel, FormControlLabelText, FormControlHelperText, FormControlHelper, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from '@gluestack-ui/themed';

export default function FormInput({type, isRequired, label, error}){
    return (
        <FormControl isRequired={isRequired} >
          <FormControlLabel mt="$4.5">
            <FormControlLabelText>{label}</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type={type} placeholder={label}/>
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