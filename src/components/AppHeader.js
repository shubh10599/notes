import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CFormInput,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMenu } from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import { logo } from "src/assets/brand/logo";
import "./breadcrumb.css";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4 pt-0">
      <CContainer fluid className=" navigation-bar">
        <CHeaderToggler
          className="ps-1 text-light"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="ms-3">
          <CFormInput
            type="search"
            className=" border-0 searchinputtext"
            size="sm"
            placeholder="Search"
          />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
