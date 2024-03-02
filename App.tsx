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
        <DrawerNav />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
