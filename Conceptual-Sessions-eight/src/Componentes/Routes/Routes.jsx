import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBord from "../Pages/DashBord";
import CoffeCard from "../Component/CoffeCard";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home>  </Home>,
                loader:()=> fetch("../categories.json"),
                children:[
                    {
                        path:'/category/:category',
                        element:<CoffeCard></CoffeCard>,
                        loader:() => fetch('../coffees.json')
                    }
                ]
                
                
            },
            {
                path:'/coffees',
                element:<Coffees></Coffees>,
                
                loader:() => fetch('../coffees.json')

            },
            {
                path:'/dashbord',
                element:<DashBord></DashBord>
            },
           
        ]
    }
])

export default route;


