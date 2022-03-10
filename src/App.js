// routes
import JwtProvider from 'providers/JwtProvider';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import NotistackProvider from './components/NotistackProvider';
import ThemeLocalization from './components/ThemeLocalization';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ThemeLocalization>
        <NotistackProvider>
          <GlobalStyles />
          <JwtProvider>
            <ScrollToTop />
            <Router />
          </JwtProvider>
        </NotistackProvider>
      </ThemeLocalization>
    </ThemeConfig>
  );
}
