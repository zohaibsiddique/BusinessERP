import {
  HStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

export default function SilentButton({
    label,
}) {
  return (

   
      <Button
        width="50%"
        variant="outline"
        rounded={"$none"}
        borderWidth={"$1"}
        bg="$white"
      >
        <ButtonText color="$backgroundLight700">{label}</ButtonText>
      </Button>
      

  );
}
