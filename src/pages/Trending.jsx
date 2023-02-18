import React, { useEffect, useState } from 'react';

import useAxios from '../hooks/useAxios';
const Trending = () => {
  const [tGifs, setTGifs] = useState([]);

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
    <section className="trendingGifs">
      {tGifs.map((gif) => (
        <img src={gif.images.original.url} alt={gif.title} key={gif.title} />
      ))}
    </section>
  );
};

export default Trending;
