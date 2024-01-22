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
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";


export default function FormInput({
  control,watch,errors,rules, name,
  type,
  isRequired,
  label,
  placeholder,
  error,
  disabled = false,
  focus = null,
  responsiveWidth
}) {
  
  const watcher = watch(name)

  return (

    <Box width={responsiveWidth} p="$1">
      <FormControl isRequired={isRequired} isDisabled={disabled}  
        isInvalid={errors.firstName?.message != null ? true : (watcher != null ?  (watcher?.length > rules.minLength.value ? false: true) : false)}
      >
        <FormControlLabel mt="$2.5">
          <FormControlLabelText size="sm">{label}</FormControlLabelText>
        </FormControlLabel>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input sx={{height: 30}} >
               <InputField 
                onBlur={onBlur} 
                onChangeText={onChange} 
                value={value} 
                size="sm" 
                type={type}  
                onFocus={focus} 
               />
             </Input> 
          )}
          name={name}
        />
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="sm">
              {rules.minLength.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
    
  );
}
