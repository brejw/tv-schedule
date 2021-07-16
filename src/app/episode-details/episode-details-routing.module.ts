import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./container/details.component";
import { ShowResolver } from "../resolvers/show.resolver";

const routes: Routes = [
    {
        path: ':id',
        component: DetailsComponent,
        resolve: {
            show: ShowResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class EpisodeDetailsRoutingModule { }
