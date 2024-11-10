import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
    
      <Outlet></Outlet>


      
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;