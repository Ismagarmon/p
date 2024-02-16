import { Routes } from '@angular/router';
import { C1Component } from './Components/c1/c1.component';
import { C2Component } from './Components/c2/c2.component';
import { FormulariomostrarComponent } from './Components/formulariomostrar/formulariomostrar.component';
import { TableOverviewExample } from './Components/table/table.component';
import { TabComponent } from './Components/tab/tab.component';

export const routes: Routes = [
    { path: 'c1', component: C1Component },
    { path: 'c2', component: C2Component },
    { path: 'formulario', component: FormulariomostrarComponent },
    { path: 'tabla', component: TableOverviewExample },
    { path: 'tab', component: TabComponent }
];
