import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";


@NgModule({
    declarations: [
        DashboardComponent,
        MovieCardComponent
    ],
    exports: [
        MovieCardComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
    ]
})
export class DashboardModule { }
