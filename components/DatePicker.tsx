import { Pressable, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import {
  ButtonText,
  CloseIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Button,
  Icon,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Modal,
  View,
} from "@gluestack-ui/themed";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";

export default function DatePicker() {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(dayjs());
  const ref = React.useRef(null);

  return (
    <>
      <FormControl isRequired={true}>
        <FormControlLabel mt="$4.5">
          <FormControlLabelText>Start Datee</FormControlLabelText>
        </FormControlLabel>
      </FormControl>
      <Pressable
        onPress={() => {
          setShowModal(true);
        }}
        ref={ref}
      >
        <Text
          p="$2"
          borderWidth="$1"
          borderColor="$secondary200"
          borderRadius="$md"
          color="$secondary300"
        >
          Start Date
        </Text>
      </Pressable>
      {/* <DatePickerModal
        locale="en"
        mode="single"
        label="Select Date"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      /> */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg" color="$red600">
              Select Date
            </Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <View>
              <DateTimePicker
                value={value}
                onValueChange={(date) => setValue(date)}
                selectedItemColor="#dc2626"
              />
            </View>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
