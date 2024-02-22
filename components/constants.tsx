import {
  faAddressBook,
  faArrowCircleUp,
  faCalendarCheck,
  faCalendarDay,
  faCircleArrowDown,
  faCopyright,
  faCubes,
  faLayerGroup,
  faOm,
  faRegistered,
  faTruck,
  faTruckPickup,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../home/Dashboard";
import Brands from "../product_brands/Brands";
import RegisterBusiness from "../register_business/RegisterBusiness";
import Warranties from "../product_warranties/Warranties";

import Categories from "../product_categories/Categories";
import Units from "../product_units/Units";
import PriceGroup from "../product_prices/PriceGroup";

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
    route: "Dashboard",
    label: "Dashboard",

    component: PriceGroup,
  },
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
  {
    route: "Categories",
    label: "Categories",

    component: Categories,
  },
  {
    route: "Units",
    label: "Units",

    component: Units,
  },
];

export const drawerMenu = [
  {
    title: "Products",
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
      {
        title: "Categories",
        route: "Categories",
        label: "Categories",
        icon: faLayerGroup,
        component: Categories,
      },
      {
        title: "Units",
        route: "Units",
        label: "Units",
        icon: faCalendarDay,
        component: Units,
      },
    ],
  },
  {
    title: "Purchases",

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
