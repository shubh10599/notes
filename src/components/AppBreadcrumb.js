import React from "react";
import { useLocation } from "react-router-dom";

import routes from "../routes";

import { CBreadcrumb, CBreadcrumbItem, CFormInput } from "@coreui/react";
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
    <CBreadcrumb className="m-0 ms-2">
      <div className="d-flex justify-content-center align-items-center">
        <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <CBreadcrumbItem
              {...(breadcrumb.active
                ? { active: true }
                : { href: breadcrumb.pathname })}
              key={index}
            >
              {breadcrumb.name}
            </CBreadcrumbItem>
          );
        })}
        {/* <CBreadcrumb className="ml-2">
          <CFormInput
            type="search"
            className="me-2 border-0 searchinputtext"
            size="sm"
            placeholder="Search"
          />
        </CBreadcrumb> */}
      </div>
    </CBreadcrumb>
  );
};

export default React.memo(AppBreadcrumb);
