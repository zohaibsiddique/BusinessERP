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
} from "@gluestack-ui/themed";
import { CheckBox } from "react-native";

import { useState } from "react";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { t } from "i18next";
import ModalTextarea from "../components/ModalTextarea";
import React from "react";

import SelectOption from "../components/SelectOption";

export default function ModalButton() {
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
            <ModalHeader borderBottomWidth="$0">
              <HStack
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Heading size="lg">All Your Categories</Heading>
                <ModalCloseButton>&times;</ModalCloseButton>
              </HStack>
            </ModalHeader>
            <ModalBody>
              <FormInput
                control={control}
                errors={errors}
                name={"Category-name"}
                isRequired={true}
                label={t("Category Name")}
                inputType="text"
                rules={{
                  required: t("required_field"),
                }}
                responsiveWidth={"$full"}
              />

              <FormInput
                control={control}
                errors={errors}
                name={"category-code"}
                isRequired={true}
                label={t("Category Code")}
                inputType="text"
                rules={{
                  required: t("required_field"),
                }}
                responsiveWidth={"$full"}
              />
              <Text>
                Category code is same as
                <Text fontWeight="$bold"> HSN code</Text>
              </Text>
              <ModalTextarea
                description={"Description"}
                placeholder={"Description"}
              />

              <HStack space="sm" alignItems="center" mt="$2.5">
                <CheckBox
                  value={isChecked}
                  onValueChange={handleCheckboxChange}
                />
                <Text>Add as sub taxonomy</Text>
              </HStack>

              {isChecked && <SelectOption />}
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
