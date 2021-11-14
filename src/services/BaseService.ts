import {RequestMethod} from '../utils/Enums';
import HttpRequest from '../../../website/src/utils/HttpRequest';
interface IProps {}
export default function BaseService(
  action: string,
  method: RequestMethod,
  body?: any,
  cancelToken?: any,
): Promise<any> {
  const promise = new Promise<any>((resolve, reject) => {
    HttpRequest(action, method, body, cancelToken)
      .then(result => {
        resolve(result.data);
      })
      .catch(e => {
        reject(e);
      });
  });
  return promise;
}
