import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import Animated from "react-native-reanimated";

function CustomDrawerContent({ navigation,...rest }) {
  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
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
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Pressable
          onPress={() => {
            setShowPage2(!showPage2);
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Page Two</Text>
        </Pressable>
        <View style={{ padding: 10 }}>
          {showPage2 ? (
            <View>
              <Pressable
                onPress={() => {
                  navigation.navigate("Feed");
                }}
              >
                <Text style={{ paddingVertical: 10, fontSize: 16 }}> Feed</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Article");
                }}
              >
                <Text style={{ fontSize: 16 }}> Article</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
export default CustomDrawerContent;
