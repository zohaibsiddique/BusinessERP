import {
  Box,
  Button,
  ButtonText,
  Center,
  FlatList,
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
import SelectPrice from "./SelectPrice";
import PriceTable from "./PriceTable";

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
      name: "Description",
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
        marginRight={"auto"}
        marginLeft={"auto"}
        width={isLargeScreen ? "$1/2" : "$full"}
      >
        {/* Price group  */}
        <Box>
          <HStack space="xs" p={"$3"}>
            <Text alignItems="flex-start" fontSize={"$2xl"} fontWeight="$bold">
              {t("Selling Price Group")}
            </Text>
          </HStack>
        </Box>

        {/* instruction */}
        <Box
          bg="#fff"
          py="$4"
          mt={16}
          rounded="$md"
          borderTopWidth={"$2"}
          borderColor="$primary600"
        >
          {/* Import/Export Selling Price Group Prices heading */}

          <Box px={"$3"}>
            <HStack justifyContent="space-between">
              <Text fontWeight="$bold" fontSize={"$lg"}>
                {t("Import/Export Selling Price Group Prices ")}
              </Text>
            </HStack>
          </Box>

          {/*  Export Selling Price Group Prices*/}
          <Box>
            <VStack space="xs" px={"$3"}>
              {/*Export Selling Price Group Prices button  */}
              <Box>
                <Button size="xs" mt={"$10"} alignSelf="flex-start">
                  <ButtonText> Export Selling Price Group Prices</ButtonText>
                </Button>
              </Box>

              <Box>
                <FileUploader />
              </Box>
              <Box>
                <Button alignSelf="flex-start" size="xs">
                  <ButtonText>Submit</ButtonText>
                </Button>
              </Box>
              {/* instruction section */}
              <VStack mt={"$3"}>
                <Text fontWeight="$bold" letterSpacing={"$md"}>
                  Instruction:{" "}
                </Text>
                <FlatList
                  data={[
                    { key: "Export Selling price group prices." },
                    {
                      key: "Update the exported file and import the same file.",
                    },
                    {
                      key: "Only selling price group prices of the product will be updated. Any blank price will be skipped.",
                    },
                  ]}
                  renderItem={({ item }) => {
                    return (
                      <Box p={"$1.5"}>
                        <Text fontSize={"$xs"}>{`\u2022 ${item.key}`}</Text>
                      </Box>
                    );
                  }}
                />
              </VStack>
              {/* all selling table and button */}
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
        >
          {/* category-modal button */}

          <Box py={"$3"}>
            <HStack justifyContent="space-between">
              <Text fontSize={"$lg"} fontWeight="$bold">
                {t("All Selling Price Group ")}
              </Text>
              <ModalButtonUnits />
            </HStack>
          </Box>

          {/*  Data table*/}
          <Box >
            <PriceTable
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
