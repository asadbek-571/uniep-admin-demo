import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  MdPerson,
  MdHome,
  MdLock,
   MdSupervisedUserCircle,
} from "react-icons/md";

// Admin Imports
import UserTable from "./views/admin/default/components/UserTable";
import SignInCentered from "./views/auth/signIn";

const hideRoutes = [
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default hideRoutes;
