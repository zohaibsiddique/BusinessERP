import { Box, Text, Button, HStack } from "@gluestack-ui/themed";
import React, { useCallback, useState } from "react";
import DocumentPicker from "react-native-document-picker";

function FileUploader() {

  return (
    <Box>
      <Text fontWeight="$bold" fontSize={"$sm"}>
        File To Impot :
      </Text>
      <HStack space="sm" alignItems="center" marginVertical={"$2"}>
      
        <Button
          borderRadius={"$xs"}
          bg="$secondary0"
          size="xs"
          borderColor="$secondary500"
          borderWidth={"$1"}
          paddingVertical="$0"
          paddingHorizontal={"$0.5"}
        height={"$6"}
        >
          Choose File 📑
        </Button>
        <Text>No file chosen</Text>
      </HStack>
    </Box>
  );
}

export default FileUploader;
