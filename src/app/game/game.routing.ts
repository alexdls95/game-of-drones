import { GameComponent } from './game.component';
import { LoginComponent } from '../auth/login.component';

export const GAME_ROUTES = [
    { path: '', component: GameComponent },
    { path: ':id', component: GameComponent },
    { path: ':id/:id', component: GameComponent }
];
