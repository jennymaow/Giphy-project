import useAxios from '../hooks/useAxios';

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
  return await useAxios(optionsRequest);
};

export default getTrendingGifs;
