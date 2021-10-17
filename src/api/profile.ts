import axios, { AxiosPromise } from 'axios';

export const fetchDoctors = (token: string) => {
  return axios
    .get<AxiosPromise>('http://clinic.studio-mind.ru/doctors', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response): any => response);
};

export const fetchRecords = (token: string) => {
  return axios
    .get<AxiosPromise>('http://clinic.studio-mind.ru/records', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response): any => response);
};
