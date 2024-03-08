import {
  Box,
  Button,
  HStack,
  ScrollView,
  Text,
  useMediaQuery,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../translation/i18n";
import { useForm } from "react-hook-form";

import { DummyTable } from "../components/constants";
import BrandsTable from "./BrandsTable";
import ModalButtonBrands from "./ModalButtonBrands";


export default function Brands() {

    const [items, setItems] = useState([]);

    function handleAddItems(item) {
      setItems((items) => [...items, item]);
    }


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
      name: "Brands",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Note",
      selector: (row) => row.phone,
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
        {/* brands */}
        <Box>
          <HStack space="xs" p={"$3"}>
            <Text
              alignItems="flex-start"
              fontSize={"$3xl"}
              fontWeight="$medium"
            >
              {t("Brands")}
            </Text>
            <Text
              pt={"$3"}
              pl={"$1"}
              alignItems="center"
              justifyContent="flex-start"
              fontSize={"$md"}
              fontWeight="$normal"
            >
              {t("Manage your brands")}
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
          {/* modal button */}

          <Box>
            <HStack justifyContent="space-between" px={"$3"}>
              <Text fontSize={"$xl"}>{t(" All Your Brands")}</Text>
              <ModalButtonBrands onAddItems={handleAddItems} />
            </HStack>
          </Box>

          {/*  Data table*/}
          <Box>
            <BrandsTable
              columns={columns}
              data={items}
              responsiveWidth={isLargeScreen ? "$1/2" : "$full"}
            />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
