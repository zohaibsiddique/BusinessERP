// DynamicSubObjectScreen.js
import React from "react";
import { View, Text } from "react-native";
import Warranties from "../../register_business/Warranties";
import RegisterBusiness from "../../register_business/RegisterBusiness";
import { Icons } from "../components/Icons";
import Colors from "../../DrawerSrc/constants/Colors";

const DynamicSubObjectScreen = ({ route }) => {
  const { subObject } = route.params;
//   const drawerMenu = [
//     {
//       title: "Products",
//       bg: Colors.menu1,
//       type: Icons.Feather,
//       icon: "settings",

//       menuList: [
//         {
//           route: "RegisterBusiness",
//           label: "RegisterBusiness",
//           type: Icons.AntDesign,
//           icon: "user",
//           component: RegisterBusiness,
//         },
//         {
//           route: "Warranties",
//           label: "Warranties",
//           type: Icons.AntDesign,
//           icon: "user",
//           component: Warranties,
//         },
//       ],
//     },
//   ];
  return (
    <View>
      <Text>{subObject.route}</Text>
      {/* Additional content based on subObject */}
    </View>
  );
};

export default DynamicSubObjectScreen;
