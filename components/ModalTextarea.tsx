import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import React from "react";

export default function ModalTextarea({description,placeholder}) {
  return (
    <FormControl>
      <FormControlLabel mt={"$2.5"}>
        <FormControlLabelText>{description}</FormControlLabelText>
      </FormControlLabel>
      <Textarea>
        <TextareaInput placeholder={placeholder} />
      </Textarea>
    </FormControl>
  );
}
