import './Trending.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, { useEffect, useState } from 'react';

import useAxios from '../hooks/useAxios';
export default function Trending() {
  const [tGifs, setTGifs] = useState([]);

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
    return trendingGifs;
  };

  useEffect(() => {
    getTrendingGifs();
  });

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {tGifs.map((item) => (
        <ImageListItem key={JSON.stringify(item)}>
          <img
            src={`${item.images.original.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.images.original.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          {item.title && <ImageListItemBar className="item-bar" title={item.title} />}
        </ImageListItem>
      ))}
    </ImageList>
  );
}
