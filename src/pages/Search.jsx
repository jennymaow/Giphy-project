import { useEffect, useRef, useState } from 'react';
import useAxios from '../hooks/useAxios';
const Search = () => {
  const [keyword, setKeyword] = useState('trend');
  const [searchedGif, setSearchedGif] = useState([]);
  /*  const inputRef = useRef(''); */
  const getKeywordGif = async (keyword) => {
    const optionsRequired = {
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {
        api_key: 'vTPDaFwijpJgSZ3e5bSQ9z0Ll9NpjCpv',
        q: keyword,
        limit: 25,
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
        placeholder="Enter a keyword"
        onChange={(ev) => setKeyword(ev.target.value)}
      />
      {/* <button onClick={() => setKeyword(inputRef.current.value)}>Search</button> */}
      {searchedGif.map((gif) => (
        <img src={gif.images.original.url} alt={gif.title} key={JSON.stringify(gif)} />
      ))}
    </section>
  );
};

export default Search;
