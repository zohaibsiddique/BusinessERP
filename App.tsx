import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { config } from "./config/gluestack-ui.config";
import * as Font from "expo-font";
import { Text } from "@gluestack-ui/themed";
import HomeCreateBusiness from "./create_business/HomeCreateBusiness";


export default function App() {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(true);
 
  const loadFonts = async () => {
    await Font.loadAsync({
      habibFont: require("./assets/fonts/Roboto-Bold.ttf"),
      secFont: require("./assets/fonts/Roboto-Regular.ttf")

    });
    setLoading(false);
  };
  useEffect(() => {
    loadFonts();
  }, []);
  if (loading) {
    return null;
  }
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: "papayawhip" },
            headerTitleAlign: "center",
            headerTitleStyle: {fontFamily: 'habibFont'}
          }}
        >
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
