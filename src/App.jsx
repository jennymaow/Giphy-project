import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import GridLayout from './Layout/GridLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import Trending from './pages/Trending';
function App() {
  return (
    <div className="App">
      <GridLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trending" element={<Trending />} />
          <Route
            path="explore"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
        </Routes>
      </GridLayout>
    </div>
  );
}

export default App;
