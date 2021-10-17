import axios, { AxiosPromise } from 'axios';
import { ILoginUser, ILoginResponse } from '../interfaces/login';

const loginUser = (user: ILoginUser) => {
  return axios
    .post<AxiosPromise<ILoginResponse>>('http://clinic.studio-mind.ru/login', {
      ...user,
    })
    .then((response): any => response.data);
};

export default loginUser;
