import { Route } from "lucide-react-native";
import Dashboard from "../../home/Dashboard";
import RegisterBusiness from "../../register_business/RegisterBusiness";
import Warranties from "../../register_business/Warranties";
import { Icons } from "../components/Icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Colors from "./Colors";
import DetailsScreen from "../../DrawerSrc/screens/shop/DetailsScreen";
import DatePicker from "../../components/DatePicker";
import ProductsList from "../../DrawerSrc/screens/shop/ProductsList";

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
  IconSize: 24,
};

export const ScreensArray = [
  {
    route: "RegisterBusiness",
    label: "RegisterBusiness",
    type: Icons.Feather,
    icon: "home",
    component: RegisterBusiness,
  },
  {
    route: "Profile",
    label: "Profile",
    type: Icons.AntDesign,
    icon: "user",
    component: Dashboard,
  },
  {
    route: "Warranties",
    label: "Warranties",
    type: Icons.AntDesign,
    icon: "user",
    component: Warranties,
  },
];

export const drawerMenu = [
  {
    title: "Products",
    bg: Colors.menu1,
    type: Icons.Feather,
    icon: "settings",

    menuList: [
      {
        route: "Warranties",
        label: "Warranties",
        type: Icons.AntDesign,
        icon: "user",
        component: Warranties,
      },
      {
        route: "RegisterBusiness",
        label: "RegisterBusiness",
        type: Icons.Feather,
        icon: "home",
        component: RegisterBusiness,
      },
    ],
  },
  {
    title: "Todo's",
    bg: Colors.menu2,
    type: Icons.Feather,
    icon: "check-square",
    route: "Todo",
    menuList: [
      {
        route: "RegisterBusiness",
        label: "RegisterBusiness",
        type: Icons.Feather,
        icon: "home",
        component: RegisterBusiness,
      },
      {
        route: "Profile",
        label: "Profile",
        type: Icons.AntDesign,
        icon: "user",
        component: Dashboard,
      },
    ],
  },
  {
    title: "Projects",
    bg: Colors.menu3,
    type: Icons.Octicons,
    icon: "map",
    route: "Project",
    menuList: [
      {
        route: "Warranties",
        label: "Warranties",
        type: Icons.FontAwesome5,
        icon: "school",
        component: Warranties,
      },
    ],
  },
];
