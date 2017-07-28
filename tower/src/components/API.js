import axios from 'axios';
let apiURL = 'https://lit-savannah-45759.herokuapp.com/wine/';

export function getWines(url) {
  return axios.get(url)
}
