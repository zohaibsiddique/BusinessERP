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
import DatePicker from "../components/DatePicker";
import SearchDropDown from "../components/SearchDropDown";
import { GetCountryList, GetCurrencyList, GetStockAccountMethodList, GetTimeZoneList, GetYearList } from "../utils/Utils";

export default function RegisterBusiness() {

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });

  return (
      <Box  p="$2" bg="$white"  width = {isLargeScreen ?  "$1/2" : "$full" }  marginRight="auto" marginLeft="auto">
        
        <h1>Register Business</h1>
        <Text>Welcome to Invenup - A comprehensive Business ERP to automate your business processes</Text>
        <Divider mt="$4"/>

        <Center mt="$8" mb="$6">
          <Image size="sm" source={require('../assets/business.png')}/>
        </Center>

        <Box flexDirection={isLargeScreen ?  "row" : "column" } flexWrap="wrap" alignItems="flex-start">
          
          <FormInput
            type={"text"}
            isRequired={true}
            label={"Business Name"}
            placeholder={"Business Name"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          
          <DatePicker responsiveWidthh={isLargeScreen ?  "$1/2" : "$full" }/>
          
          <FormInput
            type={"text"}
            isRequired={false}
            label={"Website"}
            placeholder={"Website"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={"text"}
            isRequired={false}
            label={"Business Contact Number"}
            placeholder={"Business Contact Number"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={"text"}
            isRequired={false}
            label={"Alternate Contact Number"}
            placeholder={"Alternate Contact Number"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <SearchDropDown list={GetCountryList()} keyLabel={"countryName"} values={"countryName"} label={"Country"} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }/>

          <FormInput
            type={"text"}
            isRequired={true}
            label={"State"}
            placeholder={"State"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={"text"}
            isRequired={true}
            label={"City"}
            placeholder={"City"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={"text"}
            isRequired={true}
            label={"Zip Code"}
            placeholder={"Zip Code"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={"text"}
            isRequired={true}
            label={"Land Mark"}
            placeholder={"Land Mark"}
            error={"Please specify your business name"}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <SearchDropDown list={GetTimeZoneList()} keyLabel={"label"} values={"label"} label={"TimeZone"} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }/>

          <SearchDropDown list={GetCurrencyList()} keyLabel={"currency"} values={"currency"} label={"Currency"} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }/>
        
          <FormInput
            type={'text'}
            isRequired={false}
            label={'Tax 1 Name'}
            placeholder={'Tax 1 Name'}
            error={'Please specify your business name'}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={'text'}
            isRequired={false}
            label={'Tax 1 No'}
            placeholder={'Tax 1 No'}
            error={'Please specify your business name'}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={'text'}
            isRequired={false}
            label={'Tax 2 Name'}
            placeholder={'Tax 2 Name'}
            error={'Please specify your business name'}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />
          <FormInput
            type={'text'}
            isRequired={false}
            label={'Tax 2 No'}
            placeholder={'Tax 2 No'}
            error={'Please specify your business name'}
            disabled={false}
            focus={null}
            responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
          />

          <SearchDropDown list={GetStockAccountMethodList()} keyLabel={"label"} values={"label"} label={"Stock Account Method"} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }/>
          
          <SearchDropDown list={GetYearList()} keyLabel={"label"} values={"label"} label={"Financial year start month"} responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }/>

          
        </Box>
        <HStack paddingTop="$6" justifyContent="space-between">
            <Button
              width="50%"
              size="sm"
              variant="outline"
              bg="$gray700"
              sx={{ borderRadius: "$none", borderWidth: "$0" }}
            >
              <ButtonText  sx={{ color: "$backgroundLight700" }}>
                CANCEL
              </ButtonText>
            </Button>
            <Button size="sm" width="50%" bg="$red600" sx={{ borderRadius: "$none" }}>
              <ButtonText>SAVE</ButtonText>
            </Button>
          </HStack>
      </Box>
  );
}
