import Login from "../login/Login";

const authRoutes = [
  {
    name: "Login",
    path: "/login",
    element: <Login />
  },
  {
    name: "Users",
    path: "/users",
    element: "<Login />"
  }
];

export default authRoutes;
