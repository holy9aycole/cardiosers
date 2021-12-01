import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

// asssets
import siteImage from "assets/images/RMZ_Ecoworld.png";
import sust from "assets/images/sustainable.png";
import Logo from "assets/images/rmz-logo.png";

// layouts
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
import GuestGuard from "../guards/GuestGuard";
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: "login-unprotected", element: <Login /> },
        { path: "register-unprotected", element: <Register /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <AllAssets /> },
        { path: "ecommerce", element: <RMZEcoworld /> },
        { path: "analytics", element: <AllAssets /> },
        { path: "banking", element: <RMZEcoworld /> },
        { path: "booking", element: <AllAssets /> },
        { path: "booking1", element: <AllAssets /> },
        { path: "booking2", element: <AllAssets /> },
      ],
    },

    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "maintenance", element: <Maintenance /> },
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
    },

    { path: "/login-screen", element: <LoginScreen /> },
    { path: "/splash-screen", element: <SplashScreen /> },
    {
      path: "/property-card",
      element: (
        <PropertyCard
          RMZ_Ecoworld={siteImage}
          cetegory="IT Park"
          name="RMZ Ecoworld"
          description="An architectural marvel redefining the idea of tech parks in
    Bangalore, India."
          time="1h"
        />
      ),
    },
    {
      path: "/brand-card",
      element: (
        <BrandCard
          Logo={Logo}
          RMZ_Ecoworld={siteImage}
          cetegory="IT Park"
          name="RMZ Ecoworld"
          description="An architectural marvel redefining the idea of tech parks in
    Bangalore, India."
          time="1h"
        />
      ),
    },
    {
      path: "/sustain-card",
      element: (
        <SustainableCard
          sustainImage={sust}
          title="The 5’S"
          description="RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry."
        />
      ),
    },
    { path: "/post-card", element: <PostCard /> },
    { path: "/whats-new", element: <WhatsNew /> },
    { path: "/sustainability", element: <Sustainability /> },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("../pages/authentication/Login")));
const Register = Loadable(lazy(() => import("../pages/authentication/Register")));
const ResetPassword = Loadable(lazy(() => import("../pages/authentication/ResetPassword")));
const VerifyCode = Loadable(lazy(() => import("../pages/authentication/VerifyCode")));

// Dashboard
const AllAssets = Loadable(lazy(() => import("../Screens/Dashboard/AllAssets")));
const RMZEcoworld = Loadable(lazy(() => import("../Screens/Dashboard/RMZEcoworld")));

// Main
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));
const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));

//  RMZ Components
const PropertyCard = Loadable(lazy(() => import("components/PropertyCard")));
const SustainableCard = Loadable(lazy(() => import("components/SustainabilityCard")));
const PostCard = Loadable(lazy(() => import("components/PostCard")));
const BrandCard = Loadable(lazy(() => import("components/BrandCard")))

// RMZ Screens 
const LoginScreen = Loadable(lazy(() => import("components/LoginScreen")));
const SplashScreen = Loadable(lazy(() => import("components/SplashScreen")));
const WhatsNew = Loadable(lazy(() => import("Screens/WhatsNew")));
const Sustainability = Loadable(lazy(() => import("Screens/Sustainability")));