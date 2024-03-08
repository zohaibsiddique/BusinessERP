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
} from "@gluestack-ui/themed";
import { useState } from "react";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { t } from "i18next";
import React from "react";

export default function ModalButtonBrands({ onAddItems }) {


  const [showModal, setShowModal] = useState(false);
  const [brands, setBrands] = useState("");
  const [description, setDescription] = useState("");
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

  // saving data in arrary
  function handleSave(e) {
    e.preventDefault();

    if (!brands) return;

    const newItem = { brands, description, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setBrands("");
  }

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
                name={brands}
                isRequired={true}
                label={t("Brand Name")}
                inputType="text"
                rules={{
                  required: t("required_field"),
                }}
                responsiveWidth={"$full"}
                placeholder={"Brand Name"}
              />

              <FormInput
                control={control}
                errors={errors}
                name={description}
                isRequired={false}
                label={t("Short description:")}
                inputType="text"
                rules={{
                  required: t("required_field"),
                }}
                responsiveWidth={"$full"}
                placeholder={"Short Description"}
              />
            </ModalBody>
            <ModalFooter borderTopWidth="$0">
              <HStack space="sm">
                <Button
                  size="sm"
                  onPress={() => {
                    handleSave;
                  }}
                >
                  <ButtonText>Save</ButtonText>
                </Button>
                <Button
                  action="secondary"
                  variant="solid"
                  size="sm"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
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
