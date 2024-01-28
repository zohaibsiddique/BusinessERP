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
} from "@gluestack-ui/themed";
import FormInput from "../components/FormInput";
import React from "react";
import CustomDatePicker from "../components/DatePicker";
import SearchDropDown from "../components/SearchDropDown";
import { GetBusinessCategory, GetCountryList, GetCurrencyList, GetStockAccountMethodList, GetTimeZoneList, GetYearList } from "../utils/Utils";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import '../translation/i18n';
import SignatureCanvas from "../components/SignatureCanvas";
import { useForm } from "react-hook-form";

export default function RegisterBusiness() {
  const { t, i18n } = useTranslation();

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {}, 
    mode: "onTouched"
  });
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <ScrollView>
      <Box  p="$2" bg="$white"  width = {isLargeScreen ?  "$1/2" : "$full" }  marginRight="auto" marginLeft="auto">
        
        <Text>{t('register_business')}</Text>
        <Text>{t('welcome_msg')}</Text>
        <Divider mt="$4"/>

        <Center mt="$8" mb="$6">
          <Image alt="Image" size="sm" source={require('../assets/business.png')}/>
        </Center>

        <Box flexDirection={isLargeScreen ?  "row" : "column" } flexWrap="wrap" alignItems="flex-start">
          
          <FormInput
            control = {control} errors={errors}
            name={"business_name"}
            isRequired= {true}
            label={t('business_name')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          
          <SearchDropDown control = {control} errors={errors}  
            isRequired= {true}
            name={"business_category"} 
            rules={{
              required: t('required_field'),
            }} 
            list={GetBusinessCategory()} keyLabel={"category"} values={"category"} 
            label={t('business_category')} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <CustomDatePicker 
            control = {control} errors={errors}
            name={"starting_date"}
            isRequired= {true}
            label={t('starting_date')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" } 
          />
          
          <FormInput
            control = {control} errors={errors}
            name={"website"}
            label={t('website')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"business_contact_no"}
            isRequired= {true}
            label={t('business_contact_no')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"alternate_contact_no"}
            isRequired= {true}
            label={t('alternate_contact_no')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <SearchDropDown isRequired= {true} control = {control} errors={errors}  name={"country"} 
            rules={{
              required: t('required_field'),
            }} 
            list={GetCountryList()} keyLabel={"countryName"} values={"countryName"} 
            label={t('country')} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          
          <FormInput
            control = {control} errors={errors}
            name={"state"}
            isRequired= {true}
            label={t('state')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"city"}
            isRequired= {true}
            label={t('city')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"zipcode"}
            isRequired= {true}
            label={t('zipcode')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"land_mark"}
            isRequired= {true}
            label={t('land_mark')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <SearchDropDown isRequired= {true} control = {control} errors={errors}  name={"timezone"} 
            rules={{
              required: t('required_field'),
            }} 
            list={GetTimeZoneList()} keyLabel={"label"} values={"label"} 
            label={t('timezone')} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <SearchDropDown isRequired= {true} control = {control} errors={errors}  name={"currency"} 
            rules={{
              required: t('required_field'),
            }} 
            list={GetCurrencyList()} keyLabel={"currency"} values={"currency"} 
            label={t('currency')} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
        
          <FormInput
            control = {control} errors={errors}
            name={"tax_one_name"}
            isRequired= {true}
            label={t('tax_one_name')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"tax_one_no"}
            isRequired= {true}
            label={t('tax_one_no')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"tax_two_name"}
            isRequired= {true}
            label={t('tax_two_name')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            control = {control} errors={errors}
            name={"tax_two_no"}
            isRequired= {true}
            label={t('tax_two_no')}
            rules={{
              required: t('required_field'),
            }} 
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <SearchDropDown isRequired= {true} control = {control} errors={errors}  name={"stock_accounting_method"} 
            rules={{
              required: t('required_field'),
            }} 
            list={GetStockAccountMethodList()} keyLabel={"label"} values={"label"} 
            label={t('stock_accounting_method')} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          
          <SearchDropDown isRequired= {true} control = {control} errors={errors}  name={"financial_year_start_month"} 
            rules={{
              required: t('required_field'),
            }} 
            list={GetYearList()} keyLabel={"label"} values={"label"} 
            label={t('financial_year_start_month')} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <SignatureCanvas/>
        </Box>
        <HStack paddingTop="$6" justifyContent="space-between">
            <Button onPress={() => navigation.navigate("Signup")}
              width="50%"
              size="sm"
              variant="outline"
              bg="$gray700"
              sx={{ borderRadius: "$none", borderWidth: "$0" }}
            >
              <ButtonText  sx={{ color: "$backgroundLight700" }}>
                  {t('back')}
              </ButtonText>
            </Button>
            <Button onPress={handleSubmit(onSubmit)}
              size="sm" width="50%" bg="$red600" sx={{ borderRadius: "$none" }}>
              <ButtonText> {t('register')}</ButtonText>
            </Button>
          </HStack>
      </Box>
    </ScrollView>
      
  );
}
