import React from "react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilApplications } from "@coreui/icons";
import { CNavItem } from "@coreui/react";

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: "Notes",
    to: "/",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Category",
    to: "/notes/category",
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
  },
];

export default _nav;
