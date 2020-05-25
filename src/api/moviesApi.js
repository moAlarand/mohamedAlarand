import Axios from 'axios';
import {ServerError, ErrorType} from '../utils/Errors';

export default class MoviesApi {
  getSearchMovies = async (page, query, cancel) => {
    console.log('>>>>>>>>>>>>>>>>', query);
    try {
      const res = await Axios.get(query ? '/search/movie' : '/movie/popular', {
        cancelToken: new Axios.CancelToken(cancel),
        params: {query, page},
      });
      console.log('>>>>>>>>>>> res..........', res.data);
      return res.data;
    } catch (error) {
      console.log('>>>>>>>>>>> error', JSON.parse(JSON.stringify(error)));

      if (Axios.isCancel(error)) throw new ServerErr(ErrorType.CANCEL);
      else if (!error.response) {
        throw new ServerError(ErrorType.CONNECTION_ERROR);
      } else {
        console.log(
          '>>>>>>>>>>> errror......>>',
          JSON.parse(JSON.stringify(error.response)),
        );
        throw new ServerError(ErrorType.GENERAL_SERVER_ERROR, error);
      }
    }
  };
}
