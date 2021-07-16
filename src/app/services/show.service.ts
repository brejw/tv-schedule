import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ShowService {
    private endpoint: string = 'https://api.tvmaze.com/shows/';

    constructor(
        private _http: HttpClient
    ) {
    }

    getShow(id: string): Promise<any> {
        return this._http.get(this.endpoint + id, {
            params: {
                'embed[]': ['episodes', 'cast'],
            }
        }).toPromise();
    }

}
