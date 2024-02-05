import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScreensArray, constant, drawerMenu } from "../constants/constants";
import Colors from "../constants/Colors";
import CustomDrawer from "./CustomDrawer";
import Icon from "../components/Icons";
import Warranties from "../../register_business/Warranties";
import CustomDrawerContent from "../../abdul-khaliq-nav/CustomDrawerContent";
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: Colors.primary,
        drawerItemStyle: styles.drawerItemStyles,
        drawerActiveTintColor: Colors.black,
        drawerLabelStyle: styles.drawerLabelStyles,
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
              drawerIcon: ({ color, size, focused }) => (
                <Icon
                  type={item.type}
                  name={item.icon}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        );
      })}
     
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  drawerStyle: {
    width: 240,
  },
  drawerItemStyles: {
    borderRadius: constant.borderRadius,
  },
  drawerLabelStyles: {
    fontSize: constant.textFontSize,
    marginHorizontal: -constant.SPACING,
  },
});
