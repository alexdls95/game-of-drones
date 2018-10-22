import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { GAME_ROUTES } from './game/game.routing';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'game', children: GAME_ROUTES },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
