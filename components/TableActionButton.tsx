import {
  faFileCsv,
  faFileExcel,
  faPrint,
  faTableColumns,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IconButtonText from "./IconButtonText";
import { Box, useMediaQuery } from "@gluestack-ui/themed";

function TableActionButton() {
  const [isLargeScreen] = useMediaQuery({
    minWidth: 720,
  });
  return (
    <Box
      marginRight="auto"
      flexWrap={isLargeScreen ? "wrap" : "nowrap"}
      flexDirection="row"
      justifyContent="center"
    >
      <IconButtonText text={"Export to CSV"} icon={faFileCsv} />
      <IconButtonText text={"Export to Excel"} icon={faFileExcel} />
      <IconButtonText text={"Print"} icon={faPrint} />
      <IconButtonText text={"Column visibility"} icon={faTableColumns} />
      <IconButtonText text={"Export to PDF"} icon={faFilePdf} />
    </Box>
  );
}

export default TableActionButton;
