import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <nav>
        <div className="menu__logo">
          <img src="../../../public/favicon_package_v0.16/android-chrome-192x192.png" />
        </div>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="itAducation"> IT Aducation</NavLink>
        <NavLink to="musicAducation">Music Aducation</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="about">About me</NavLink>
        <div className="menu__burger">
          <h3>Burger</h3>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
