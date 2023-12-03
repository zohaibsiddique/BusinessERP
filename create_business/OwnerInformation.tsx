import { Box } from "@gluestack-ui/themed";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";

export default function OwnerInformation() {
  return (
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
      
    </Box>
  );
}
