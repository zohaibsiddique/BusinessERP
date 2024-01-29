import React, { useRef, useState } from "react"
import { Platform } from "react-native"
import { ReactSketchCanvas } from "react-sketch-canvas"
import SignatureScreen from 'react-native-signature-canvas';
import { ButtonText,Modal,Text, Button, Center, CloseIcon, Heading, Icon, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, View } from "@gluestack-ui/themed";

export default function SignatureCanvas({title, saveText, cancelText, clearText, addSignText}){

    const [showModal, setShowModal] = useState(false);
    const ref = useRef();
    const canvasRef = React.createRef();

    // Called after ref.current.getData()
    const handleData = (data) => {
      console.log(data);
    };

    // Called after ref.current.clearSignature()
    const handleClear = () => {
      {Platform.OS == 'android' ? canvasRef.current.clearSignature() : canvasRef.current.clearCanvas()}
    };
    
    return (
      <Center>
        <Button onPress={() => setShowModal(true)} ref={ref}>
          <ButtonText>{addSignText}</ButtonText>
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
              <Heading size='lg'>{title}</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
               {Platform.OS == 'android' ? <View style={{ width: 300, height: 200 }}>
                      <SignatureScreen ref={canvasRef}   
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
                <ButtonText>{cancelText}</ButtonText>
              </Button>
              <Button
                size="sm"
                action="secondary"
                borderWidth='$0'
                mr="$3"
                onPress={() => {
                  handleClear()
                }}
              >
                <ButtonText>{clearText}</ButtonText>
              </Button>
              <Button
                size="sm"
                action="positive"
                borderWidth='$0'
                onPress={() => {
                  {Platform.OS == 'android' ? canvasRef.current.getData() : canvasRef.current.exportImage("png")
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((e) => {
                        console.log(e);
                      });}
                  setShowModal(false);
                }}
              >
                <ButtonText>{saveText}</ButtonText>
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    );


 

  
   
  }