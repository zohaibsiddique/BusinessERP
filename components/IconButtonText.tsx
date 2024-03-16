import React from "react";
import { Box, Button, ButtonText } from "@gluestack-ui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function IconButtonText({ text, icon, onPress }) {
  return (
    <Box>
      <Button
        bg="$secondary0"
        marginHorizontal={1}
        size="xs"
        variant="outline"
        action="secondary"
        isDisabled={false}
        isFocusVisible={false}
        borderRadius={"$none"}
        borderColor="$secondary200"
        $hover-bg="$secondary100"
        $active-bg="$secondary400"
        $dark-color="$textDark300"
        $_text-hover-color="$secondary800"
        p={"$1"}
        height={25}
        alignItems="center"
        onPress={onPress}
      >
        <FontAwesomeIcon icon={icon} style={{ marginRight: 4 }} size={12} />
        <ButtonText fontSize="$xs" fontWeight="$Normal">
          {text}
        </ButtonText>
      </Button>
    </Box>
  );
}

export default IconButtonText;
