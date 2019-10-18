import { httpClient } from '../../../../shared/services/http-client/http-client';

const fetchMovies = () => {
  const url = 'https://www.omdbapi.com/?apikey=a567cf6c&s=love&type=movie';

  return httpClient.get(url);
};
export { fetchMovies };
