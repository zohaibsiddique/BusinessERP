import "react-native-gesture-handler";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./Drawer_submenu/navigation/DrawerNav";


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        {/* <Drawer.Navigator
          screenOptions={{
            drawerType: dimensions.width >= 768 ? "permanent" : "front",
            drawerStyle: dimensions.width >= 768 ? null : { width: "100%" },
            overlayColor: "transparent",
          }}
        >
          <Drawer.Screen name="Warranties >" component={Warranties} />
          <Drawer.Screen name="Dashboard" component={MyStack} />
          <Drawer.Screen name="Warranties" component={Warranties} />
        </Drawer.Navigator> */}
        <DrawerNav />
        {/* <CustomDrawerNavigator /> */}
        {/* <NextDrawerApp /> */}
        {/* <Dashboard /> */}
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

// function MyStack() {
//   const dimensions = useWindowDimensions();
//   const isLargeScreen = dimensions.width >= 768;
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="RegisterBusiness"
//         component={RegisterBusiness}
//         options={{
//           title: "Register Business",
//           headerStyle: {
//             backgroundColor: "white",
//           },
//         }}
//       />
//       <Stack.Screen
//         name="warranties"
//         component={Warranties}
//         options={{
//           title: "Warranties",
//           headerStyle: {
//             backgroundColor: "white",
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
