
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();


// export const  SubMenu = drawerMenu.map((item, index) => {
//     return (
//       <Drawer.Screen
//         key={index}
//         name={item.menuList.label}
//         component={item.component}
//         options={{
//           item,
//           drawerIcon: ({ color, size, focused }) => (
//             <Icon type={item.type} name={item.icon} size={size} color={color} />
//           ),
//         }}
//       />
//     );
//   });
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import Animated from "react-native-reanimated";
import { drawerMenu } from "../constants/constants";

function SubMenu({ navigation, ...rest }) {
  const [showPage1, setShowPage1] = useState(false);
  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{ paddingLeft: 10 }}>
        <Pressable
          onPress={() => {
            setShowPage1(!showPage1);
          }}
        >

          <Text style={{ fontSize: 20, fontWeight: "500" }}>Page One</Text>
        </Pressable>
        <View style={{ padding: 10 }}>
          {showPage1 ? (
            <View>
              <Pressable
                onPress={() => {
                  navigation.navigate("HomeScreen");
                }}
              >
                <Text style={{ paddingVertical: 10, fontSize: 16 }}>
                  {" "}
                  Home Screen
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Notifications");
                }}
              >
                <Text style={{ fontSize: 16 }}> Notifications</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
}
export default SubMenu;


