import {
  Button,
  ButtonText,
  HStack,
  KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BusinessInformation from "./BusinessInformation";
import BusinessSettings from "./BusinessSettings";
import OwnerInformation from "./OwnerInformation";
import { Platform } from "react-native";
import React from "react";

export default function HomeCreateBusiness() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, zIndex: 999 }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#dc2626",
            tabBarInactiveTintColor: "#525252",
            tabBarIndicatorStyle: { backgroundColor: "#dc2626" },
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
      </KeyboardAvoidingView>
    </>
  );
}
