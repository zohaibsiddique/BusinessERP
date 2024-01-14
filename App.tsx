import { GluestackUIProvider, ScrollView,Box,
  Button,
  ButtonText,
  HStack, 
  useMediaQuery} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import React from "react";
import RegisterBusiness from "./register_business/RegisterBusiness";
import SignUp from "./auth/Signup";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
        <SignUp/>
    </GluestackUIProvider>
  );
}
