import './Header.css';

import { NavLink } from 'react-router-dom';

import { useAuth } from '../context/authContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <img
        src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676810811/Pokemons%20icons/GIPHY_Transparent_180px_c2hnf6.png"
        alt="Giphy logo"
      />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!user && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {user && (
          <li className="trending-link">
            <NavLink to="/trending">Trending</NavLink>
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
