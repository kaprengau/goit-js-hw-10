import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_FpHlZjtYUDRdFiI0qlJD9YYgl1L50Q7eK4LyU83JjbaiTYpNLAoi5qR5yEeFEHEE';
const bodyClassList = document.body.classList;
export const fetchBreeds = () => {
  bodyClassList.add('loading-select-on');
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.status) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .finally(() => {
      bodyClassList.remove('loading-select-on');
      bodyClassList.add('loading-select-off');
    });
};
