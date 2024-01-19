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
import React from "react";
import SearchDropDown from "../components/SearchDropDown";
import { GetCountryList, GetCurrencyList, GetStockAccountMethodList, GetTimeZoneList, GetYearList } from "../utils/Utils";
import PasswordInput from "../components/PasswordInput";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import '../translation/i18n';

export default function RegisterBusiness() {

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });
  const { t, i18n } = useTranslation();

  const navigation = useNavigation()

  return (
      <Box mt="$2" bg="white" borderWidth="$1" borderColor="lightgray" p="$2" width = {isLargeScreen ?  "$1/2" : "$full" }  marginRight="auto" marginLeft="auto">
        
        <Text>{t('signup')}</Text>
        <Link><Text>Already have an account?</Text></Link>
        <Divider mt="$4" mb="$4"/>

        <Box>
          <FormInput
            type={"text"}
            isRequired={true}
            label={"Email address"}
            placeholder={"Email address"}
            error={"Please specify your Email address"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
          />
                    
          <FormInput
            type={"text"}
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
            label={"Password"}
            placeholder={"Password"}
            error={"Please specify Password"}
            disabled={false}
            focus={null}
            responsiveWidth="$full"
          />
           <PasswordInput
            isRequired={false}
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
        </Box>
      </Box>
  );
}
