import { Box, Button, ButtonText, Center, KeyboardAvoidingView, ScrollView } from "@gluestack-ui/themed";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import { Platform } from "react-native";

export default function OwnerInformation() {
  return (
    <ScrollView>
      <Box p="$2" bg="$white">
        <FormInput
          type={"text"}
          isRequired={false}
          label={"Prefix"}
          placeholder={"Mr/ Mrs/ Miss"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
        />
        <FormInput
          type={"text"}
          isRequired={true}
          label={"First Name"}
          placeholder={"First Name"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
        />
        <FormInput
          type={"text"}
          isRequired={false}
          label={"Last Name"}
          placeholder={"Last Name"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
        />
        <FormInput
          type={"text"}
          isRequired={false}
          label={"UserName"}
          placeholder={"Usser Name"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
        />
        <FormInput
          type={"text"}
          isRequired={false}
          label={"Email"}
          placeholder={"Email"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
        />

        <PasswordInput
          isRequired={true}
          label={"Password"}
          placeholder={"Password"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
        />
        <PasswordInput
          isRequired={true}
          label={"Confirm Password"}
          placeholder={"Confirm Password"}
          error={"Please specify your business name"}
          disabled={false}
          focus={null}
        />
        <Center mt='$4.5'>
            <Button w="$40" h="$40" variant="outline" action="secondary">
              <ButtonText>Add Signature</ButtonText>
            </Button>
          </Center>
      </Box>
    </ScrollView>
  );
}
