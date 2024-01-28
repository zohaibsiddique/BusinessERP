import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import React from "react";
import RegisterBusiness from "./register_business/RegisterBusiness";
import SignUp from "./auth/Signup";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./home/Dashboard";

const Stack = createNativeStackNavigator();

//TODO: Extract styles, fonts settings, fonts for multi language, multi langague settings 
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      
       <NavigationContainer>
          <MyStack/>
       </NavigationContainer>
      
    </GluestackUIProvider>
  );
}


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={RegisterBusiness} 
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "white"
          }
        }}
      />
      <Stack.Screen name="RegisterBusiness" component={RegisterBusiness} 
         options={{
          title: "Register Business",
          headerStyle: {
            backgroundColor: "white"
          }
        }}
      />
       <Stack.Screen name="Dashboard" component={Dashboard} 
         options={{
          title: "Dashboard",
          headerStyle: {
            backgroundColor: "white"
          }
        }}
      />
    </Stack.Navigator>
  );
}
