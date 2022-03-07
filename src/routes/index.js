import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen';

// layouts
import MainLayout from 'layouts/main';
import LogoOnlyLayout from 'layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
        { path: 'login', element: <LoginScreen /> },
        { path: 'otp', element: <OtpScreen /> },
      ],
    },

    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="/login" /> },
        { path: 'news-feed', element: <NewsFeed /> },
        { path: 'property', element: <Property /> },
        { path: 'whats-new', element: <WhatsNew /> },
        { path: 'sustainability', element: <Sustainability /> },
        { path: 'branding', element: <Branding /> },
        { path: 'profile', element: <Profile /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'forum', element: <Forum /> },
        { path: 'discussion/:id', element: <Discussion /> },
        { path: 'social-experience', element: <SocialExperience /> },
        { path: 'contact', element: <Contact /> },
        { path: 'gallery', element: <Gallery /> },
        { path: 'gallery/:id', element: <GallerySingle /> },
        { path: 'property-city', element: <PropertyCity /> },
      ],
    },

    { path: '/login-screen', element: <LoginScreen /> },
    { path: '/splash-screen', element: <SplashScreen /> },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Extra
const Page500 = Loadable(lazy(() => import('Screens/Page500')));
const NotFound = Loadable(lazy(() => import('Screens/Page404')));

// RMZ Screens

const SplashScreen = Loadable(lazy(() => import('Screens/Authentication/SplashScreen')));
const LoginScreen = Loadable(lazy(() => import('Screens/Authentication/LoginScreen')));
const OtpScreen = Loadable(lazy(() => import('Screens/Authentication/OtpScreen')));

const WhatsNew = Loadable(lazy(() => import('Screens/WhatsNew')));
const Property = Loadable(lazy(() => import('Screens/Property')));
const PropertyCity = Loadable(lazy(() => import('Screens/PropertyCity')));
const Sustainability = Loadable(lazy(() => import('Screens/Sustainability')));
const Branding = Loadable(lazy(() => import('Screens/Branding')));
const Gallery = Loadable(lazy(() => import('Screens/Gallery')));
const GallerySingle = Loadable(lazy(() => import('Screens/Gallery/GallerySingle')));
const Profile = Loadable(lazy(() => import('Screens/Profile')));
const AboutUs = Loadable(lazy(() => import('Screens/AboutUs')));
const NewsFeed = Loadable(lazy(() => import('Screens/NewsFeed/index')));
const Contact = Loadable(lazy(() => import('Screens/Contact')));
const Forum = Loadable(lazy(() => import('Screens/Forum')));
const Discussion = Loadable(lazy(() => import('Screens/Discussion')));
const SocialExperience = Loadable(lazy(() => import('Screens/SocialExperience')));
