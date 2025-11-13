import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Counter } from './counter/counter';

export const routes: Routes = [
    {
        path:"",
        component:Counter
    }
];
