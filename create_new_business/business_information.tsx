
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import BusinessSettings from './business_settings';
import { Input, InputField } from '@gluestack-ui/themed';

export default function BusinessInformation() {

    return (
      <>
        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>
      
        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>
      
        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>
      
        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>
      
        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>
      
        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>

        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField placeholder='Enter Text here'/>
        </Input>
      </>
      
  
    );
  }