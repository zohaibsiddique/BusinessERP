import { Route } from "lucide-react-native";
import Dashboard from "../../home/Dashboard";
import RegisterBusiness from "../../register_business/RegisterBusiness";
import Warranties from "../../register_business/Warranties";
import { Icons } from "../components/Icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Colors from "./Colors";

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
    route: "Home",
    label: "Home",
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
];

export const drawerMenu = [
  {
    title: "Products",
    bg: Colors.menu1,
    type: Icons.Feather,
    icon: "settings",
    route: "Settings",
    menuList: [
      {
        route: "Home",
        label: "Home",
        type: Icons.Feather,
        icon: "home",
        component: RegisterBusiness,
      },
      {
        route: "Dashboard",
        label: "Home",
        type: Icons.Feather,
        icon: "home",
        component: Dashboard,
      },
    ],
  },
  {
    title: "Todo's",
    bg: Colors.menu2,
    type: Icons.Feather,
    icon: "check-square",
    route: "Todo",
    menuList: [{ title: "Eat" }, { title: "Code" }, { title: "Sleep" }],
  },
  {
    title: "Projects",
    bg: Colors.menu3,
    type: Icons.Octicons,
    icon: "project",
    route: "Project",
    menuList: [
      { title: "Portfolio" },
      { title: "Note-APP" },
      { title: "RN-Ui" },
    ],
  },
];
