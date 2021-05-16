//Imports necesarios
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes
import { BodyComponent } from './components/body/body.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
    {path: '', component: BodyComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);