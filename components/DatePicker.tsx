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
  Box,
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
import FormInput from "./FormInput";

export default function DatePicker({responsiveWidthh}) {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(dayjs());
  const ref = React.useRef(null);

  return (
    <>
      <FormInput
          type={"text"}
          isRequired={true}
          label={"Starting Date"}
          placeholder={"Date"}
          error={"Please specify date"}
          disabled={false}
          focus={null}
          responsiveWidth={responsiveWidthh}
        />
    <Pressable
        onPress={() => {
          setShowModal(true);
        }}
        ref={ref}
      > 
        
      </Pressable>
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
