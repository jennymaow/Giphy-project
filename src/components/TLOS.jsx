import './TLOS.css';

import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useAxios from '../hooks/useAxios';
import Spinner from './Spinner';

const TLOSGifs = () => {
  const [tGifs, setTGifs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  const scroll = (offset) => {
    ref.current.scrollLeft += offset;
  };
  const getTLOSGifs = async () => {
    const optionsRequest = {
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {
        api_key: 'vTPDaFwijpJgSZ3e5bSQ9z0Ll9NpjCpv',
        q: 'The Last of us',
        limit: 25,
        offset: 0,
        rating: 'g',
        lang: 'en',
      },
    };
    const TLOSGifs = await useAxios(optionsRequest);
    setTGifs(TLOSGifs.data);
    setLoaded(true);
    return TLOSGifs;
  };

  useEffect(() => {
    getTLOSGifs();
  });

  return (
    <section className="home-TLOS">
      <div className="home-TLOS-head">
        <div>
          <h1># The Last of Us</h1>
        </div>

        <button
          onClick={() => {
            navigate('/explore');
            localStorage.setItem('keyword', 'The last of us');
          }}
        >
          View All
        </button>
      </div>

      <div className="TLOS-gifs-container">
        <button className="prev" onClick={() => scroll(-300)}>
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMTUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPjxnIHRyYW5zZm9ybT0idHJhbnN_afv3jd.svg"
            alt="prev icon"
          />
        </button>
        <div className="TLOS-gifs" ref={ref}>
          {loaded ? (
            tGifs.map((gif) => (
              <img
                src={gif.images.original.url}
                alt={gif.title}
                key={JSON.stringify(gif)}
              />
            ))
          ) : (
            <Spinner />
          )}
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

export default TLOSGifs;
