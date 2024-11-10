import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

const Main = () => {
    return (
        <div>
            {/* <p>      NavBar       </p>
           <p>     Dynamic       </p>
           <p>     Footer       </p> */}
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-288px)] container mx-auto">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;