import React, { useEffect, useState } from "react";
import DataTable, { Alignment } from "react-data-table-component";
import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from "@gluestack-ui/themed";
import TableActionButton from "../components/TableActionButton";

export default function BrandsTable({ columns, data }) {
  // for Data
  const [tableData, setTabelData] = useState([]);
  // for filter data

  const [filteredTableData, setFilteredTabelData] = useState([]);
  // for search data
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("tabledata123:", data);
    setTabelData(data);
    console.log("tabledata:", tableData);
    setFilteredTabelData(data);
  }, [data]);

  useEffect(() => {
    const result = tableData.filter((tabledata) => {
      return tabledata.brands.toLowerCase().match(search.toLowerCase());
    });
    setFilteredTabelData(result);
  }, [search, tableData]);
 
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#f4f4f4",justifyContent: "center",
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
        justifyContent: "center",
      },
    },
  };

  return (
    <Box>
      <DataTable
        columns={columns}
        data={filteredTableData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="300px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        pointerOnHover
        theme="default"
        subHeader
        subHeaderComponent={
          <Input height={30}>
            <InputSlot>
              <InputIcon pl={"$1.5"} as={SearchIcon} />
            </InputSlot>
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            />
          </Input>
        }
        subHeaderAlign={Alignment.CENTER}
        customStyles={customStyles}
        actions={<TableActionButton />}
      ></DataTable>
    </Box>
  );
}
