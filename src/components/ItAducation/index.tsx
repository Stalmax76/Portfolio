import { NavLink } from 'react-router-dom';
const ItAducation = () => {
  return (
    <nav className="it">
      It Aducation
      <NavLink to="." end>
        Web
      </NavLink>
      <NavLink to=""> JavaScript</NavLink>
      <NavLink to=""> Progects</NavLink>
    </nav>
  );
};
export default ItAducation;
