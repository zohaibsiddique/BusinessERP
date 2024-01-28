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
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import '../translation/i18n';
import { useForm, Controller } from "react-hook-form"
import { TextInput } from "react-native";
import PasswordConfirmationInput from "../components/PasswordConfirmationInput";
import { useFonts } from "expo-font";

export default function RegisterBusiness() {

  const fontName = 'urduFont'

  const [loaded] = useFonts({
    fontName: require("../assets/fonts/urdu_jameel.ttf"),
  });

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });
  const { t, i18n } = useTranslation();
  const navigation = useNavigation()

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {email: "",password: "",firstname: "",lastname:""}, 
    mode: "onTouched"
  });
  const onSubmit = (data) => {
    navigation.navigate("Dashboard")
  }

  return (
      <Box mt="$2" bg="white" borderWidth="$1" borderColor="lightgray" p="$2" width = {isLargeScreen ?  "$1/2" : "$full" }  marginRight="auto" marginLeft="auto">
        
        <Text fontFamily={fontName}>{t('signup')}</Text>
        <Link><Text fontFamily={fontName}>{t('already_an_account')}</Text></Link>
        <Divider mt="$4" mb="$4"/>
        
        <Box>
          <FormInput
              control = {control} errors={errors} 
              responsiveWidth="$full"
              name={"email"}
              isRequired= {true}
              label={t('email_address')}
              rules={{
                required: t('required_field'),
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                  message: t('invalid_email'),
                }
              }}
            />
          <FormInput
              control = {control} errors={errors} 
              responsiveWidth="$full"
              name={"firstname"}
              isRequired= {true}
              label={t('first_name')}
              rules={{
                required: t('required_field'),
              }}
            />
            <FormInput
              control = {control} errors={errors} 
              responsiveWidth="$full"
              name={"lastname"}
              isRequired= {true}
              label={t('last_name')}
              rules={{
                required: t('required_field'),
              }}
            />
          <PasswordConfirmationInput
            control = {control} errors={errors} 
            name1={"password"}
            name2={"confirm_password"}
            label1={t('password')}
            label2={t('confirm_password')}
            rules={{
              required: t('required_field'),
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                message: t('invalid_password_message'),
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

