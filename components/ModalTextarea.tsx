import { FormControl, FormControlLabel, FormControlLabelText, Textarea, TextareaInput } from "@gluestack-ui/themed";

export default function ModalTextarea(){
  return (
    <FormControl>
          <FormControlLabel mt={"$2.5"}>
            <FormControlLabelText>Description:</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="Description" />
          </Textarea>
        </FormControl>
  )
}

        
      