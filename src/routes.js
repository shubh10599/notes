import React from "react";

const Notes = React.lazy(() => import("./views/Notes/index"));
const NotesCategory = React.lazy(() => import("./views/Notes/Category"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  // { path: "/note", name: "base", exact: true },
  { path: "/notes", name: "Notes", element: Notes },
  {
    path: "/notes/category",
    name: "Category",
    element: NotesCategory,
    // value: { value },
  },
];
// console.log(value);

export default routes;
