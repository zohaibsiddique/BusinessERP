import {
    Box,
    Button,
    ButtonText,
    Center,
    HStack,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    VStack,
    Text, 
    useMediaQuery,
    View,
    Divider,
    Link,
  } from "@gluestack-ui/themed";
  import FormInput from "../components/FormInput";
  import React from "react";
  import DatePicker from "../components/DatePicker";
  import SearchDropDown from "../components/SearchDropDown";
  import { GetCountryList, GetCurrencyList, GetStockAccountMethodList, GetTimeZoneList, GetYearList } from "../utils/Utils";
  import PasswordInput from "../components/PasswordInput";
  import { useNavigation } from "@react-navigation/native";
  
  export default function Dashboard() {
  
    const [isLargeScreen] = useMediaQuery({
      minWidth: 720
    });
  
    const navigation = useNavigation()
  
    return (
        <Box mt="$2" bg="white" borderWidth="$1" borderColor="lightgray" p="$2" width="60%" marginRight="auto" marginLeft="auto">
          
          <Text>Welcome to Dashboard</Text>

          <Button onPress={() => navigation.navigate('Signup')}
             mt="$6" size="sm" width="30%" bg="$red600" sx={{ borderRadius: "$none" }}>
              <ButtonText>SignOut</ButtonText>
          </Button>
        </Box>
    );
  }
  