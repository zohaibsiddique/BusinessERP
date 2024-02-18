import { LayoutAnimation, View } from "react-native";
import React, { useState } from "react";
import { drawerMenu } from "../../components/constants";

import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";

import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import Icon from "../../components/Icons";
import { Text, Box, HStack, Pressable } from "@gluestack-ui/themed";

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
        <Box
          pl={"$3"}
          pb={"$3.5"}
          borderBottomColor="#f9f9f9"
          borderBottomWidth={"$2"}
          pt={"$4"}
        >
          <Text size="2xl" fontWeight="$black">
            Business ERP
          </Text>
        </Box>
      </Pressable>

      {/* Menu */}
      {drawerMenu.map((item, index) => {
        return (
          <Pressable
            $active-bg="$secondary100"
            $hover-bg="$secondary200"
            key={index}
            mt={"$2"}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.create(200, "easeInEaseOut", "opacity")
              );
              setMenuIndex(menuIndex === index ? -1 : index);
            }}
          >
            <Box
              paddingVertical={"$1.5"}
              ml={"$3"}
              borderBottomWidth={"$1"}
              borderBottomColor="$white"
            >
              <HStack space="xs" alignItems="center" mb={"-$2"}>
                <Icon icon={item.icon} />
                <Text>{item.title}</Text>
              </HStack>
            </Box>
            {menuIndex === index && (
              <View>
                {item.menuList.map((subObject, index) => (
                  <Pressable
                    $active-bg="$secondary0"
                    $hover-bg="$white"
                    $hover-borderBottomColor="$secondary900"
                    key={index}
                    onPress={() => handleSubObjectClick(subObject)}
                  >
                    <Box
                      borderBottomWidth={"$1"}
                      borderColor="$white"
                      paddingVertical={"$1.5"}
                      ml={"$8"}
                    >
                      <HStack space="xs" alignItems="center">
                        <Icon icon={subObject.icon} />
                        <Text>{subObject.title}</Text>
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
