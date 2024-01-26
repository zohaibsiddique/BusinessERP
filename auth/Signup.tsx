import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
  Text, 
  useMediaQuery,
  View,
  Divider,
  Link,
} from "@gluestack-ui/themed";
import FormInput from "../components/FormInput";
import React, { useState } from "react";
import SearchDropDown from "../components/SearchDropDown";
import { GetCountryList, GetCurrencyList, GetStockAccountMethodList, GetTimeZoneList, GetYearList } from "../utils/Utils";
import PasswordInput from "../components/PasswordInput";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import '../translation/i18n';
import { useForm, Controller } from "react-hook-form"
import { TextInput } from "react-native";

export default function RegisterBusiness() {

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });
  const { t, i18n } = useTranslation();

  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const {control,watch,handleSubmit,formState: { errors },} = useForm({
    
  // })
  // const onSubmit = (data) => console.log(data)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname:""
    }, 
    mode: "onTouched"
  });
  const onSubmit = (data) => {
    const output = {
      ...data,
      others: {
        key: "zohaib",
        skdfj: "arshad"
      }
    }
    console.log(output)
  }

  return (
      <Box mt="$2" bg="white" borderWidth="$1" borderColor="lightgray" p="$2" width = {isLargeScreen ?  "$1/2" : "$full" }  marginRight="auto" marginLeft="auto">
        
        <Text>{t('signup')}</Text>
        <Link><Text>Already have an account?</Text></Link>
        <Divider mt="$4" mb="$4"/>
        
        <Box>
          <FormInput
              control = {control} errors={errors} 
              responsiveWidth="$full"
              name={"email"}
              type={"text"}
              label={"Email address"}
              rules={{
                required: "The field is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                  message: "Invalid email address",
                }
              }}
            />
          <FormInput
              control = {control} errors={errors} 
              responsiveWidth="$full"
              name={"firstname"}
              type={"text"}
              label={"First Name"}
              rules={{
                required: "The field is required",
              }}
            />
            <FormInput
              control = {control} errors={errors} 
              responsiveWidth="$full"
              name={"lastname"}
              type={"text"}
              label={"Last Name"}
              rules={{
                required: "The field is required",
              }}
            />
          <PasswordInput
            control = {control} errors={errors} 
            name1={"password"}
            name2={"confirm_password"}
            label1={"Password"}
            label2={"Confirm Password"}
            rules={{
              required: "The field is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                message: "Password must be alpha numberic with one special character and min 8 characters long",
              }
            }}
            responsiveWidth="$full"
          />
          <Button onPress={handleSubmit(onSubmit)}
             mt="$6" size="sm" width="100%" bg="$red600" sx={{ borderRadius: "$none" }}>
              <ButtonText>START</ButtonText>
          </Button>
        </Box>
      </Box>
  );
}
