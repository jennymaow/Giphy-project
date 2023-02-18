import axios from 'axios';
const useAxios = async (options) => {
  return await axios.request(options).then((response) => response.data);
};

export default useAxios;
