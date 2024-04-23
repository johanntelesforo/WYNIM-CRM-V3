import { createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import DashboardLayout from "./components/pages/DashboardLayout";
import ProgramsAndSchools from "./components/pages/ProgramsAndSchools";
import AdminData from "./components/pages/AdminData";

export const Routes = {
    login: "/",
    register: "/register",
    admin: {
        dashboard: "/admin",
        programsandschools: "/admin/programsandschools",
        addanadmin: '/admin/addanadmin'
    }
}

const router = createBrowserRouter([
    {
        index: true,
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/admin",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "programsandschools",
                element: <ProgramsAndSchools />
            },
            {
                path: "addanadmin",
                element: <AdminData />
            },

        ]
    }
]);

export default router;