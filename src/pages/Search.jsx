import './Search.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, { useEffect, useState } from 'react';

import useAxios from '../hooks/useAxios';
export default function Search() {
  const [keyword, setKeyword] = useState('trend');
  const [searchedGif, setSearchedGif] = useState([]);
  const getKeywordGif = async (keyword) => {
    const optionsRequired = {
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {
        api_key: 'vTPDaFwijpJgSZ3e5bSQ9z0Ll9NpjCpv',
        q: keyword,
        limit: 50,
        offset: 0,
        rating: 'g',
        lang: 'en',
      },
    };
    const gifs = await useAxios(optionsRequired);
    setSearchedGif(gifs.data);
    console.log(gifs);
    return gifs;
  };

  useEffect(() => {
    getKeywordGif(keyword);
  }, [keyword]);

  return (
    <section className="search">
      <input
        type="text"
        placeholder={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
      />
      <div className="search-result">
        <ImageList variant="masonry" cols={3} gap={8}>
          {searchedGif.length !== 0 ? (
            searchedGif.map((item) => (
              <div key={JSON.stringify(item)}>
                <ImageListItem>
                  <img
                    src={`${item.images.original.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.images.original.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  {item.title && (
                    <ImageListItemBar
                      className="item-bar"
                      title={item.title}
                      sx={{
                        color: 'red',
                      }}
                    />
                  )}
                </ImageListItem>
              </div>
            ))
          ) : (
            <section className="trend-keyword">
              <h1>No results</h1>
              <button onClick={() => setKeyword('happy')}>Happy</button>
              <button onClick={() => setKeyword('surprised')}>Surprised</button>
              <button onClick={() => setKeyword('star wars')}>Star wars</button>
            </section>
          )}
        </ImageList>
      </div>
    </section>
  );
}
