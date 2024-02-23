import {
  Box,
  Button,
  HStack,
  ScrollView,
  Text,
  useMediaQuery,
} from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import "../translation/i18n";
import { useForm } from "react-hook-form";

import { DummyTable } from "../components/constants";
import ModalButtonUnits from "./ModalButtonUnits";
import UnitsTable from "./UnitsTable";
export default function Units() {
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
              {t("Units")}
            </Text>
            <Text
              pt={"$1"}
              alignItems="center"
              justifyContent="flex-start"
              fontSize={"$md"}
              fontWeight="$normal"
            >
              {t("Manage your units")}
            </Text>
          </HStack>
        </Box>

        {/* sub-warranties */}
        <Box
          bg="#fff"
          py="$4"
        
          mt={16}
          rounded="$md"
          borderTopWidth={"$2"}
          borderColor="$primary600"
       
        >
          {/* category-modal button */}

          <Box>
            <HStack justifyContent="space-between" px={"$3"}>
              <Text fontSize={"$xl"}>{t("All Your units ")}</Text>
              <ModalButtonUnits />
            </HStack>
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
