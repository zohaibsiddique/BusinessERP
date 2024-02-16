import {
  faAddressBook,
  faArrowCircleUp,
  faCalendarCheck,
  faCircleArrowDown,
  faCopyright,
  faCubes,
  faRegistered,
  faTruck,
  faTruckPickup,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../../home/Dashboard";
import Brands from "../../register_business/Brands";
import RegisterBusiness from "../../register_business/RegisterBusiness";
import Warranties from "../../register_business/Warranties";

import Colors from "./Colors";

export const constant = {
  SPACING: 16,
  borderRadius: 5,
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
  size: 24,
};
export const ScreensArray = [
  {
    route: "Brands",
    label: "Brands",

    component: Brands,
  },
  {
    route: "Warranties",
    label: "Warranties",

    component: Warranties,
  },
  {
    route: "RegisterBusiness",
    label: "RegisterBusiness",

    component: RegisterBusiness,
  },
];

export const drawerMenu = [
  {
    title: "Products",
    bg: Colors.transparant,
    icon: faCubes,

    menuList: [
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",
        icon: faRegistered,
        component: RegisterBusiness,
      },
      {
        title: "Brands",
        route: "Brands",
        label: "Brands",
        icon: faCopyright,
        component: Brands,
      },
      {
        title: "Warranties",
        route: "Warranties",
        label: "Warranties",
        icon: faCalendarCheck,
        component: Warranties,
      },
    ],
  },
  {
    title: "Purchases",
    bg: Colors.transparant,
    icon: faCircleArrowDown,

    menuList: [
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",
        icon: faRegistered,
        component: RegisterBusiness,
      },
      {
        title: "Brands",
        route: "Brands",
        label: "Brands",
        icon: faRegistered,
        component: Brands,
      },
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",
        icon: faRegistered,
        component: RegisterBusiness,
      },
    ],
  },
  {
    title: "Sell",
    bg: Colors.transparant,

    icon: faArrowCircleUp,

    menuList: [
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
      {
        title: "Brands",
        route: "Brands",
        label: "Brands",

        icon: faRegistered,
        component: Brands,
      },
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
    ],
  },
  {
    title: "User Management",
    bg: Colors.transparant,

    icon: faUsers,

    menuList: [
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
      {
        title: "Brands",
        route: "Brands",
        label: "Brands",

        icon: faRegistered,
        component: Brands,
      },
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
    ],
  },
  {
    title: "Contacts",
    bg: Colors.transparant,

    icon: faAddressBook,

    menuList: [
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
      {
        title: "Brands",
        route: "Brands",
        label: "Brands",

        icon: faRegistered,
        component: Brands,
      },
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
    ],
  },
  {
    title: "Stock Transfers",
    bg: Colors.transparant,

    icon: faTruck,

    menuList: [
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
      {
        title: "Brands",
        route: "Brands",
        label: "Brands",

        icon: faRegistered,
        component: Brands,
      },
      {
        title: "Register Business",
        route: "RegisterBusiness",
        label: "RegisterBusiness",

        icon: faRegistered,
        component: RegisterBusiness,
      },
    ],
  },
];
