import './Home.css';

import SWGifs from '../components/SwGifs';
import TLOSGifs from '../components/TLOS';
import TrendingGifs from '../components/TrendingGifs';
const Home = () => {
  return (
    <section className="Home">
      <TrendingGifs />
      <div className="section-title">
        <img
          src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyMSAyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjE1LjMxMyUiIHkxPSIxMDAlIiB4Mj0iODQuNjg3JSIgeTI9IjAlIiB_mhk3jx.svg"
          alt="ray icon"
        />
        <h1>Popular</h1>
      </div>
      <SWGifs />
      <TLOSGifs />
    </section>
  );
};

export default Home;
