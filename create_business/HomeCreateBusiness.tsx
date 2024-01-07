import { Box, Button, ButtonText, HStack } from "@gluestack-ui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BusinessInformation from "./BusinessInformation";
import BusinessSettings from "./BusinessSettings";
import OwnerInformation from "./OwnerInformation";

export default function HomeCreateBusiness() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <Box
        h="$full"
        sx={{
          _web: { w: "$1/2", mr: "$1/4", ml: "$1/4" },
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#dc2626",
            tabBarInactiveTintColor: "#525252",
            tabBarIndicatorStyle: { backgroundColor: "#dc2626" },
            tabBarLabelStyle: { fontFamily: "habibFont",fontSize:14 },
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
            rounded={"$none"}
            borderWidth={"$0"}
            bg="$white"
          >
            <ButtonText color="$backgroundLight700">CANCEL</ButtonText>
          </Button>
          <Button width="50%" bg="$red600" rounded={"$none"}>
            <ButtonText>SAVE</ButtonText>
          </Button>
        </HStack>
      </Box>
    </>
  );
}
