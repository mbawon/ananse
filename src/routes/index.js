import Area from "../area/Area";
import Dashboard from "../dashboard.js/Dashboard";
import Location from "../location/Location";
import Business from "../business/Potential";
import Region from "../region/Region";
// import Settings from "../settings/Settings";
import User from "../user/User";
import Zone from "../zone/Zone";
import Conversion from "../business/Conversion";
import Team from "../team/Team";

const technicalRoutes = [
    {
        name: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    {
        name: "Assigned Locations",
        path: "/locations",
        element: <Location />
    },
    {
        name: "Potentials",
        path: "/potentials",
        element: <Business />
    },
    {
        name: "Conversions",
        path: "/conversions",
        element: <Conversion />
    },
    {
        name: "Teams",
        path: "/teams",
        element: <Team />
    },
    // {
    //     name: "Report",
    //     path: "/report",
    //     element: "<Report />"
    // },
    {
        name: "Settings",
        showSubRoute: false,
        subRoute: [
            {
                name: "Regions",
                path: "/configuration/region",
                element: <Region />
            },
            {
                name: "Zones",
                path: "/settings/zone",
                element: <Zone />
            },
            {
                name: "Areas",
                path: "/settings/area",
                element: <Area />
            }
        ]
    },
    {
        name: "Users",
        path: "/users",
        element: <User />
    }
];

export default technicalRoutes;
