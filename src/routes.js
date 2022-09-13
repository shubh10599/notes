import React from "react";

const Notes = React.lazy(() => import("./views/Notes/index"));
const NotesCategory = React.lazy(() => import("./views/Notes/Category"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/notes", name: "Notes", element: Notes },
  { path: "/notes/category", name: "Category", element: NotesCategory },
];

export default routes;
