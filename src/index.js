// highlight
import './utils/highlight';
import 'simplebar/src/simplebar.css';
import 'react-image-lightbox/style.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, persistor } from './redux/store';
// import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
import LoadingScreen from './components/LoadingScreen';
import App from './App';

// ----------------------------------------------------------------------
const queryClient = new QueryClient();

ReactDOM.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {/* <CollapseDrawerProvider> */}
            <BrowserRouter>
              <App />
            </BrowserRouter>
            {/* </CollapseDrawerProvider> */}
          </LocalizationProvider>
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
