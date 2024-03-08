import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScreensArray } from "../../components/constants";

import CustomDrawer from "./CustomDrawer";
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: {width: 240},
        drawerActiveBackgroundColor: "green",
        drawerItemStyle: {borderRadius: 10},
        drawerActiveTintColor: "red",
        drawerLabelStyle: {fontSize: 24, marginHorizontal: 30},
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {ScreensArray.map((item, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              title: "",
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default DrawerNav;


