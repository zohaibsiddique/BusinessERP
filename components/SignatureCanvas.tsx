import React, { useRef } from "react"
import { Platform } from "react-native"
import { ReactSketchCanvas } from "react-sketch-canvas"
import SignatureScreen from 'react-native-signature-canvas';

export default function SignatureCanvas(){

  const ref = useRef();

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
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    console.log(data);
  };

  
    if(Platform.OS === 'android'){
      return <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        onGetData={handleData}
        autoClear={true}
      />
    } else {
      return <ReactSketchCanvas/>
    }
  }