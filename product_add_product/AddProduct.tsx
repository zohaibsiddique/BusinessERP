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
import ModalButtonUnits from "./ModalButtonPrice";
import ProductTable from "./ProductTable";
import FormInput from "../components/FormInput";
import ProductSelectOption from "./ProductSelectOption";
import ProductSelectOptionUnit from "./ProductSelectOptionUnit";
import ProductUnitButton from "./ProductUnitButton";
import ProductSelectOptionBrand from "./ProductSelectOptionBrand";

// Selling Price group function

export default function AddProduct() {
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
        {/* Product group  */}
        <Box>
          <HStack space="xs" p={"$2"}>
            <Text alignItems="flex-start" fontSize={"$xl"} fontWeight="$bold">
              {t("Add new product")}
            </Text>
          </HStack>
        </Box>

        {/* instruction */}
        <Box
          bg="#fff"
          py="$3"
          mt={16}
          rounded="$md"
          borderTopWidth={"$2"}
          borderColor="$primary600"
          mx="$2.5"
          shadowRadius={"$0.5"}
        >
          <Box mx="$4">
            <FormInput
              control={control}
              errors={errors}
              name={"product-name"}
              isRequired={true}
              label={t("Product Name")}
              inputType="text"
              placeholder="Product Name"
              rules={{
                required: t("required_field"),
              }}
              responsiveWidth={"$full"}
            />
            <FormInput
              control={control}
              errors={errors}
              name={"sku"}
              isRequired={false}
              label={t("SKU: ")}
              inputType="text"
              placeholder="SKU"
              rules={{
                required: t("required_field"),
              }}
              responsiveWidth={"$full"}
            />
            <ProductSelectOption />
            <ProductSelectOptionUnit
              responsiveWidth={ "$full"}
            />
            <ProductSelectOptionBrand />
          </Box>
        </Box>
        <Box
          bg="#fff"
          py="$4"
          px="$3"
          mt={16}
          mx="$2"
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
          <Box>
            <ProductTable
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
