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

let router=createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/need',
                element:<NeedVolunteer></NeedVolunteer>
            },
            {
                path:'/myprofile',
                element:<MyProfile></MyProfile>
            },
            {
                path:'/addvolunteer',
                element:<AddVolunteer></AddVolunteer>
            },
            {
                path:'/postdeatails/:id',
                element:<VolunteerNeedPostDetails></VolunteerNeedPostDetails>
            }

        ]
    }
])

export default router