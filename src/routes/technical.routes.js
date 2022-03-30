import Dashboard from "../dashboard.js/Dashboard";

const technicalRoutes = [
  {
    name: "Dashboard",
    path: "/",
    element: <Dashboard />
  },
  {
    name: "Configuration",
    showSubRoute:false,
    subRoute: [
      {
        name:"Region",
        path:"/configuration/region",
        element:"<Region />"
      },
      {
        name:"Zone",
        path:"/configuration/zone",
        element:"<Zone />"
      },
      {
        name:"Area",
        path:"/configuration/area",
        element:"<Area />"
      },
      {
        name:"Users",
        path:"/configuration/user",
        element:"<User />"
      }
    ]
  }
];

export default technicalRoutes;
