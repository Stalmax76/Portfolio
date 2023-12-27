import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';
import MyButton from '../UI/MyButton';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__logo}>
          <NavLink to="." end>
            <img src="../../../public/favicon_package_v0.16/android-chrome-192x192.png" />
          </NavLink>
        </div>
        <nav>
          <NavLink to="." end>
            Home
          </NavLink>
          <NavLink to="itAducation"> IT Aducation</NavLink>
          <NavLink to="musicAducation">Music Aducation</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
          <NavLink to="about">About me</NavLink>
        </nav>
        <MyButton />
        <div className="menu__burger">
          <h3>Burger</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;
