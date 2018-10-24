import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { GAME_ROUTES } from './game/game.routing';
import { StatsComponent } from './stats/stats.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'game', children: GAME_ROUTES },
    { path: 'stats', component: StatsComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
