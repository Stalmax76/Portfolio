import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';
import styles from './style.module.scss';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <div className={styles.main__body}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
