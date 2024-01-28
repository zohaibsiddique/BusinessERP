import React, { useRef, useState } from "react"
import { Platform } from "react-native"
import { ReactSketchCanvas } from "react-sketch-canvas"
import SignatureScreen from 'react-native-signature-canvas';
import { ButtonText,Modal,Text, Button, Center, CloseIcon, Heading, Icon, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, View } from "@gluestack-ui/themed";

export default function SignatureCanvas(){

    const [showModal, setShowModal] = useState(false);
    const ref = useRef();
    const canvasRef = React.createRef();

    // Called after ref.current.readSignature() reads a non-empty base64 string
    const handleOK = (signature) => {
      console.log(signature);
    };

    // Called after ref.current.readSignature() reads an empty string
    const handleEmpty = () => {
      console.log("Empty");
    };

    // Called after ref.current.clearSignature()
    const handleClear = () => {
      //ref.current?.clearSignature()
      console.log("clear success!");
    };

    // Called after end of stroke
    const handleEnd = () => {
    };

    // Called after ref.current.getData()
    const handleData = (data) => {
      console.log(data);
    };
    
    return (
      <Center>
        <Button onPress={() => setShowModal(true)} ref={ref}>
          <ButtonText>Add Signature</ButtonText>
        </Button>
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
              <Heading size='lg'>Draw Signature</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
               {Platform.OS == 'android' ? <View style={{ width: 300, height: 200 }}>
                    <SignatureScreen
                      ref={canvasRef}
                      onEnd={handleEnd}
                      onOK={handleOK}
                      onEmpty={handleEmpty}
                      onClear={handleClear}
                      onGetData={handleData}
                      autoClear={true}
                    />
                  </View> 
                : <ReactSketchCanvas ref={canvasRef}/>
              }
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                mr="$3"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                action="secondary"
                borderWidth='$0'
                mr="$3"
                onPress={() => {
                  {Platform.OS == 'android' ? canvasRef.current.clearSignature() : canvasRef.current.clearCanvas()}
                }}
              >
                <ButtonText>Reset</ButtonText>
              </Button>
              <Button
                size="sm"
                action="positive"
                borderWidth='$0'
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Save</ButtonText>
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    );


 

  
   
  }