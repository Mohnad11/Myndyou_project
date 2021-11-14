import axios, {AxiosError, AxiosResponse} from 'axios';
const API_URL = 'https://dog.ceo/api';
export default async function HttpRequest(
  url: string,
  method: any,
  data?: any,
  cancelToken?: any,
) {
  return axios
    .request({
          baseURL:API_URL,
          url: url,
          method: method,
          data: data,
          cancelToken: cancelToken ? cancelToken() : null,
    })
    .then((result: AxiosResponse<any>) => {
      return Promise.resolve(result);
    })
    .catch((err: AxiosError) => {
      return Promise.reject(err);
    });
}
