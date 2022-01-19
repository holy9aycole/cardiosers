// routes
import JwtProvider from "providers/JwtProvider";
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// hooks
import useAuth from "./hooks/useAuth";
// components
import ScrollToTop from "./components/ScrollToTop";
import NotistackProvider from "./components/NotistackProvider";
import ThemePrimaryColor from "./components/ThemePrimaryColor";
import ThemeLocalization from "./components/ThemeLocalization";
import LoadingScreen, { ProgressBarStyle } from "./components/LoadingScreen";
// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <NotistackProvider>
            <GlobalStyles />
            <ProgressBarStyle />
            <JwtProvider>
              <ScrollToTop />
              {isInitialized ? <Router /> : <LoadingScreen />}
            </JwtProvider>
          </NotistackProvider>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
