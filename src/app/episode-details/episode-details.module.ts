import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from "./container/details.component";
import { EpisodeDetailsRoutingModule } from "./episode-details-routing.module";
import { MaterialModule } from "../material/material.module";
import { EpisodeCardComponent } from './component/episode-card/episode-card.component';


@NgModule({
    declarations: [DetailsComponent, EpisodeCardComponent],
    imports: [
        CommonModule,
        EpisodeDetailsRoutingModule,
        MaterialModule
    ]
})
export class EpisodeDetailsModule {
}
