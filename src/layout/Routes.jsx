import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Career from "../pages/Career";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default Routes;