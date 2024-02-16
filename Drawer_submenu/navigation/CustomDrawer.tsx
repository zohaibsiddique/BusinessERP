import { LayoutAnimation, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { constant, drawerMenu } from "../constants/constants";
import Colors from "../constants/Colors";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";

import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import Icon from "../../components/Icons";
import {Text, Box, HStack, Pressable } from "@gluestack-ui/themed";

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const CustomDrawer = (props: Props) => {
  const { navigation } = props;
  const handleSubObjectClick = (subObject) => {
    navigation.navigate(subObject.label, { subObject });
  };
  const [menuIndex, setMenuIndex] = useState(-1);
  return (
    <Box>
      {/* profile header */}
      <Pressable onPress={() => navigation.navigate("Dashboard")}>
       <Box pl={"$3"} pb={"$3.5"} borderBottomColor="#f9f9f9" borderBottomWidth={"$2"} pt={"$4"}><Text size="2xl" fontWeight="$black">Business ERP</Text></Box>
      </Pressable>

      {/* Menu */}
      {drawerMenu.map((item, index) => {
        return (
          <Pressable
            $active-bg="#f4f4f4"
            $hover-bg="#f4f4f4"
            key={index}
            style={[styles.menu]}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.create(200, "easeInEaseOut", "opacity")
              );
              setMenuIndex(menuIndex === index ? -1 : index);
            }}
          >
            <Box style={styles.item}>
              <HStack>
                <Icon icon={item.icon} />
                <Text
                  style={[
                    styles.text,
                    {
                      color: menuIndex === index ? Colors.black : Colors.gray,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </HStack>
            </Box>
            {menuIndex === index && (
              <View
                style={{
                  borderRadius: constant.borderRadius,
                  backgroundColor: item.bg,
                }}
              >
                {item.menuList.map((subObject, index) => (
                  <Pressable
                    $active-bg="#fff"
                    $hover-bg="#f9f9f9"
                    key={index}
                    onPress={() => handleSubObjectClick(subObject)}
                  >
                    <Box style={styles.subMenu}>
                      <HStack>
                        <Icon icon={subObject.icon} />
                        <Text style={[styles.text]}>{subObject.title}</Text>
                      </HStack>
                    </Box>
                  </Pressable>
                ))}
              </View>
            )}
          </Pressable>
        );
      })}
    </Box>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: constant.SPACING,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  header: {
    padding: constant.SPACING,
    
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
  },
  name: {
    fontSize: constant.titleFontSize,
  },
  menu: {
    marginHorizontal: constant.SPACING / 1.7,
    marginVertical: constant.SPACING / 2.5,
    borderRadius: constant.borderRadius,
  },
  item: {
    paddingHorizontal: constant.SPACING / 1.5,
    paddingVertical: constant.SPACING / 2,
  },
  text: {
    fontSize: constant.textFontSize,
    paddingHorizontal: constant.SPACING,
  },
  subMenu: {
    marginLeft: constant.SPACING / 0.5,

    paddingVertical: constant.SPACING / 3,
  },

  spacer: {
    marginVertical: constant.SPACING,
    width: "90%",
    height: 1,
    backgroundColor: Colors.light,
    alignSelf: "center",
  },
});
