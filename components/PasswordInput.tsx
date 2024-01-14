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
  Box,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function PasswordInput({
  isRequired,
  label,
  placeholder,
  error,
  disabled = false,
  focus = null,
  responsiveWidth
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <Box width={responsiveWidth} p="$1">
    <FormControl isRequired={isRequired} isDisabled={disabled}>
      <FormControlLabel mt="$2.5">
        <FormControlLabelText size="xs">{label}</FormControlLabelText>
      </FormControlLabel>
      <Input sx={{height: 30}}>
        <InputField size="xs"
          type={showPassword ? "text" : "password"}
          
          onFocus={focus}
        />
        <InputSlot pr="$3" onPress={handleState}>
          <InputIcon size="xs" as={showPassword ? EyeIcon : EyeOffIcon}/>
        </InputSlot>
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText size="xs">{error}</FormControlErrorText>
      </FormControlError>
    </FormControl>
    </Box>
  );
}
