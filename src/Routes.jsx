import React from "react";
import { useRoutes } from "react-router-dom";

import Desktop from "./pages/Desktop";

 import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
let element =useRoutes([

{ path: "*", element: <NotFound /> },
{
path: "/",
element: <Desktop />,
},
]);
return element;
};
export default ProjectRoutes;