import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.component";
import Navbar from "../components/Navbar/Navbar.component";

const SharedLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}

export default SharedLayout