import axios, { AxiosRequestConfig } from "axios";

type ID = number | string;

export class API_Constructor {
    constructor(private url: URL) {}

    public getAll(options?: AxiosRequestConfig) {
        return this.fetch({
            ...options,
            method: "get",
            url: this.url.href,
        });
    }

    public getById(id: ID, options?: AxiosRequestConfig) {
        return this.fetch({
            ...options,
            method: "get",
            url: this.url.href + "/" + id,
        });
    }

    public update(id: ID, options?: AxiosRequestConfig) {
        return this.fetch({
            ...options,
            method: "put",
            url: this.url.href + "/" + id,
        });
    }

    public delete(id: ID, options?: AxiosRequestConfig) {
        return this.fetch({
            ...options,
            method: "delete",
            url: this.url.href + "/" + id,
        });
    }

    private fetch(config: AxiosRequestConfig) {
        try {
            return axios(config);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
