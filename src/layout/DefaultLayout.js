import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";

const DefaultLayout = () => {
  const state = useSelector((state) => state.reducer);
  // console.log(state.sidebarShow);

  // const [FindNote, setFindNote] = useState("");
  const searchInput = (value) => {
    console.log(value);
    // setFindNote(value);
  };

  return (
    <div>
      {state.sidebarShow ? <AppSidebar /> : ""}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader searchInput={searchInput} />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
