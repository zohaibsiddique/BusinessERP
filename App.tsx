import "react-native-gesture-handler";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import React from "react";
import RegisterBusiness from "./register_business/RegisterBusiness";
import Warranties from "./register_business/Warranties";
import SignUp from "./auth/Signup";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./home/Dashboard";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//TODO: Extract styles, fonts settings, fonts for multi language, multi langague settings
export default function App() {
    const dimensions = useWindowDimensions();
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerType: dimensions.width >= 768 ? "permanent" : "front",
            drawerStyle: dimensions.width >= 768 ? null : { width: "100%" },
            overlayColor: "transparent",
          }}
        >
          <Drawer.Screen name="Warranties >" component={Warranties} />
          <Drawer.Screen name="Dashboard" component={MyStack} />
          <Drawer.Screen name="Warranties" component={Warranties} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

function MyStack() {
  const dimensions = useWindowDimensions();
   const isLargeScreen = dimensions.width >= 768;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterBusiness"
        component={RegisterBusiness}
        options={{
          title: "Register Business",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="warranties"
        component={Warranties}
        options={{
          title: "Warranties",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
}
