import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Center, GluestackUIProvider, Heading } from '@gluestack-ui/themed';
import BusinessSettings from './create_new_business/business_settings';
import OwnerInformation from './create_new_business/owner_information';
import BusinessInformation from './create_new_business/BusinessInformation';
import { config } from "@gluestack-ui/config" 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeCreateNewBusiness from './create_new_business/home_create_new_business';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home_create_new_business" component={HomeCreateNewBusiness} options={{title: "Create Business"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    
  );
}
