import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      'x-rapidapi-host' : 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key' : '3224681278mshdf603cd43fde3cbp13a2f6jsnf3ec618192c1'
    }
  });
    
  return data;
};