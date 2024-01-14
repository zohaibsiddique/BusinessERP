import { Box, Button, ButtonText, Center, KeyboardAvoidingView, ScrollView, useMediaQuery } from "@gluestack-ui/themed";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import { Platform } from "react-native";

export default function OwnerInformation() {

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });
  
  return (
      <Box p="$2" bg="$white">
        <Box flexDirection={isLargeScreen ?  "row" : "column" } flexWrap="wrap" flex={1} alignItems="flex-start">

        <FormInput
          type={"text"}
          isRequired={false}
          label={"Prefix"}
          placeholder={"Mr/ Mrs/ Miss"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
          responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
        />
        <FormInput
          type={"text"}
          isRequired={true}
          label={"First Name"}
          placeholder={"First Name"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
          responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
        />
        <FormInput
          type={"text"}
          isRequired={false}
          label={"Last Name"}
          placeholder={"Last Name"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
          responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
        />
        <FormInput
          type={"text"}
          isRequired={false}
          label={"UserName"}
          placeholder={"Usser Name"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
          responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
        />
        <FormInput
          type={"text"}
          isRequired={false}
          label={"Email"}
          placeholder={"Email"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
          responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
        />

        <PasswordInput
          isRequired={true}
          label={"Password"}
          placeholder={"Password"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
          responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
        />
        <PasswordInput
          isRequired={true}
          label={"Confirm Password"}
          placeholder={"Confirm Password"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
          responsiveWidth={isLargeScreen ?  "$1/2" : "$full" }
        />
        </Box>
        <Center mt='$4.5'>
            <Button size="sm" variant="outline" action="secondary">
              <ButtonText>Add Signature</ButtonText>
            </Button>
          </Center>
      </Box>
  );
}
