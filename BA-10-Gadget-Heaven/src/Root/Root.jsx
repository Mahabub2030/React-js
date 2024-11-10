
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavText from "../components/NavText";
import Navbar from '../components/Navbar'

const Root = () => {
  return (

    <div className="container mx-auto">
      <Navbar></Navbar>
      <NavText></NavText>
      <Banner></Banner>
      
      <Outlet></Outlet>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;