import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Authentication/LogIn/LogIn";
import Register from "../Authentication/Register/Register";
import NeedVolunteer from "../Pages/NeedVolunteer/NeedVolunteer";
import MyProfile from "../Pages/MyProfile/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddVolunteer from "../Pages/AddVolunteer/AddVolunteer";
import VolunteerNeedPostDetails from "../Pages/VolunteerNeedPostDetails/VolunteerNeedPostDetails";
import BeVolunteer from "../Pages/BeVolunteer/BeVolunteer";
import ManageMyPost from "../Pages/ManageMyPost/ManageMyPost";
import Update from "../Pages/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import GoDashboard from "../DashboardRelated/GoDashboard/GoDashboard";

let router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/need',
                element: <NeedVolunteer></NeedVolunteer>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                // loader:({params})=> fetch(`${import.meta.env.VITE_BASE_URL}/updateitem/${params.id}`)
            },
            {
                path: '/myprofile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/addvolunteer',
                element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>

            },
            {
                path: '/managepost',
                element: <PrivateRoute> <ManageMyPost></ManageMyPost></PrivateRoute>
            },
            {
                path: '/postdetails/:id',
                element: <PrivateRoute><VolunteerNeedPostDetails></VolunteerNeedPostDetails></PrivateRoute>
            },
            {
                path: '/bevolunteer/:id',
                element: <PrivateRoute><BeVolunteer></BeVolunteer></PrivateRoute>
            },
            {
                path: '/go-dashboard',
                element: <PrivateRoute><GoDashboard /></PrivateRoute>,
                children:[
                    {
                    
                    }
                ]
            }
        ]
    }
])

export default router