import { Image } from "@gluestack-ui/config/build/theme";
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
  Text
} from "@gluestack-ui/themed";
import { useState } from "react";
import { TextInput } from "react-native";
import PasswordValidate, {
  VALIDATION_RULES_KEYS,
} from 'react-native-password-validate-checklist';
import { Controller, useForm } from "react-hook-form";

export default function PasswordInput({
  control,errors,rules, name1, name2, label1, label2,
  type = "password",
  label,
  disabled = false,
  responsiveWidth
}) {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [validated, setValidated] = useState(false);
  const [isShowValidateLayout, setIsShowValidateLayout] = useState(false);

  const passValidaterules = [
    {key: VALIDATION_RULES_KEYS.MIN_LENGTH, ruleValue: 10, label: 'Should contain more than 9 characters'},
    {key: VALIDATION_RULES_KEYS.LOWERCASE_LETTER},
    {key: VALIDATION_RULES_KEYS.UPPERCASE_LETTER},
    {key: VALIDATION_RULES_KEYS.NUMERIC},
    {key: VALIDATION_RULES_KEYS.PASSWORDS_MATCH},
    {key: VALIDATION_RULES_KEYS.SPECIAL_CHARS},
  ];
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleOnChange1 = (e) => {
    setIsShowValidateLayout(true)
    setPassword1(e)
  };
  const handleOnChange2 = (e) => {
    setPassword2(e)
  };
  return (
    <Box width={responsiveWidth} p="$1">
      <FormControl isDisabled={disabled} isInvalid={errors[name1]?.message ? true : false}>
        <FormControlLabel mt="$2.5">
          <FormControlLabelText size="xs">{label1}</FormControlLabelText>
        </FormControlLabel>
        <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input sx={{height: 30}}>
                <InputField size="xs" 
                  type={showPassword ? "text" : "password"} 
                  onBlur={onBlur} 
                  onChangeText={(e)=>{
                    handleOnChange1(e),
                    onChange(e)
                  }} 
                  value={value} 
                />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon size="xs" as={showPassword ? EyeIcon : EyeOffIcon}/>
                </InputSlot>
              </Input>
            )}
            name={name1}
        />
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="sm">
              {errors[name1]?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl isDisabled={disabled} isInvalid={errors[name2]?.message ? true : false}>
        <FormControlLabel mt="$2.5">
          <FormControlLabelText size="xs">{label2}</FormControlLabelText>
        </FormControlLabel>
        <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input sx={{height: 30}}>
                <InputField size="xs" 
                  type={showPassword ? "text" : "password"} 
                  onBlur={onBlur} 
                  onChangeText={(e)=>{
                    handleOnChange2(e),
                    onChange(e)
                  }} 
                  value={value} 
                />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon size="xs" as={showPassword ? EyeIcon : EyeOffIcon}/>
                </InputSlot>
              </Input>
            )}
            name={name2}
        />
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="sm">
              {errors[name2]?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
   
      {isShowValidateLayout ?
        <PasswordValidate
            newPassword={password1}
            confirmPassword={password2}
            validationRules={passValidaterules}
            onPasswordValidateChange={status => setValidated(status)}
          />
          :<Text></Text>
        }
    </Box>
  );
}
