import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Center, GluestackUIProvider, Heading } from '@gluestack-ui/themed';
import BusinessSettings from './create_business/BusinessSettings';
import OwnerInformation from './create_business/OwnerInformation';
import BusinessInformation from './create_business/BusinessInformation';
import { config } from "@gluestack-ui/config" 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeCreateNewBusiness from './create_business/HomeCreateBusiness;

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
