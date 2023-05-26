import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-275px)]">


            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
};

export default Main;