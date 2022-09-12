import React from "react";
import { useLocation } from "react-router-dom";

import routes from "../routes";

import {
  CBreadcrumb,
  CBreadcrumbItem,
  CButton,
  CCollapse,
  CContainer,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import "./breadcrumb.css";

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };

  const getBreadcrumbs = (location) => {
    const breadcrumbs = [];
    location.split("/").reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      const routeName = getRouteName(currentPathname, routes);
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);

  return (
    <CNavbar
      expand="lg"
      colorScheme="light"
      className="w-100 text-light navigationBar"
    >
      <CContainer fluid>
        <CCollapse className="navbar-collapse">
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" className="text-light">
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              {breadcrumbs.map((breadcrumb, index) => {
                return (
                  <CNavLink
                    href="#"
                    className="text-light"
                    {...(breadcrumb.active
                      ? { active: true }
                      : { href: breadcrumb.pathname })}
                    key={index}
                  >
                    {breadcrumb.name}
                  </CNavLink>
                );
              })}
            </CNavItem>
          </CNavbarNav>
          <CFormInput
            type="search"
            className="me-2 w-50"
            placeholder="Search"
          />
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default React.memo(AppBreadcrumb);
