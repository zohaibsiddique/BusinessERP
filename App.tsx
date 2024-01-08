import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import { config } from "@gluestack-ui/config";

import HomeCreateBusiness from "./create_business/HomeCreateBusiness";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home_create_new_business"
            component={HomeCreateBusiness}
            options={{ title: "Create Business" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
//check status