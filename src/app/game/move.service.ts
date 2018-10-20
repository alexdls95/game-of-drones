import { Injectable } from '@angular/core';
import { Move } from './move.model';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';

@Injectable()
export class MoveService {

    private movesUrl: string;

    constructor(private http: Http) {
        this.movesUrl = urljoin(environment.apiUrl, 'moves');
    }

    getMoves(): Promise<void | Move[]> {
        return this.http.get(this.movesUrl)
        .toPromise()
        .then(response => response.json() as Move[])
        .catch(this.handleError);
    }

    getMove(id): Promise<void | Move> {
        const url = urljoin(this.movesUrl, id);
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Move)
        .catch(this.handleError);
    }

    handleError(error: any) {
        console.log(error);
        const errMsg = error.message ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
    }
}
