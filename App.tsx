import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider, ScrollView,Box,
  Button,
  ButtonText,
  HStack, 
  useMediaQuery} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import OwnerInformation from "./create_business/OwnerInformation";
import BusinessSettings from "./create_business/BusinessSettings";
import BusinessInformation from "./create_business/BusinessInformation";
import HomeCreateBusiness from "./create_business/HomeCreateBusiness";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
        <HomeCreateBusiness/>
    </GluestackUIProvider>
  );
}
