import {
  Button,
  ButtonText,
  Center,
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
  View,
} from "@gluestack-ui/themed";
import { useState } from "react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { t } from "i18next";
import ModalTextarea from "./ModalTextarea";
import ModalSelect from "./ModalSelect";
import SearchDropDown from "./SearchDropDown";
import { GetDurationCategory } from "../utils/Utils";
import React from "react";
import { FlatList } from "react-native-gesture-handler";


export default function ModalButton(value) {
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
  const [formData, setFormData] = useState({}); // State to hold form data
  const [dataArray, setDataArray] = useState([]); // State to hold the array of form data
    const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = () => {
      setDataArray([...dataArray, formData]);
      setFormData({}); // Clear form data after submission
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
                <Heading size="lg">Add Warranty</Heading>
                <ModalCloseButton>&times;</ModalCloseButton>
              </HStack>
            </ModalHeader>
            <ModalBody>
              <FormInput
                control={control}
                errors={errors}
                name={"Name"}
                isRequired={true}
                label={t("Name")}
                inputType="text"
              
                rules={{
                  required: t("required_field"),
                }}
                responsiveWidth={"$full"}
              />
              <ModalTextarea />
              <HStack>
                <FormInput
                  control={control}
                  errors={errors}
                  name={"Duration"}
                  isRequired={true}
                  label={t("Duration")}
                  inputType="text"
              
                  rules={{
                    required: t("required_field"),
                  }}
                  responsiveWidth={isLargeScreen ? "$1/2" : "$2/5"}
                />

                <Box mt={22} ml={"-$2"} w={"$full"}>
                  <SearchDropDown
                    control={control}
                    errors={errors}
                    isRequired={false}
                    name={"business_category"}
                    rules={{
                      required: t("required_field"),
                    }}
                    list={GetDurationCategory()}
                    keyLabel={"category"}
                    values={"category"}
                    label={t("")}
                    responsiveWidth={isLargeScreen ? "$1/2" : "$3/5"}
                  />
                </Box>
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
                <Button
                  action="secondary"
                  variant="solid"
                  size="sm"
                  onPress={() => {
                    
                      handleFormSubmit;
                    
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
