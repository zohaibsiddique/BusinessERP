import { HStack, ScrollView } from '@gluestack-ui/themed';
import FormInput from '../components/FormInput';

import ActiveButton from '../components/ActiveButton';

export default function BusinessSettings() {
  return (
    <ScrollView bg="$white" p={"$2"}>
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Tax 1 Name"}
        placeholder={"Tax 1 Name"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Tax 1 No"}
        placeholder={"Tax 1 No"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Tax 2 Name"}
        placeholder={"Tax 2 Name"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={false}
        label={"Tax 2 No"}
        placeholder={"Tax 2 No"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"Financial Year Start Month"}
        placeholder={"January"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <FormInput
        type={"text"}
        isRequired={true}
        label={"Stock Accounting Method"}
        placeholder={"First in First out (FIFO)"}
        error={"Please specify your business name"}
        disabled={false}
        focus={null}
      />
      <HStack justifyContent="space-between" pt={"$4"}>
        <ActiveButton label={"Previous"} />
        <ActiveButton label={"Next"} />
      </HStack>
    </ScrollView>
  );
  }