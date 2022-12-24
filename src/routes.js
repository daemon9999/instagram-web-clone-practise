import Login from "pages/auth/Login"
import Home from "pages/Home"
import AuthLayout from "pages/auth/AuthLayout"
import PrivateRoute from "components/PrivateRoute"
import HomeRoute from "components/HomeRoute"
const routes = [
    {
        path: "/instagram-web-clone-practise",
        element: <Home/>,
        auth: true
    },
    {
        path: '/instagram-web-clone-practise/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>,
                home: true
            }
        ]
    }
]

const checkRoutes = routes => routes.map(route => {

    if (route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }   

    if (route?.home){
        route.element = <HomeRoute>{route.element}</HomeRoute>
    }

    if (route?.children){
        route.children = checkRoutes(route.children)
    }

    return route
})

export default checkRoutes(routes)