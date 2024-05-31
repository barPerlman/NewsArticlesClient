import {GetArticleResponse} from "../common/types";

export enum HTTPMethod {
    GET = 'get',
}

type Responses =
    | void
    | unknown
    | GetArticleResponse;


type Requests = never;

export type { Requests, Responses };
