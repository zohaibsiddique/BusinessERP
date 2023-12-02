import { Button, ButtonText, HStack, ScrollView } from "@gluestack-ui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BusinessInformation from "./BusinessInformation";
import BusinessSettings from "./BusinessSettings";
import OwnerInformation from "./OwnerInformation";

export default function HomeCreateBusiness() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <ScrollView>
        <Tab.Navigator>
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
      </ScrollView>
      

      <HStack justifyContent="space-between">
        <Button width="50%" variant="outline">
          <ButtonText>CANCEL</ButtonText>
        </Button>
        <Button width="50%">
          <ButtonText>SAVE</ButtonText>
        </Button>
      </HStack>
    </>
  );
}
