import {
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import React, { useState } from "react";
import { Container } from "../components/Container";
import { Row } from "../components/Row";
import { constant, drawerMenu } from "../constants/constants";
import Colors from "../constants/Colors";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import Styles from "../common/Styles";
import { DrawerItemList } from "@react-navigation/drawer";
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import Icon from "../components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable } from "@gluestack-ui/themed";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
    <Container>
      {/* profile header */}
      <Pressable onPress={() => navigation.navigate("Dashboard")}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Habib</Text>
            <Text>Software Engineer</Text>
          </View>
        </View>
      </Pressable>
      {/* DrawerList */}
      <DrawerItemList {...props} />
      <View style={styles.spacer} />
      {/* Menu */}
      {drawerMenu.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={[styles.menu, { backgroundColor: item.bg + "99" }]}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.create(200, "easeInEaseOut", "opacity")
              );
              setMenuIndex(menuIndex === index ? -1 : index);
            }}
          >
            <Row style={styles.item}>
              <Icon type={item.type} name={item.icon} size={22} />

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
            </Row>
            {menuIndex === index && (
              <View
                style={{
                  borderRadius: constant.borderRadius,
                  backgroundColor: item.bg,
                }}
              >
                {item.menuList.map((subObject, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSubObjectClick(subObject)}
                  >
                    <Row style={styles.subItem}>
                      <Icon type={item.type} name={subObject.icon} size={18} />
                      <Text
                        style={[
                          styles.text,
                          {
                            color:
                              menuIndex === index ? Colors.black : Colors.gray,
                          },
                        ]}
                      >
                        {subObject.label}
                      </Text>
                    </Row>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </Container>
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
    ...Styles.rowView,
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
    paddingVertical: constant.SPACING / 1.2,
  },
  subItem: {
    paddingHorizontal: constant.SPACING / 2,
    paddingVertical: constant.SPACING / 2,
    marginLeft: 40,
   
  },
  text: {
    fontSize: constant.textFontSize,
    paddingHorizontal: constant.SPACING,
  },
  subMenu: {
    paddingHorizontal: constant.SPACING,
    paddingVertical: constant.SPACING / 1.5,
  },
  spacer: {
    marginVertical: constant.SPACING,
    width: "90%",
    height: 1,
    backgroundColor: Colors.light,
    alignSelf: "center",
  },
});

