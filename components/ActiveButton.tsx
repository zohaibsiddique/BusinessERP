import {
  HStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

export default function ActiveButton({
    label,
}) {
  return (
    
      <Button
        width="50%"
        variant="outline"
        rounded={"$none"}
        borderWidth={"$1"}
      bg="$red600"
      
      >
        <ButtonText color="$white">{label}</ButtonText>
      </Button>

  
  );
}
