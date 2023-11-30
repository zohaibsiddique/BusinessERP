
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import BusinessSettings from './business_settings';
import { Box, Input, InputField, Button, ButtonText, Center, FormControl, FormControlError, FormControlLabel, FormControlLabelText, FormControlHelperText, FormControlHelper, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from '@gluestack-ui/themed';
import FormInput from '../components/FormInput';

export default function BusinessInformation() {

    return (
      <Box p="$2" bg="$white">
        <Center>
          <Button w="$32" h="$32"variant="outline"action="secondary">
            <ButtonText>ADD LOGO</ButtonText>
          </Button>
        </Center>
        <FormInput type={"text"} isRequired={true} label={"Business Name"} error={"Please specify your business name"}/>
        <FormInput type={"text"} isRequired={true} label={"Start Date"} error={"This field is required"}/>
        <FormInput type={"text"} isRequired={false} label={"Website"} error={""}/>
      </Box>
    );
  }