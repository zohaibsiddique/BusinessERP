import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from "@gluestack-ui/themed";
import TableActionButton from "../components/TableActionButton";


export default function PriceTable({ columns, data, responsiveWidth }) {
  // for Data
  const [tableData, setTabelData] = useState([]);
  // for filter data

  const [filteredTableData, setFilteredTabelData] = useState([]);
  // for search data
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTabelData(data);
    setFilteredTabelData(data);
  }, []);

  useEffect(() => {
    const result = tableData.filter((tabledata) => {
      return tabledata.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredTabelData(result);
  }, [search, tableData]);

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#f4f4f4",
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
        width={responsiveWidth}
        columns={columns}
        data={filteredTableData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="300px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <Input height={25}>
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
        subHeaderAlign="center"
        customStyles={customStyles}
        actions={<TableActionButton />}
      ></DataTable>
    </Box>
  );
}
