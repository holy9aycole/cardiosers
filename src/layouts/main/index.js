import { Outlet, useLocation } from "react-router-dom";
import Header from "layouts/main/MainNavbar";
import Footer from "layouts/main/MainFooter";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const [area, setArea] = useState("Bengaluru");

  const handleChange = (e) => setArea(e.target.value);

  let title;
  let titleOptions;
  switch (pathname) {
    case "/whats-new":
      title = "WHATS NEW";
      break;

    case "/property":
      title = "PROPERTIES";
      break;

    case "/property-city":
      titleOptions = "Property";
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

    case "/about-us":
      title = "ABOUT RMZ";
      break;

    case "/contact":
      titleOptions = "CONTACT";
      break;

    case "/social-experience":
      title = "SOCIAL EXPERIENCE";
      break;

    case "/profile":
      title = "PROFILE";
      break;

    case "/gallery":
      title = "GALLERY";
      break;

    case "/gallery-single":
      title = "CONNECTING SPACES";
      break;

    default:
      break;
  }

  return (
    <>
      {/* <MainNavbar title="What's New" /> */}
      <Header
        title={title}
        titleOptions={titleOptions}
        area={area}
        handleChange={handleChange}
      />
      <Outlet />
      <Footer />
    </>
  );
}
