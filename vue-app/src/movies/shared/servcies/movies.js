import { httpClient } from '../../../shared/services/http-client/http-client';

const url = 'https://www.omdbapi.com/?apikey=a567cf6c&s=love&type=movie';
const fetchMovie = () => {
    return httpClient.get(url)

};

export { fetchMovie };
