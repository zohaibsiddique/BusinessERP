import {
  Button,
  ButtonText,
  Heading,
  Modal,
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

export default function ModalButtonBrands({ onAddBrand }) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isLargeScreen] = useMediaQuery({
    minWidth: 720,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { brands: "Bonanza", description: "Clothing Brand" },
    mode: "onTouched",
  });

  const onSubmit = (brandsData) => {
    // Pass data to the parent component
    onAddBrand(brandsData);
    setValue("brands", "");
    setValue("description", "");
    setShowModal(false);
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
                 <ModalCloseButton>❌</ModalCloseButton> 
              </HStack>
            </ModalHeader>
            <ModalBody>
              <FormInput
                control={control}
                errors={errors}
                name={"brands"}
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
                name={"description"}
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
                <Button size="sm" onPress={handleSubmit(onSubmit)}>
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
