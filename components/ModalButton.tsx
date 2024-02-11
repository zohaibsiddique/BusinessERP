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
  Box,
} from "@gluestack-ui/themed";
import { useState } from "react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { t } from "i18next";
import ModalTextarea from "./ModalTextarea";
import SearchDropDown from "./SearchDropDown";
import { GetDurationCategory } from "../utils/Utils";
import React from "react";

export default function ModalButton({
  textArea,
  textInput1,
  textInput2,
  buttonHeading,
  searchDrop,
  halfInput,
  dynamicName1,
  dynamicName2,
  dynamicName3,
  searchDropLabel,
  searchDropName,
  dynamicLabel3,
  dynamicLabel1,
  dynamicLabel2,
  placeholder,
  description,
}) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isLargeScreen] = useMediaQuery({
    minWidth: 720,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    mode: "onTouched",
  });

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
                <Heading size="lg">{buttonHeading}</Heading>
                <ModalCloseButton>&times;</ModalCloseButton>
              </HStack>
            </ModalHeader>
            <ModalBody>
              {textInput1 && (
                <FormInput
                  control={control}
                  errors={errors}
                  name={dynamicName1}
                  isRequired={true}
                  label={t(dynamicLabel1)}
                  inputType="text"
                  rules={{
                    required: t("required_field"),
                  }}
                  responsiveWidth={"$full"}
                />
              )}
              {textInput2 && (
                <FormInput
                  control={control}
                  errors={errors}
                  name={dynamicName2}
                  isRequired={true}
                  label={t(dynamicLabel2)}
                  inputType="text"
                  rules={{
                    required: t("required_field"),
                  }}
                  responsiveWidth={"$full"}
                />
              )}
              {textArea && (
                <ModalTextarea
                  description={description}
                  placeholder={placeholder}
                />
              )}
              <HStack>
                {halfInput && (
                  <FormInput
                    control={control}
                    errors={errors}
                    name={dynamicName3}
                    isRequired={false}
                    label={t(dynamicLabel3)}
                    inputType="text"
                    rules={{
                      required: t("required_field"),
                    }}
                    responsiveWidth={isLargeScreen ? "$1/2" : "$2/5"}
                  />
                )}

                {searchDrop && (
                  <SearchDropDown
                    control={control}
                    errors={errors}
                    isRequired={false}
                    name={searchDropName}
                    rules={{
                      required: t("required_field"),
                    }}
                    list={GetDurationCategory()}
                    keyLabel={"category"}
                    values={"category"}
                    label={t(searchDropLabel)}
                    responsiveWidth={isLargeScreen ? "$1/2" : "$3/5"}
                  />
                )}
              </HStack>
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
