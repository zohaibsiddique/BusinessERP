import { Box, Button, ButtonText, HStack } from "@gluestack-ui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BusinessInformation from "./BusinessInformation";
import BusinessSettings from "./BusinessSettings";
import OwnerInformation from "./OwnerInformation";


export default function HomeCreateBusiness() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <Box>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#dc2626",
            tabBarInactiveTintColor: "#525252",
            tabBarIndicatorStyle: { backgroundColor: "#dc2626" },
            tabBarLabelStyle: { fontFamily: "habibFont" },
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
      </Box>
    </>
  );
}
