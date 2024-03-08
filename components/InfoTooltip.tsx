// Import necessary components and icons
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function InfoTooltip({ infoText }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Pressable
      style={styles.container}
      onPress={() => setIsVisible(!isVisible)}
    >
      <Icon name="info-circle" size={20} color="#3498db" />
      {isVisible && (
        <View style={styles.tooltipContainer}>
          <Text style={styles.tooltipText}>{infoText}</Text>
        </View>
      )}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  tooltipContainer: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    position: "absolute",
    top: 30, // Adjust the top position as needed
    left: 10, // Adjust the left position as needed
  },
  tooltipText: {
    color: "#fff",
  },
});
