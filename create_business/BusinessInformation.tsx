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
} from "@gluestack-ui/themed";
import FormInput from "../components/FormInput";
import React from "react";
import DatePicker from "../components/DatePicker";
import { Platform, TextInput } from "react-native";
import SearchDropDown from "../components/SearchDropDown";
import { GetCountryList, GetCurrencyList, GetTimeZoneList } from "../components/Utils/Utils";

export default function BusinessInformation() {

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });

  return (
      <Box p="$2" bg="$white">
        
        <Center mt="$2.5">
          <Image size="xs" source={require('../assets/image.png')}/>
        </Center>

        <Box flexDirection={isLargeScreen ?  "row" : "column" } flexWrap="wrap" flex={1} alignItems="flex-start">
          
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
        </Box>
      </Box>
  );
}
