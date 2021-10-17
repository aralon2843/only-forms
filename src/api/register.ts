import axios, { AxiosPromise } from 'axios';
import ISignUpUser from '../interfaces/signup';

const registerUser = (user: ISignUpUser) => {
  return axios
    .post<AxiosPromise>('http://clinic.studio-mind.ru/register', {
      ...user,
    })
    .then((response) => response.data);
};

export default registerUser;
