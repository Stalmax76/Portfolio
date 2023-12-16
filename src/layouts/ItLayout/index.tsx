import { Outlet } from 'react-router-dom';
import ItAducation from '../../components/ItAducation';

const MainLayout = () => {
  return (
    <>
      <ItAducation />
      <Outlet />
    </>
  );
};

export default MainLayout;
