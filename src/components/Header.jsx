import './Header.css';

import { NavLink } from 'react-router-dom';

import { useAuth } from '../context/authContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Trending</NavLink>
        </li>
        {!user && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {user && (
          <li>
            <NavLink to="/explore">Explore</NavLink>
          </li>
        )}
  
        {user && (
          <li>
            <button onClick={() => logout()}>Logout</button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
