import { Outlet, useLocation } from "react-router-dom";
import Header from "layouts/main/MainNavbar";
import Footer from "layouts/main/MainFooter";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const title = pathname.slice(1);

  return (
    <>
      {/* <MainNavbar title="What's New" /> */}
      <Header title={title} />
      <Outlet />
      <Footer />
    </>
  );
}
