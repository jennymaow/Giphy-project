import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useAxios from '../hooks/useAxios';

const TrendingGifs = () => {
  const [tGifs, setTGifs] = useState([]);
  const ref = useRef();
  const navigate = useNavigate();

  const scroll = (offset) => {
    ref.current.scrollLeft += offset;
  };
  const getTrendingGifs = async () => {
    const optionsRequest = {
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/trending',
      params: {
        api_key: 'vTPDaFwijpJgSZ3e5bSQ9z0Ll9NpjCpv',
        limit: 25,
        rating: 'r',
      },
    };
    const trendingGifs = await useAxios(optionsRequest);
    setTGifs(trendingGifs.data);
    return trendingGifs;
  };

  useEffect(() => {
    getTrendingGifs();
  });

  return (
    <section className="home-trending">
      <div className="home-trending-head">
        <div>
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUuNjE1JSIgeTE9Ijc3LjQ3MiUiIHgyPSIxMDAlIiB5Mj0iMjYuMTI_yoqclg.svg"
            alt="trending icon"
          />
          <h1>Trending</h1>
        </div>
        <button onClick={() => navigate('/trending')}>View All</button>
      </div>

      <div className="trending-gifs-container">
        <button className="prev" onClick={() => scroll(-300)}>
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMTUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPjxnIHRyYW5zZm9ybT0idHJhbnN_afv3jd.svg"
            alt="prev icon"
          />
        </button>
        <div className="trending-gifs" ref={ref}>
          {tGifs.map((gif) => (
            <img
              src={gif.images.original.url}
              alt={gif.title}
              key={JSON.stringify(gif)}
            />
          ))}
        </div>
        <button className="next" onClick={() => scroll(300)}>
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMTUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPjxnIHRyYW5zZm9ybT0idHJhbnN_afv3jd.svg"
            alt="next icon"
          />
        </button>
      </div>
    </section>
  );
};

export default TrendingGifs;
