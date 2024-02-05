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
  LinkText,
  Icon,
  SunIcon,
  ClockIcon,
  EyeIcon,
  SettingsIcon,
  MoonIcon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
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

import TableComponent from "../components/TableComponent";
export default function Warranties({ responsiveWidth }) {
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
      <Box width={responsiveWidth} p="$2" marginRight="auto" marginLeft="auto">
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
              <Box>
                <SearchDropDown
                  control={control}
                  errors={errors}
                  isRequired={false}
                  name={""}
                  rules={{
                    required: t("required_field"),
                  }}
                  list={GetEntries()}
                  keyLabel={"category"}
                  values={"category"}
                  label={t("")}
                  responsiveWidth={isLargeScreen ? "$1/2" : "$full"}
                />
              </Box>
              <Text pt={13}>entries</Text>
            </HStack>
          </Center>
          <Box mt={"$1"}>
            <Center>
              <HStack pb="$2" space="xs">
                <Link href="https://gluestack.io/" isHovered>
                  <HStack
                    alignItems="center"
                    borderWidth={"$1"}
                    px="$1"
                    bg="$secondary0"
                  >
                    <Icon as={MoonIcon} m="$1" w="$3" />
                    <LinkText color="#000" size="sm">
                      Export to CSV
                    </LinkText>
                  </HStack>
                </Link>
                <Link href="https://gluestack.io/" isHovered>
                  <HStack
                    alignItems="center"
                    borderWidth={"$1"}
                    px="$1"
                    bg="$secondary0"
                  >
                    <Icon as={SunIcon} m="$1" w="$3" />
                    <LinkText color="#000" size="sm">
                      Export to Excel
                    </LinkText>
                  </HStack>
                </Link>
                <Link href="https://gluestack.io/" isHovered>
                  <HStack
                    alignItems="center"
                    borderWidth={"$1"}
                    px="$1"
                    bg="$secondary0"
                  >
                    <Icon as={MoonIcon} m="$1" w="$3" />
                    <LinkText color="#000" size="sm">
                      Print
                    </LinkText>
                  </HStack>
                </Link>
                <Link href="https://gluestack.io/" isHovered>
                  <HStack
                    alignItems="center"
                    borderWidth={"$1"}
                    px="$1"
                    bg="$secondary0"
                  >
                    <Icon as={ClockIcon} m="$1" w="$3" />
                    <LinkText color="#000" size="sm">
                      Colunm visibility
                    </LinkText>
                  </HStack>
                </Link>
                <Link href="https://gluestack.io/" isHovered>
                  <HStack
                    alignItems="center"
                    borderWidth={"$1"}
                    px="$1"
                    bg="$secondary0"
                  >
                    <Icon as={MoonIcon} m="$1" w="$3" />
                    <LinkText color="#000" size="sm">
                      Export to PDF
                    </LinkText>
                  </HStack>
                </Link>
              </HStack>
              <Input>
                <InputSlot>
                  <InputIcon as={SearchIcon} />
                </InputSlot>
                <InputField placeholder="Search..." />
              </Input>
            </Center>
            <Center>
              <Box w={"$4/5"} >
                <TableComponent />
              </Box>
            </Center>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
