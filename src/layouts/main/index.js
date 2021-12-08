import { Outlet } from 'react-router-dom';
// import Header from "layouts/main/MainNavbar";
import Footer from "layouts/main/MainFooter";

// ----------------------------------------------------------------------

export default function MainLayout() {

  return (
    <>
      {/* <MainNavbar title="What's New" /> */}
      {/* <Header title="whats new" /> */}
      <Outlet />
      <Footer />
    </>
  );
}
