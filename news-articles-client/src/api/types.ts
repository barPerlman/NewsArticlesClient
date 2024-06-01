import {GetArticleResponse} from "../common/types";

export enum HTTPMethod {
    GET = 'get',
}

export enum ResponseType {
    STREAM = 'stream',
}

type Responses =
    | void
    | unknown
    | GetArticleResponse;


type Requests = never;

export type { Requests, Responses };
