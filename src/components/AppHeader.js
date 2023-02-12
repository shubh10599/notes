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
import { searchCategory, toggleSidebar } from "src/redux/actions";
import { useState } from "react";
// import { search } from "core-js/fn/symbol";

const AppHeader = ({ searchInput }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  console.log(state);
  const [ToggleSideBar, setToggleSideBar] = useState(false);
  // const [SearchQuery, setSearchQuery] = useState("");

  const showSideBar = () => {
    // console.log("hello");
    setToggleSideBar(!ToggleSideBar);
    // console.log(ToggleSideBar);
    dispatch(toggleSidebar(ToggleSideBar));
  };

  return (
    <CHeader position="sticky" className="mb-4 pt-0">
      <CContainer fluid className=" navigation-bar">
        <CHeaderToggler
          className="ps-1 text-light"
          // onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
          onClick={showSideBar}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
      </CContainer>
      <CHeaderDivider />
      <CContainer>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
