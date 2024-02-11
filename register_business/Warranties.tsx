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
import ModalButton from "../components/ModalButton";

import DTable from "../components/DTable";
import { DummyTable } from "../Drawer_submenu/constants/constants";
export default function Warranties() {
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
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Capital",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Region",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button size="xs" variant="outline" onPress={() => alert(row.name)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <ScrollView>
      <Box bg="#f8f9fe">
        {/* Warranties */}
        <Box width={isLargeScreen ? "$1/2" : "$full"}>
          <Text
            alignItems="flex-start"
            fontSize={"$3xl"}
            fontWeight="$medium"
            padding="$3"
          >
            {t("Warranties")}
          </Text>
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
          {/* modal button */}

          <Box>
            <HStack justifyContent="space-between">
              <Text fontSize={"$xl"}>{t(" All Warranties")}</Text>
              <ModalButton />
            </HStack>
          </Box>
          {/* Search Drop Down */}
          <Box>
            <Center>
              <HStack space="sm" alignItems="center">
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
            <DTable
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
