import { Outlet, useLocation } from "react-router-dom";
import Header from "layouts/main/MainNavbar";
import Footer from "layouts/main/MainFooter";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const [area, setArea] = useState("Bangalore");

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
     title ="Contact";
     titleOptions = ["Bangalore","Delhi","Mumbai"];
     break;  

    default:
      break;
  }

  return (
    <>
      {/* <MainNavbar title="What's New" /> */}
      <Header title={title} titleOptions={titleOptions} area={area} handleChange={handleChange}/>
      <Outlet />
      <Footer />
    </>
  );
}
