import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem('user');
    return ID ? ID : null;
  });

  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    window.localStorage.setItem('user', data);
    window.localStorage.setItem('keyword', data);
    navigate('/', { replace: true });
  };

  //replace true borra todo y te pone una barra. Se asegura de que te lleva a la página principal, por si en la página hay muchas rutas secundarias no sabe a que barra se refiere.
  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('keyword');
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,

      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//cada vez que se importa contexto en pagina se necesita useContext y authcontext, con el hook useAuth solo necesito usar esto useAuth.

export const useAuth = () => {
  return useContext(AuthContext);
};
