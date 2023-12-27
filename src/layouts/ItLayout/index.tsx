import { Outlet } from 'react-router-dom';
import ItAducation from '../../components/ItAducation';

const ItLayout = () => {
  return (
    <div style={{ backgroundColor: 'green', paddingTop: '100px' }}>
      <ItAducation />
      <Outlet />
    </div>
  );
};

export default ItLayout;
