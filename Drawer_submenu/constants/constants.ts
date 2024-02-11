import Dashboard from "../../home/Dashboard";
import RegisterBusiness from "../../register_business/RegisterBusiness";
import Warranties from "../../register_business/Warranties";
import { Icons } from "../components/Icons";
import Colors from "./Colors";

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
};

export const DummyTable = [
  {
    name: "Miranda Mcleod",
    phone: "1-424-311-2211",
    email: "duis.sit.amet@protonmail.org",
  },
  {
    name: "Carl Marquez",
    phone: "(813) 452-3904",
    email: "ullamcorper.viverra@google.org",
  },
  {
    name: "Yael Gonzalez",
    phone: "(103) 268-3828",
    email: "litora.torquent@aol.org",
  },
  {
    name: "Samantha Sampson",
    phone: "(274) 158-8319",
    email: "sed@outlook.couk",
  },
  {
    name: "Cameron Crosby",
    phone: "1-316-554-1668",
    email: "in.faucibus@outlook.org",
  },
  {
    name: "Erasmus Sheppard",
    phone: "1-201-294-0305",
    email: "aenean@icloud.net",
  },
  {
    name: "Julian Byrd",
    phone: "1-657-928-1782",
    email: "sed.et.libero@aol.org",
  },
  {
    name: "Ishmael Padilla",
    phone: "(873) 827-9413",
    email: "dis.parturient.montes@hotmail.net",
  },
  {
    name: "Paki Larson",
    phone: "(727) 195-6557",
    email: "in.ornare@yahoo.ca",
  },
  {
    name: "Russell Ward",
    phone: "(663) 446-9474",
    email: "aliquet.phasellus@icloud.org",
  },
  {
    name: "Erasmus Sheppard",
    phone: "1-201-294-0305",
    email: "aenean@icloud.net",
  },
  {
    name: "Julian Byrd",
    phone: "1-657-928-1782",
    email: "sed.et.libero@aol.org",
  },
  {
    name: "Ishmael Padilla",
    phone: "(873) 827-9413",
    email: "dis.parturient.montes@hotmail.net",
  },
  {
    name: "Paki Larson",
    phone: "(727) 195-6557",
    email: "in.ornare@yahoo.ca",
  },
  {
    name: "Russell Ward",
    phone: "(663) 446-9474",
    email: "aliquet.phasellus@icloud.org",
  },
];

export const IconSize = {
  size: 22,
};
export const ScreensArray = [
  {
    route: "Warranties",
    label: "Warranties",
    type: Icons.Feather,
    icon: "home",
    component: Warranties,
  },
  {
    route: "RegisterBusiness",
    label: "RegisterBusiness",
    type: Icons.Feather,
    icon: "home",
    component: RegisterBusiness,
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
