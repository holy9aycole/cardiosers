import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import LoadingScreen from "components/LoadingScreen";

// layouts
import MainLayout from "layouts/main";
import DashboardLayout from "Screens/NewsFeed";
import LogoOnlyLayout from "layouts/LogoOnlyLayout";

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
		// Dashboard Routes
		{
			path: "news-feed",
			element: <DashboardLayout />,
			children: [
				{ element: <Navigate to="/news-feed/ecoworld" replace /> },
				{ path: "assets", element: <AllAssets /> },
				{ path: "ecoworld", element: <RMZEcoworld /> },
				{ path: "millenia", element: <RMZEcoworld /> },
				{ path: "ecospace", element: <AllAssets /> },
				{ path: "infinity", element: <AllAssets /> },
				{ path: "paramount", element: <AllAssets /> },
			],
		},

		// Main Routes
		{
			path: "*",
			element: <LogoOnlyLayout />,
			children: [
				{ path: "500", element: <Page500 /> },
				{ path: "404", element: <NotFound /> },
				{ path: "*", element: <Navigate to="/404" replace /> },
			],
		},
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{ element: <WhatsNew /> },
				{ path: "news-feed", element: <NewsFeed /> },
				{ path: "property", element: <Property /> },
				{ path: "whats-new", element: <WhatsNew /> },
				{ path: "sustainability", element: <Sustainability /> },
				{ path: "branding", element: <Branding /> },
				{ path: "profile", element: <Profile /> },
				{ path: "about-us", element: <AboutUs /> },
				{ path: "forum", element: <Forum /> },
				{ path: "discussion", element: <Discussion /> },
				{ path: "social-experience", element: <SocialExperience /> },
				{ path: "contact", element: <Contact /> },
				{ path: "gallery", element: <Gallery /> },
				{ path: "gallery-single", element: <GallerySingle /> },
				{
					path: "property-city",
					element: (
						<PropertyCity
							locations={["RMZ Ecoworld", "RMZ Ecoworld", "RMZ Ecoworld"]}
							micromarketID="IJhZ-SfQQJs"
						/>
					),
				},
			],
		},

		{ path: "/login-screen", element: <LoginScreen /> },
		{ path: "/splash-screen", element: <SplashScreen /> },
		{ path: "/otp", element: <OtpScreen /> },
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}

// IMPORT COMPONENTS

// Dashboard
const AllAssets = Loadable(lazy(() => import("Screens/NewsFeed/AllAssets")));
const RMZEcoworld = Loadable(
	lazy(() => import("Screens/NewsFeed/RMZEcoworld"))
);

// Extra
const Page500 = Loadable(lazy(() => import("Screens/Page500")));
const NotFound = Loadable(lazy(() => import("Screens/Page404")));

// RMZ Screens

const SplashScreen = Loadable(lazy(() => import("components/SplashScreen")));
const LoginScreen = Loadable(lazy(() => import("components/LoginScreen")));
const OtpScreen = Loadable(lazy(() => import("components/OtpScreen")));
const WhatsNew = Loadable(lazy(() => import("Screens/WhatsNew")));
const Property = Loadable(lazy(() => import("Screens/Property")));
const PropertyCity = Loadable(lazy(() => import("Screens/PropertyCity")));
const Sustainability = Loadable(lazy(() => import("Screens/Sustainability")));
const Branding = Loadable(lazy(() => import("Screens/Branding")));
const Gallery = Loadable(lazy(() => import("Screens/Gallery")));
const GallerySingle = Loadable(
	lazy(() => import("Screens/Gallery/GallerySingle"))
);
const Profile = Loadable(lazy(() => import("Screens/Profile")));
const AboutUs = Loadable(lazy(() => import("Screens/AboutUs")));
const NewsFeed = Loadable(lazy(() => import("Screens/NewsFeed")));
const Contact = Loadable(lazy(() => import("Screens/Contact")));
const Forum = Loadable(lazy(() => import("Screens/Forum")));
const Discussion = Loadable(lazy(() => import("Screens/Discussion")));
const SocialExperience = Loadable(
	lazy(() => import("Screens/SocialExperience"))
);
