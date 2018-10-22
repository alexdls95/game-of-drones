import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PlayerService {

    private playersUrl: string;

    constructor(private http: HttpClient) {
        this.playersUrl = urljoin(environment.apiUrl, 'players');
    }

    addPlayer(player: Player) {
        const body = JSON.stringify(player);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post<Player>(this.playersUrl, body, { headers })
            .catch((error: Response) => Observable.throw(error));

        // return this.http.post<Response>(this.playersUrl, body, { headers })
        //     .toPromise()
        //     .then(response => response.json() as Player)
        //     .catch(this.handleError);
    }

    getPlayer(id): Promise<void | Player> {
        const url = urljoin(this.playersUrl, id);
        return this.http.get(url)
        .toPromise()
        .then(response => response as Player)
        .catch(this.handleError);
    }

    handleError(error: any) {
        console.log(error);
        const errMsg = error.message ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
    }
}
