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
import {
  GetBusinessCategory,
  GetCountryList,
  GetCurrencyList,
  GetDurationCategory,
  GetEntries,
  GetStockAccountMethodList,
  GetTimeZoneList,
  GetYearList,
} from "../utils/Utils";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import "../translation/i18n";
import SignatureCanvas from "../components/SignatureCanvas";
import { useForm } from "react-hook-form";
import ModalButton from "../components/ModalButton";
import ModalSelect from "../components/ModalSelect";

export default function Warranties() {
  const { t, i18n } = useTranslation();

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720,
  });
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView bg="#f8f9fe">
      <Box
        p="$2"
        width={isLargeScreen ? "$1/2" : "$full"}
        marginRight="auto"
        marginLeft="auto"
      >
        <Text fontSize={"$2xl"}>{t("Warranties")}</Text>

        <Box
          bg="#fff"
          py="$4"
          px="$3"
          mt={16}
          mx={"$4"}
          rounded="$md"
          height={375}
          maxWidth="100%"
          borderTopWidth={"$2"}
          borderColor="$primary500"
        >
          <HStack
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text fontSize={"$xl"}>{t(" All Warranties")}</Text>
            <ModalButton />
          </HStack>
          <Center>
            <HStack space="sm" alignItems="center">
              <Text pt={13}>Show</Text>
              <SearchDropDown
                control={control}
                errors={errors}
                isRequired={false}
                name={"business_category"}
                rules={{
                  required: t("required_field"),
                }}
                list={GetEntries()}
                keyLabel={"category"}
                values={"category"}
                label={t("")}
                responsiveWidth={isLargeScreen ? "$1/2" : "$3/5"}
              />
              <Text pt={13}>entries</Text>
            </HStack>
          </Center>
        </Box>
      </Box>
    </ScrollView>
  );
}
