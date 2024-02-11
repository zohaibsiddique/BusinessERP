import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { IconSize } from "../constants/constants";
export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  FontAwesomeIcon,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};

interface IconProps {
  type: Function;
  name: string;
  color?: string;
  size?: number;
  style?: object;
}

const Icon = ({ type, name, color, size, style }: IconProps) => {
  const fontSize = IconSize;
  const Tag = type;
  if (type) {
    return (
      <Tag name={name} size={size || fontSize} color={color} style={style} />
    );
  }
  return null;
};

export default Icon;
