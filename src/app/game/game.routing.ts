import { GameComponent } from './game.component';
import { WinnerComponent } from '../win/winner.component';

export const GAME_ROUTES = [
    { path: '', component: GameComponent },
    { path: ':id', component: GameComponent },
    { path: ':id/winner', component: WinnerComponent }
];
