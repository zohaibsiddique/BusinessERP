import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  HStack,
  ScrollView,
  Text,
  useMediaQuery,
} from "@gluestack-ui/themed";
import { useForm } from "react-hook-form";
import { brandsTableData as initialBrandsTableData } from "../components/constants";
import BrandsTable from "./BrandsTable";
import ModalButtonBrands from "./ModalButtonBrands";
import ModalButtonBrandsEdit from "./ModalButtonBrandsEdit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Brands() {
  const [brandsTableData, setBrandsTableData] = useState(() => {
    const storedData = localStorage.getItem("brandsTableData");
    return storedData ? JSON.parse(storedData) : initialBrandsTableData;
  });

  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    localStorage.setItem("brandsTableData", JSON.stringify(brandsTableData));
  }, [brandsTableData]);

  const saveData = (newData) => {
    const updatedData = [...brandsTableData, newData];
    setBrandsTableData(updatedData);
  };

  const handleDelete = (row) => {
    const updatedData = brandsTableData.filter((item) => item !== row);
    setBrandsTableData(updatedData);
  };

  const handleEdit = (row) => {
    setSelectedRow(row);
  };

  const handleAddOrEditBrand = (brandsData) => {
    if (selectedRow) {
      const updatedData = brandsTableData.map((item) =>
        item === selectedRow ? { ...item, ...brandsData } : item
      );
      setBrandsTableData(updatedData);
      setSelectedRow(null);
    } else {
      setBrandsTableData([...brandsTableData, brandsData]);
    }
  };

  const { t } = useTranslation();

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720,
  });

  const columns = [
    {
      name: "Brands",
      selector: (row) => row.brands,
      sortable: true,
    },
    {
      name: "Note",
      selector: (row) => row.description,
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
            onPress={() => handleEdit(row)}
          >
            Edit
          </Button>
          <Button
            size="xs"
            borderColor="$secondary300"
            variant="outline"
            onPress={() => handleDelete(row)}
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

        <Box
          bg="#fff"
          py="$4"
          mt={16}
          rounded="$md"
          borderTopWidth={"$2"}
          borderColor="$primary600"
        >
          <Box>
            <HStack justifyContent="space-between" px={"$3"}>
              <Text fontSize={"$xl"}>{t(" All Your Brands")}</Text>
              {selectedRow ? (
                <ModalButtonBrandsEdit
                  onAddOrEditBrand={handleAddOrEditBrand}
                  initialData={selectedRow}
                />
              ) : (
                <ModalButtonBrands onAddBrand={saveData} />
              )}
            </HStack>
          </Box>

          <Box>
            <BrandsTable columns={columns} data={brandsTableData} />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
