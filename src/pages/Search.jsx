import './Search.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

import Spinner from '../components/Spinner';
import useAxios from '../hooks/useAxios';
export default function Search() {
  const [searchedGif, setSearchedGif] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  const getKeywordGif = async (keyword) => {
    console.log('before', window.localStorage.getItem('keyword'));
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
    console.log('after', window.localStorage.getItem('keyword'));
    const gifs = await useAxios(optionsRequired);
    setSearchedGif(gifs.data);
    setLoaded(true);
    return gifs;
  };

  useEffect(() => {
    getKeywordGif(window.localStorage.getItem('keyword'));
  }, []);

  return (
    <section className="search">
      <div className="search-bar">
        <input
          type="text"
          placeholder={window.localStorage.getItem('keyword')}
          ref={ref}
        />
        <button
          onClick={() => {
            window.localStorage.setItem('keyword', ref.current.value);
            getKeywordGif(ref.current.value);
          }}
        >
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/search-icon_qc37sf.svg"
            alt="search icon"
          />
        </button>
      </div>
      <div className="search-result">
        <ImageList variant="masonry" cols={3} gap={8}>
          {loaded ? (
            searchedGif.length !== 0 ? (
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
              <h1>No results</h1>
            )
          ) : (
            <Spinner />
          )}
        </ImageList>
      </div>
    </section>
  );
}
