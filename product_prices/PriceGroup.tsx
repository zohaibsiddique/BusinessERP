import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  VStack,
  useMediaQuery,
} from "@gluestack-ui/themed";

import React from "react";
import SearchDropDown from "../components/SearchDropDown";
import { GetEntries } from "../utils/Utils";
import { useTranslation } from "react-i18next";
import "../translation/i18n";
import { useForm } from "react-hook-form";

import { DummyTable } from "../components/constants";
import ModalButtonUnits from "./ModalButtonPrice";
import UnitsTable from "./PriceTable";
import IconButtonText from "../components/IconButtonText";
import FileUploader from "../components/FileUploader";

// Selling Price group function

export default function PriceGroup() {
  const { t } = useTranslation();

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720,
  });
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    mode: "onTouched",
  });

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Short Name",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Allow decimal",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <HStack space="xs">
          <Button
            size="xs"
            borderColor="$secondary300"
            variant="outline"
            onPress={() => alert(row.name)}
          >
            Edit
          </Button>
          <Button
            size="xs"
            borderColor="$secondary300"
            variant="outline"
            onPress={() => alert(row.name)}
          >
            Delete
          </Button>
        </HStack>
      ),
    },
  ];

  return (
    <ScrollView>
      <Box
        bg="#f8f9fe"
        width={isLargeScreen ? "$1/2" : "$full"}
        marginRight={"auto"}
        marginLeft={"auto"}
      >
        {/* Price group  */}
        <Box>
          <HStack space="xs" p={"$3"}>
            <Text
              alignItems="flex-start"
              fontSize={"$2xl"}
              fontWeight="$medium"
            >
              {t("Selling Price Group")}
            </Text>
          </HStack>
        </Box>

        {/* instruction */}
        <Box
          bg="#fff"
          py="$4"
          px="$3"
          mt={16}
          rounded="$md"
          borderTopWidth={"$2"}
          borderColor="$primary600"
          marginRight="auto"
          marginLeft="auto"
        >
          {/* category-modal button */}

          <Box>
            <HStack justifyContent="space-between">
              <Text fontWeight="$bold" fontSize={"$lg"}>
                {t("Import/Export Selling Price Group Prices ")}
              </Text>
            </HStack>
          </Box>

          {/*  Data table*/}
          <Box>
            <VStack space="xs">
              <Button
                size="xs"
                mt={"$10"}
                bgColor="$white"
                width={isLargeScreen ? "$1/2" : "$2/3"}
              >
                Export Selling Price Group Prices
              </Button>
              {/* <FileUploader /> */}
              <Button alignSelf="flex-start" size="xs" color="$secondary0">
                Submit
              </Button>
              <Text><Text>Instruction: </Text></Text>
            </VStack>
          </Box>
        </Box>
        <Box
          bg="#fff"
          py="$4"
          px="$3"
          mt={16}
          rounded="$md"
          borderTopWidth={"$2"}
          borderColor="$primary600"
          marginRight="auto"
          marginLeft="auto"
        >
          {/* category-modal button */}

          <Box>
            <HStack justifyContent="space-between">
              <Text fontSize={"$xl"}>{t("All Your units ")}</Text>
              <ModalButtonUnits />
            </HStack>
          </Box>
          {/* Search Drop Down */}
          <Box>
            <Center>
              <HStack justifyContent="center" alignItems="center">
                <Text pt={13}>Show</Text>

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
                  responsiveWidth={isLargeScreen ? "$3/5" : "$full"}
                />

                <Text pt={13}>entries</Text>
              </HStack>
            </Center>
          </Box>

          {/*  Data table*/}
          <Box>
            <UnitsTable
              columns={columns}
              data={DummyTable}
              responsiveWidth={isLargeScreen ? "$1/2" : "$full"}
            />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
