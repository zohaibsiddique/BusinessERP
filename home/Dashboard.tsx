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
        <Box mt="$2" bg="white" borderWidth="$1" borderColor="lightgray" p="$2" width="30%" marginRight="auto" marginLeft="auto">
          
          <h1>Signup</h1>
          <Link>Already have an account?</Link>
          <Divider mt="$4" mb="$4"/>
  
          <Box>
            <FormInput
              type={"text"}
              isRequired={true}
              label={"Email address"}
              placeholder={"Email address"}
              error={"Please specify your Email address"}
              disabled={false}
              focus={null}
              responsiveWidth="$full"
            />
                      
            <FormInput
              type={"text"}
              isRequired={false}
              label={"First name"}
              placeholder={"First name"}
              error={"Please specify your First name"}
              disabled={false}
              focus={null}
              responsiveWidth="$full"
            />
  
            <FormInput
              type={"text"}
              isRequired={false}
              label={"Last name"}
              placeholder={"Last name"}
              error={"Please specify your Last name"}
              disabled={false}
              focus={null}
              responsiveWidth="$full"
            />
            
            <PasswordInput
              isRequired={false}
              label={"Password"}
              placeholder={"Password"}
              error={"Please specify Password"}
              disabled={false}
              focus={null}
              responsiveWidth="$full"
            />
            <Button onPress={() => navigation.navigate("RegisterBusiness")}
               mt="$6" size="sm" width="100%" bg="$red600" sx={{ borderRadius: "$none" }}>
                <ButtonText>START</ButtonText>
            </Button>
          </Box>
        </Box>
    );
  }
  