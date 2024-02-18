import {
  Button,
  ButtonText,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  HStack,
  useMediaQuery,
  ModalCloseButton,
  Text,
  Pressable,
  Box,
} from "@gluestack-ui/themed";
import { useState } from "react";
import FormInput from "../components/FormInput";
import { CheckBox } from "react-native";
import { useForm } from "react-hook-form";
import { t } from "i18next";
import React from "react";

import SelectUnit from "./SelectUnit";
import CheckBoxUnit from "./CheckBoxUnit";
import AddMultipleUnit from "./AddMultipleUnit";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function ModalButtonUnits() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isLargeScreen] = useMediaQuery({
    minWidth: 720,
  });
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    mode: "onTouched",
  });
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  // hovering effect 
   const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>+Add</ButtonText>
      </Button>
      {isOpen && (
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader >
              <HStack
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                
                }}
                
              >
                <Heading size="lg">Add Units</Heading>
                <ModalCloseButton >&times;</ModalCloseButton>
              </HStack>
            </ModalHeader>
            <ModalBody >
              <FormInput
                control={control}
                errors={errors}
                name={"unit-name"}
                isRequired={true}
                label={t("Name")}
                inputType="text"
                rules={{
                  required: t("required_field"),
                }}
                responsiveWidth={"$full"}
              />

              <FormInput
                control={control}
                errors={errors}
                name={"short-name"}
                isRequired={true}
                label={t("Short Name")}
                inputType="text"
                rules={{
                  required: t("required_field"),
                }}
                responsiveWidth={"$full"}
              />

              <SelectUnit />

              <HStack space="sm" alignItems="center" mt="$3">
                <CheckBox
                  value={isChecked}
                  onValueChange={handleCheckboxChange}
                />
                <Text size="sm">Add as multiple of other unit </Text>
                <Pressable
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  
                >
                  
                    <FontAwesomeIcon icon={faCircleInfo} />
                    {isHovering && (
                      <Box
                        position="relative"
                        bg="$white"
                        p={"$1.5"}
                        borderRadius={"$sm"}
                        mt={"$1.5"}
                      >
                        <Text>
                          Define this unit is as the multiple of other units
                        </Text>
                        <Text fontWeight="$bold">Ex: 1 dozen = 12 pieces</Text>
                      </Box>
                    )}
                 
                </Pressable>
              </HStack>

              {isChecked && <AddMultipleUnit />}
            </ModalBody>
            <ModalFooter borderTopWidth="$0">
              <HStack space="sm">
                <Button
                  size="sm"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Save</ButtonText>
                </Button>
                <Button action="secondary" variant="solid" size="sm">
                  <ButtonText>Close</ButtonText>
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
