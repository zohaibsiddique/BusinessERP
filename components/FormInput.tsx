import {
  Input,
  InputField,
  FormControl,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from "@gluestack-ui/themed";

export default function FormInput({
  type,
  isRequired,
  label,
  placeholder,
  error,
  disabled = false,
  focus = null,
}) {
  return (
    <FormControl isRequired={isRequired} isDisabled={disabled}>
      <FormControlLabel mt="$4.5">
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField type={type} placeholder={placeholder} onFocus={focus} />
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{error}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
