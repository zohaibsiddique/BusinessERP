import {
  Button,
  ButtonText,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
} from "@gluestack-ui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BusinessInformation from "./BusinessInformation";
import BusinessSettings from "./BusinessSettings";
import OwnerInformation from "./OwnerInformation";
import { Platform } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { config } from "@gluestack-ui/config";

export default function HomeCreateBusiness() {
  const Tab = createMaterialTopTabNavigator();
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  return (
    <> 
      <ScrollView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, zIndex: 999 }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#dc2626",
            tabBarInactiveTintColor: "#525252",
            tabBarIndicatorStyle: { backgroundColor: "#dc2626" },
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: "Roboto_400Regular_Italic",
            },
          })}
        >
          <Tab.Screen
            name="business_information"
            component={BusinessInformation}
            options={{ title: "Business Info" }}
          />
          <Tab.Screen
            name="business_settings"
            component={BusinessSettings}
            options={{ title: "Settings" }}
          />
          <Tab.Screen
            name="owner_information"
            component={OwnerInformation}
            options={{ title: "Owner Info" }}
          />
        </Tab.Navigator>

        <HStack justifyContent="space-between">
          <Button
            width="50%"
            variant="outline"
            sx={{ borderRadius: "$none", borderWidth: "$0" }}
          >
            <ButtonText sx={{ color: "$backgroundLight700" }}>
              CANCEL
            </ButtonText>
          </Button>
          <Button width="50%" bg="$red600" sx={{ borderRadius: "$none" }}>
            <ButtonText>SAVE</ButtonText>
          </Button>
        </HStack>
      </ScrollView>
      
    </>
  );
}
