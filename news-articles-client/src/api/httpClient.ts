import axios from 'axios';
import qs from 'qs';
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HTTPMethod, Requests, Responses } from './types';
import config from '../api/constants/config';
import HttpError from "./HttpError";

const { apiUrl } = config;

const axiosConfig: AxiosRequestConfig = {
    baseURL: `${apiUrl}`,
};

function createAxiosInstance() {
    return axios.create(axiosConfig);
}

const request: AxiosInstance = createAxiosInstance();

export interface ClientConfig<D> extends AxiosRequestConfig<D> {
    url?: string;
}

const httpClient = <T extends Responses, D extends Requests>({
                                                                 method = HTTPMethod.GET,
                                                                 url = apiUrl,
                                                                 data,
                                                                 ...rest
                                                             }: ClientConfig<D>): Promise<T> =>
    request({
        method,
        url,
        data,
        paramsSerializer,
        withCredentials: true,
        ...rest,
    }).then((res: AxiosResponse<T>) => res.data);

request.interceptors.request.use(
    (req: AxiosRequestConfig) => {
        return req;
    },
    (error: AxiosError) => {
        console.warn('request error: ', error);
    }
);

request.interceptors.response.use(
    (res: AxiosResponse) => res,
    (err: AxiosError<string>) => {
        const originalRequest = err.config;
        const status = err.response?.status || 500;

        const errorBase = {
            requestedApi: originalRequest.url,
            status,
        };


        if (status === 500) {
            const error = {
                ...errorBase,
                message: 'An unexpected error occurred, please try again later',
            };
            throw new HttpError(error);
        }
        if (status === 404) {
            const error = {
                ...errorBase,
                message: 'The requested content does not exist, please try again later',
            };
            throw new HttpError(error);
        }

        const response: string | undefined = err.response?.data;
        const message = response ? response : err.message;

        const error = { ...errorBase, message, status };
        throw new HttpError(error);
    }
);

function paramsSerializer(params: AxiosRequestConfig['params']) {
    return qs.stringify(params, { arrayFormat: 'repeat' });
}

export default httpClient;
