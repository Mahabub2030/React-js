import { Outlet, useLoaderData } from "react-router-dom";
import Bannner from "../Component/Bannner";
import Heading from "../Component/Heading";
import Catagories from "../Component/Catagories";

const Home = () => {
    const catagories = useLoaderData();
    console.log(catagories);
    return (
        <div>
            <Bannner></Bannner>
            <Heading
            title={"Before Coffees By CataGory"}
            subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, totam!"}
            
            ></Heading>
            <Catagories catagories={catagories} ></Catagories>
            <Outlet></Outlet>
            
           
        </div>
    );
};

export default Home;