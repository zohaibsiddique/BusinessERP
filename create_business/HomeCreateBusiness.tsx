import {
  Box,
  Button,
  ButtonText,
  HStack,
  ScrollView,
  useMediaQuery
} from "@gluestack-ui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BusinessInformation from "./BusinessInformation";
import BusinessSettings from "./BusinessSettings";
import OwnerInformation from "./OwnerInformation";
import { Platform } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";


export default function HomeCreateBusiness() {
  const Tab = createMaterialTopTabNavigator();

  const [isLargeScreen] = useMediaQuery({
    minWidth: 720
  });

  return (
    <ScrollView>
        <Box  width = {isLargeScreen ?  "$1/2" : "$full" } m="auto">
          <h4>Create Business</h4>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#dc2626",
                tabBarInactiveTintColor: "#525252",
                tabBarIndicatorStyle: { backgroundColor: "#dc2626" },
                tabBarLabelStyle: {
                  fontSize: 9,
                  fontWeight: "bold"
                },
              })}
            >
             <Tab.Screen
                name="business_information"
                component={BusinessInformation}
                options={{ title: "Business Info"}}
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
          </NavigationContainer>

          <HStack justifyContent="space-between">
            <Button
              width="50%"
              size="xs"
              variant="outline"
              sx={{ borderRadius: "$none", borderWidth: "$0" }}
            >
              <ButtonText  sx={{ color: "$backgroundLight700" }}>
                CANCEL
              </ButtonText>
            </Button>
            <Button size="xs" width="50%" bg="$red600" sx={{ borderRadius: "$none" }}>
              <ButtonText>SAVE</ButtonText>
            </Button>
          </HStack>
        </Box>
        
      </ScrollView>
  );
}
