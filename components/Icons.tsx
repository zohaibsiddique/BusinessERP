import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// interface IconProps {
//   type: Function;
//   name: string;
//   color?: string;
//   size?: number;
//   style?: object;
// }

const Icon = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
