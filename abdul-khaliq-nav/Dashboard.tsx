import { Text, View, Button } from "@gluestack-ui/themed";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";

import CustomDrawerContent from "./CustomDrawerContent";
import React from "react";
import RegisterBusiness from "../register_business/RegisterBusiness";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
       
      >
        <Text>Welcome in Home Screen</Text>
      </Button>
      {/* <Text>Welcome in Home Screen</Text> */}
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} >
        <Text>Welcome in Notifications</Text>
      </Button>
    </View>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  const dimensions = useWindowDimensions();
  return (
    
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="HomeScreen"
        screenOptions={{
          drawerType: dimensions.width >= 768 ? "permanent" : "front",
        }}
      >
        <Drawer.Screen name="HomeScreen" component={RegisterBusiness} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    
    
  );
}
