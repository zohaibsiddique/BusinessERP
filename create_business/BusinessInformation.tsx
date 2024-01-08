import {
  Box,
  Button,
  ButtonText,
  Center,
 
  HStack,
 
  ScrollView,
} from "@gluestack-ui/themed";
import FormInput from "../components/FormInput";
import React from "react";
import DatePicker from "../components/DatePicker";
import SilentButton from "../components/SilentButton";
import ActiveButton from "../components/ActiveButton";


export default function BusinessInformation() {
  return (
    <ScrollView bg="$white" p={'$2'}>
      <Center>
        <Button w="$32" h="$32" variant="outline" action="secondary">
          <ButtonText>Add Logo</ButtonText>
        </Button>
      </Center>
      <FormInput
        type={"text"}
        isRequired={true}
        label={"Business Name"}
        placeholder={"Business Name"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <DatePicker />
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Website"}
        placeholder={"Website"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Business Contact Number"}
        placeholder={"Business Contact Number"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Alternate Contact Number"}
        placeholder={"Alternate Contact Number"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Country"}
        placeholder={"Country"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"State"}
        placeholder={"State"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"City"}
        placeholder={"City"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"Zip Code"}
        placeholder={"Zip Code"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"Land Mark"}
        placeholder={"Land Mark"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"Time Zone"}
        placeholder={"Time Zone"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"Currency"}
        placeholder={"Currency"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <HStack justifyContent="space-between" pt={'$4'}>
        <SilentButton label={"Cancel"} />
        <ActiveButton label={"Next"} />
      </HStack>
    </ScrollView>
  );
}
