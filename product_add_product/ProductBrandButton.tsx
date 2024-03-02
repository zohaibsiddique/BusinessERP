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

import SelectUnit from "../product_units/SelectUnit";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductBrandButton() {
  const [showModal, setShowModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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

  return (
    <>
      <Button
        height={30}
        variant="outline"
        onPress={() => setShowModal(true)}
        mt="$6"
        borderBottomLeftRadius={0}
        borderTopLeftRadius={0}
        borderColor="$secondary200"
        p={"$0"}
        onPressIn={() => setIsHovering(true)}
        onPressOut={() => setIsHovering(false)}
      >
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ color: "#3b82f6" }}
          size={18}
        />
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
            <ModalHeader>
              <HStack
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Heading size="lg">Add brand</Heading>
                <ModalCloseButton>&times;</ModalCloseButton>
              </HStack>
            </ModalHeader>
            <ModalBody>
              <FormInput
                control={control}
                errors={errors}
                name={"brand-name"}
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
                name={"short-description"}
                isRequired={false}
                label={t("Short Description")}
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
                    setShowModal(false);
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
