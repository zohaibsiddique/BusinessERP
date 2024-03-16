import {
  faFileCsv,
  faFileExcel,
  faPrint,
  faTableColumns,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import React, { useMemo } from "react";
import IconButtonText from "./IconButtonText";
import { Box, HStack, VStack, useMediaQuery } from "@gluestack-ui/themed";
import * as XLSX from "xlsx";

// -------- Function to convert data to CSV format --------
function convertToCSV(data) {
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));

  for (const row of data) {
    const values = headers.map(header => {
      const escaped = ('' + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
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

function TableActionButton({ data }) {
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
  const handleExportCSV = () => {
    const csvContent = convertToCSV(data);
    console.log("CSV Data:", csvContent);
    downloadCSV(csvContent, "table_data.csv");
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
              onPress={undefined}
            />
            <IconButtonText text={"Print"} icon={faPrint} onPress={undefined} />
          </HStack>
          <HStack ml={"auto"} mr={"auto"}>
            <IconButtonText
              text={"Column visibility"}
              icon={faTableColumns}
              onPress={undefined}
            />
            <IconButtonText
              text={"Export to PDF"}
              icon={faFilePdf}
              onPress={undefined}
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
            onPress={undefined}
          />
          <IconButtonText text={"Print"} icon={faPrint} onPress={undefined} />
          <IconButtonText
            text={"Column visibility"}
            icon={faTableColumns}
            onPress={undefined}
          />
          <IconButtonText
            text={"Export to PDF"}
            icon={faFilePdf}
            onPress={undefined}
          />
        </HStack>
      )}
    </>
  );
}

export default TableActionButton;
