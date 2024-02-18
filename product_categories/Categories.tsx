import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  useMediaQuery,
} from "@gluestack-ui/themed";
import React from "react";
import SearchDropDown from "../components/SearchDropDown";
import { GetEntries } from "../utils/Utils";
import { useTranslation } from "react-i18next";
import "../translation/i18n";
import { useForm } from "react-hook-form";

import { DummyTable } from "../components/constants";
import ModalButtonCategory from "./ModalButtonCategory";
import CategoryTable from "./CategoryTable";
export default function Categories() {
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
      name: "Category",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Category Code",
      selector: (row) => row.phone,
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
        <HStack space="xs" >
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
        {/* brands */}
        <Box>
          <HStack space="xs" p={"$3"}>
            <Text
              alignItems="flex-start"
              fontSize={"$3xl"}
              fontWeight="$medium"
            >
              {t("Categories")}
            </Text>
            <Text
              pt={"$1"}
              alignItems="center"
              justifyContent="flex-start"
              fontSize={"$md"}
              fontWeight="$normal"
            >
              {t("Manage your categories")}
            </Text>
          </HStack>
        </Box>

        {/* sub-warranties */}
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
              <Text fontSize={"$xl"}>{t("All Categories ")}</Text>
              <ModalButtonCategory />
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
            <CategoryTable
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
