import { Outlet, useLocation } from 'react-router-dom';
import Header from 'layouts/main/MainNavbar';
import Footer from 'layouts/main/MainFooter';
import { useState } from 'react';
import useControl from 'hooks/useControl';
import LoadingScreen from 'components/LoadingScreen';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const [area, setArea] = useState('Bengaluru');
  const { loading } = useControl();
  const handleChange = (e) => setArea(e.target.value);

  let title;
  let titleOptions;
  switch (pathname) {
    case '/whats-new':
      title = 'WHATS NEW';
      break;

    case '/property':
      title = 'PROPERTIES';
      break;

    case '/property-city':
      title = 'Property';
      titleOptions = ['Bengaluru', 'Mumbai', 'Chennai'];
      break;

    case '/sustainability':
      title = 'SUSTAINABILITY';
      break;

    case '/branding':
      title = 'BRANDING';
      break;
    case '/forum':
      title = 'FORUM';
      break;
    case '/discussion':
      title = 'DISCUSSION';
      break;

    case '/about-us':
      title = 'ABOUT RMZ';
      break;

    case '/contact':
      title = 'CONTACT';
      break;

    case '/social-experience':
      title = 'SOCIAL EXPERIENCE';
      break;

    case '/profile':
      title = 'PROFILE';
      break;

    case '/gallery':
      title = 'GALLERY';
      break;

    case '/gallery-single':
      title = 'CONNECTING SPACES';
      break;

    default:
      break;
  }

  return (
    <>
      {loading && <LoadingScreen key="loader" style={{ zIndex: 100 }} />}
      <Header title={title} titleOptions={titleOptions} area={area} handleChange={handleChange} />
      <Outlet />
      <Footer />
    </>
  );
}
