import { Outlet } from 'react-router-dom';
import useControl from 'hooks/useControl';
import LoadingScreen from 'components/LoadingScreen';

export default function LogoOnlyLayout() {
  const { loading } = useControl();
  return <>{loading ? <LoadingScreen key="loader" style={{ zIndex: 100 }} /> : <Outlet />}</>;
}
