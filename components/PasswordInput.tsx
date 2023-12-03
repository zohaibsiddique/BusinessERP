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
  InputSlot,
  InputIcon,
  EyeOffIcon,
  EyeIcon,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function FormInput({
  isRequired,
  label,
  placeholder,
  error,
  disabled = false,
  focus = null,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <FormControl isRequired={isRequired} isDisabled={disabled}>
      <FormControlLabel mt="$4.5">
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          onFocus={focus}
        />
        <InputSlot pr="$3" onPress={handleState}>
          <InputIcon
            as={showPassword ? EyeIcon : EyeOffIcon}
            color="$darkBlue500"
          />
        </InputSlot>
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{error}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
