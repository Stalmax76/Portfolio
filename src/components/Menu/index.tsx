import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <div className="menu__logo">
          <img src="../../../public/favicon_package_v0.16/android-chrome-192x192.png" />
        </div>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="about">About me</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <div className="menu__burger">
          <h3>Bu</h3>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
