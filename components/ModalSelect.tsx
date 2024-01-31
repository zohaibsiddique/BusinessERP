import {
  AlertCircleIcon,
  Box,
  ChevronDownIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { LightSpeedInLeft } from "react-native-reanimated";

export default function ModalSelect({ responsiveWidth, placeholder, list }) {
  return (
    <Box width={responsiveWidth}>
      <FormControl>
        <FormControlLabel mt="$8">
          <FormControlLabelText></FormControlLabelText>
        </FormControlLabel>
        <Select>
          <SelectTrigger>
            <SelectInput placeholder={placeholder} />
            <SelectIcon mr="$3">
              <Icon as={ChevronDownIcon} />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label={list} value={list} />
            </SelectContent>
          </SelectPortal>
        </Select>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Mandatory field</FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
}
