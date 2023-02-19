import './Trending.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, { useEffect, useState } from 'react';

import Spinner from '../components/Spinner';
import useAxios from '../hooks/useAxios';
export default function Trending() {
  const [tGifs, setTGifs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const getTrendingGifs = async () => {
    const optionsRequest = {
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/trending',
      params: {
        api_key: 'vTPDaFwijpJgSZ3e5bSQ9z0Ll9NpjCpv',
        limit: 50,
        rating: 'r',
      },
    };
    const trendingGifs = await useAxios(optionsRequest);
    setTGifs(trendingGifs.data);
    setLoaded(true);
    return trendingGifs;
  };

  useEffect(() => {
    getTrendingGifs();
  });

  return (
    <section className="trending">
      <div className="trending-head">
        <img
          src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjUuNjE1JSIgeTE9Ijc3LjQ3MiUiIHgyPSIxMDAlIiB5Mj0iMjYuMTI_yoqclg.svg"
          alt="trending icon"
        />
        <h1>Trending GIFs</h1>
      </div>
      <ImageList variant="masonry" cols={3} gap={8}>
        {loaded ? (
          tGifs.map((item) => (
            <ImageListItem key={JSON.stringify(item)}>
              <img
                src={`${item.images.original.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.images.original.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              {item.title && <ImageListItemBar className="item-bar" title={item.title} />}
            </ImageListItem>
          ))
        ) : (
          <Spinner />
        )}
      </ImageList>
    </section>
  );
}
