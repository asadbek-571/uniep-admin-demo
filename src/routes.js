import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  MdPerson,
  MdHome,
  MdLock,
   MdSupervisedUserCircle,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/qabul";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import UserTable from "./views/admin/default/components/UserTable";

const routes = [
  {
    name: "Imtihon Javoblari",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Qabul Ro'yxati",
    layout: "/admin",
    icon: <Icon as={MdSupervisedUserCircle} width='20px' height='20px' color='inherit' />,
    path: "/user-table",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "User Table",
    layout: "/get",
    path: "/user",
    component: UserTable,
  }
];

export default routes;
