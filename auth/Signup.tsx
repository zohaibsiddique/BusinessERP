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

  const {control,watch,handleSubmit,formState: { errors },} = useForm({
    
  })
  const onSubmit = (data) => console.log(data)

  return (
      <Box mt="$2" bg="white" borderWidth="$1" borderColor="lightgray" p="$2" width = {isLargeScreen ?  "$1/2" : "$full" }  marginRight="auto" marginLeft="auto">
        
        <Text>{t('signup')}</Text>
        <Link><Text>Already have an account?</Text></Link>
        <Divider mt="$4" mb="$4"/>

        <FormInput
            watch={watch}
            control = {control} errors={errors} 
            name={"firstName"}
            type={"text"}
            isRequired={true}
            label={"Email address"}
            placeholder={"Email address"}
            error={"Please specify your Email address"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
            rules={{
              required: "Field is required",
              minLength: {
                value: 4,
                message: "Min. length is 5"
              }
            }}
          />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        
        {/* <Box>
          <FormInput
            value={email}
            setValue={setEmail}
            type={"text"}
            isRequired={true}
            label={"Email address"}
            placeholder={"Email address"}
            error={"Please specify your Email address"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
          />
          <Text>{email}</Text>
          <FormInput
            type={"text"}
            value={firstName}
            setValue={setFirstName}
            isRequired={false}
            label={"First name"}
            placeholder={"First name"}
            error={"Please specify your First name"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
          />

          <FormInput
            type={"text"}
            value={lastName}
            setValue={setLastName}
            isRequired={false}
            label={"Last name"}
            placeholder={"Last name"}
            error={"Please specify your Last name"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
          />
          <PasswordInput
            isRequired={false}
            value={password}
            setValue={setPassword}
            label={"Password"}
            placeholder={"Password"}
            error={"Please specify Password"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
          />
           <PasswordInput
            isRequired={false}
            value={confirmPassword}
            setValue={setConfirmPassword}
            label={"Confirm Password"}
            placeholder={"Confirm Password"}
            error={"Please specify Confirm Password"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
          />
          <Button onPress={() => navigation.navigate('RegisterBusiness')}
             mt="$6" size="sm" width="100%" bg="$red600" sx={{ borderRadius: "$none" }}>
              <ButtonText>START</ButtonText>
          </Button>
        </Box> */}
      </Box>
  );
}
