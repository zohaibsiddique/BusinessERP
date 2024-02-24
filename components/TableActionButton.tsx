import {
  faFileCsv,
  faFileExcel,
  faPrint,
  faTableColumns,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IconButtonText from "./IconButtonText";
import { Box, HStack, VStack, useMediaQuery } from "@gluestack-ui/themed";

function TableActionButton() {
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
  return (
    <>
      {isMdScreen ? (
        <VStack mr={"auto"}>
          <HStack ml={"auto"} mr={"auto"}>
            <IconButtonText text={"Export to CSV"} icon={faFileCsv} />
            <IconButtonText text={"Export to Excel"} icon={faFileExcel} />
            <IconButtonText text={"Print"} icon={faPrint} />
          </HStack>
          <HStack ml={"auto"} mr={"auto"}>
            <IconButtonText text={"Column visibility"} icon={faTableColumns} />
            <IconButtonText text={"Export to PDF"} icon={faFilePdf} />
          </HStack>
        </VStack>
      ) : (
        <HStack mr={"auto"}>
          <IconButtonText text={"Export to CSV"} icon={faFileCsv} />
          <IconButtonText text={"Export to Excel"} icon={faFileExcel} />
          <IconButtonText text={"Print"} icon={faPrint} />
          <IconButtonText text={"Column visibility"} icon={faTableColumns} />
          <IconButtonText text={"Export to PDF"} icon={faFilePdf} />
        </HStack>
      )}
    </>
  );
}

export default TableActionButton;
