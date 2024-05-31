interface HttpErrorParams {
    message: string;
    status: number;
    requestedApi?: string;
}

class HttpError extends Error {
    status: number;
    requestedApi: string | undefined;

    constructor({ message, status, requestedApi }: HttpErrorParams) {
        super(message);
        this.message = message;
        this.status = status;
        this.requestedApi = requestedApi;
    }
}

export default HttpError;
