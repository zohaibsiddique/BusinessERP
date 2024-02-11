// DynamicSubObjectScreen.js
import React from "react";
import { View, Text } from "react-native";

const DynamicSubObjectScreen = ({ route }) => {
  const { subObject } = route.params;

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
