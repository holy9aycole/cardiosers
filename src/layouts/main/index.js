import { Outlet, useLocation } from "react-router-dom";
import Header from "layouts/main/MainNavbar";
import Footer from "layouts/main/MainFooter";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();

  let title;
  switch (pathname) {
    case "/whats-new":
      title = "WHATS NEW";
      break;

    case "/property":
      title = "PROPERTIES";
      break;

    case "/sustainability":
      title = "SUSTAINABILITY";
      break;

    case "/branding":
      title = "BRANDING";
      break;
    case "/forum":
      title = "FORUM";
      break;
    case "/discussion":
      title = "DISCUSSION";
      break;

    default:
      break;
  }

  return (
    <>
      {/* <MainNavbar title="What's New" /> */}
      <Header title={title} />
      <Outlet />
      <Footer />
    </>
  );
}
