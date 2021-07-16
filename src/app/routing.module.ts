import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/container/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'details',
        loadChildren: () => import('./episode-details/episode-details.module').then(m => m.EpisodeDetailsModule)
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class RoutingModule { }
