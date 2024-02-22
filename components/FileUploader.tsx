import { Box, Text, Button, HStack } from "@gluestack-ui/themed";
import React, { useCallback, useState } from "react";
import DocumentPicker from "react-native-document-picker";

function FileUploader() {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
      try {
        const response = await DocumentPicker.pick();
        setFileResponse(response);
      } catch (err) {
        console.warn(err);
      }
    }, []);

  return (
    <Box>
      <Text fontWeight="$bold" fontSize={"$sm"}>
        File To Impot :
      </Text>
      <HStack space="sm" alignItems="center" marginVertical={"$2"}>
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            numberOfLines={1}
            ellipsizeMode={"middle"}
          >
            {file?.uri}
          </Text>
        ))}
        <Button
          borderRadius={"$xs"}
          bg="$secondary0"
          size="xs"
          borderColor="$secondary500"
          borderWidth={"$1"}
          paddingVertical="$0"
          paddingHorizontal={"$0.5"}
          onPress={handleDocumentSelection}
        >
          Choose File 📑
        </Button>
      </HStack>
    </Box>
  );
}

export default FileUploader;
