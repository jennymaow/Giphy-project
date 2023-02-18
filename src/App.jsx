import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Gifs from './pages/Gifs';
import Login from './pages/Login';
import Stickers from './pages/Stickers';
import Trending from './pages/Trending';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="explore"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="stickers"
          element={
            <ProtectedRoute>
              <Stickers />
            </ProtectedRoute>
          }
        />
        <Route
          path="gifs"
          element={
            <ProtectedRoute>
              <Gifs />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
