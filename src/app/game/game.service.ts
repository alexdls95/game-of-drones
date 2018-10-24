import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game.model';
import { Round } from './round.model';


@Injectable()
export class GameService {

    private gameUrl: string;

    constructor(private http: HttpClient) {
        this.gameUrl = urljoin(environment.apiUrl, 'game');
    }

    newGame(namePlayer1: string, namePlayer2: string) {
        const playerNames = {
            'namePlayer1': namePlayer1,
            'namePlayer2': namePlayer2
        };

        const body = JSON.stringify(playerNames);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post<Game>(this.gameUrl, body, { headers })
            .catch((error: Response) => Observable.throw(error));

    }

    getGame(id): Promise<void | Game> {
        const url = urljoin(this.gameUrl, id);
        return this.http.get(url)
        .toPromise()
        .then(response => response as Game)
        .catch(this.handleError);
    }

    finishRound(id: number, round: Round) {
        const url = urljoin(this.gameUrl, '' + id, 'round');
        const body = JSON.stringify(round);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post<Game>(url, body, { headers });
    }

    handleError(error: any) {
        console.log(error);
        const errMsg = error.message ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
    }
}
