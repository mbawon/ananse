import { createSlice } from "@reduxjs/toolkit";
import Dashboard from "../dashboard.js/Dashboard";

const adminRouteSlice = createSlice({
    name: "adminRoute",
    initialState: {
        admins: [
            {
                name: "Dashboard",
                path: "/",
                element: <Dashboard />
            },
            {
                name: "Configuration",
                isActive: true,
                subRoute: [
                    {
                        name: "Region",
                        path: "/configuration/region",
                        element: "<Region />"
                    },
                    {
                        name: "Zone",
                        path: "/configuration/zone",
                        element: "<Zone />"
                    },
                    {
                        name: "Area",
                        path: "/configuration/area",
                        element: "<Area />"
                    },
                    {
                        name: "Users",
                        path: "/configuration/user",
                        element: "<User />"
                    }
                ]
            }
        ]
    },
    reducers: {
        setAdminRoutes: (state, action) => {
            state.admins[Math.abs(state.admins.indexOf(action.payload))].isActive = !state.admins[Math.abs(state.admins.indexOf(action.payload))].isActive
        }
    },
});

export const { setAdminRoutes } = adminRouteSlice.actions;

export const selectAdminRoutes = (state) => state.adminRoute.admins;

export default adminRouteSlice.reducer;

