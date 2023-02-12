import React from "react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilApplications } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  {
    component: CNavGroup,
    name: "BASE",
    to: "/",
    icon: <CIcon customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Notes",
        to: "/notes",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Category",
        to: "/notes/category",
        icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
      },
    ], // ahi nai aave kem ke ema sub rite hovo joie.
  },
];

export default _nav;
