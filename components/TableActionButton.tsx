import jsPDF from "jspdf";
import "jspdf-autotable";
import { Picker } from "@react-native-picker/picker";
import {
  faFileCsv,
  faFileExcel,
  faPrint,
  faTableColumns,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState, useMemo } from "react";
import IconButtonText from "./IconButtonText";
import { Box, HStack, VStack, useMediaQuery } from "@gluestack-ui/themed";
import * as XLSX from "xlsx";
import "jspdf-autotable";
import Select from "react-select";

// -------- Function to convert data to CSV format --------
function convertToCSV(data) {
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  for (const row of data) {
    const values = headers.map((header) => {
      const escaped = ("" + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
}

//--------------- for download csv file ----------------
function downloadCSV(csvContent, filename) {
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --------------- Starting componenet function -----------
function TableActionButton({ data, columns, onValueChange }) {
  const [visible, setVisible] = useState(false);

  const tableRef = useRef(null);

  const [isLgScreen] = useMediaQuery({
    minWidth: 720,
  });
  const [isXsScreen] = useMediaQuery({
    minWidth: 400,
  });
  const [isSmScreen] = useMediaQuery({
    minWidth: 480,
  });
  const [isMdScreen] = useMediaQuery({
    maxWidth: 550,
    minWidth: 200,
  });
  //----------------- handle CSV ---------------------
  const handleExportCSV = () => {
    const csvContent = convertToCSV(data);
    downloadCSV(csvContent, "Brands_Table.csv");
  };

  //----------------- handle Excel --------------------
  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Brands_Table.xlsx");
  };

  //------------------ handle print ----------------------
  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const tableRows = [];
    const columns = Object.keys(data[0]);

    data.forEach((row) => {
      const rowData = columns.map((column) => row[column]);
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [columns],
      body: tableRows,
    });

    doc.save("table_data.pdf");
  };
  const handleValueChange = (itemValue, itemIndex) => {
    onValueChange(itemValue); 
    setVisible(!visible);
  };
  return (
    <>
      {isMdScreen ? (
        <VStack mr={"auto"}>
          <HStack ml={"auto"} mr={"auto"}>
            <IconButtonText
              text={"Export to CSV"}
              icon={faFileCsv}
              onPress={handleExportCSV}
            />
            <IconButtonText
              text={"Export to Excel"}
              icon={faFileExcel}
              onPress={handleExportExcel}
            />
            <IconButtonText
              text={"Print"}
              icon={faPrint}
              onPress={handlePrint}
            />
          </HStack>
          <HStack ml={"auto"} mr={"auto"}>
            <Box>
              <IconButtonText
                text={"Column visibility"}
                icon={faTableColumns}
                onPress={setVisible}
              />
              <Select options={columns} />
            </Box>

            <IconButtonText
              text={"Export to PDF"}
              icon={faFilePdf}
              onPress={handleExportPDF}
            />
          </HStack>
        </VStack>
      ) : (
        <HStack mr={"auto"}>
          <IconButtonText
            text={"Export to CSV"}
            icon={faFileCsv}
            onPress={handleExportCSV}
          />
          <IconButtonText
            text={"Export to Excel"}
            icon={faFileExcel}
            onPress={handleExportExcel}
          />
          <IconButtonText text={"Print"} icon={faPrint} onPress={handlePrint} />
          <Box>
            <IconButtonText
              text={"Column visibility"}
              icon={faTableColumns}
              onPress={setVisible}
            />

            {visible && (
              <Picker onValueChange={handleValueChange} >
                {columns.map((column) => (
                  <Picker.Item label={column.name} value={column.name} />
                ))}
              </Picker>
            )}
          </Box>

          <IconButtonText
            text={"Export to PDF"}
            icon={faFilePdf}
            onPress={handleExportPDF}
          />
        </HStack>
      )}
    </>
  );
}

export default TableActionButton;
