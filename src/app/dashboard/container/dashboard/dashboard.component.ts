import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ScheduleService } from "../../../services/schedule.service";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DATE_PICKER_MOMENT_FORMATS } from "../../../utils/date-picker-moment-formats.const";
import { Observable, of, Subject, Subscription } from "rxjs";
import {
    debounceTime,
    map,
    tap,
    withLatestFrom
} from "rxjs/operators";
import { Moment } from "moment/moment";
import { Episode } from "../../../class/episode.class";
import { Router } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter ,
            deps: [MAT_DATE_LOCALE , MAT_MOMENT_DATE_ADAPTER_OPTIONS ]
        },
        { provide: MAT_DATE_FORMATS, useValue: DATE_PICKER_MOMENT_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: "pl" }
    ]
})
export class DashboardComponent implements OnInit, OnDestroy {
    filter: FormGroup;
    genres: Observable<Array<string>> = of([]);
    episodes: Observable<Array<Episode>> = of([]);
    filtered$: Observable<Array<Episode>> = of([]);
    loading: boolean = false;
    genresTitles: string[] = [];
    filterGenres: FormArray;
    private _subs: Subscription[] = [];
    loaded$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private _schedule: ScheduleService,
        private _fb: FormBuilder,
        private _cdr: ChangeDetectorRef,
        private _router: Router
    ) {
        this.filterGenres = _fb.array([]);
        this.filter = this._fb.group({
            date: _fb.control(new Date()),
            genres: this.filterGenres
        });
    }

    ngOnInit(): void {
        this._schedule.updateDate(new Date());
        this.episodes = this._schedule.episodes;

        this.genres = this._schedule.genres.pipe(
            tap((x: Set<string>) => this.generateGenres(x)),
            map((x: Set<string>) => Array.from(x))
        );

        this.filter.controls.date.valueChanges.subscribe((x: Moment) => {
            this._schedule.updateDate(x.toDate());
        });

        this.filtered$ = this.filterGenres.valueChanges.pipe(
            map((x: boolean[]) =>
                x.map((y, i) => ({
                    genre: this.genresTitles[i],
                    value: y
                }))
            ),
            map((x) => x.filter(y => y.value)),
            map((x) => x.map(y => y.genre)),
            debounceTime(0),
            withLatestFrom(this.episodes),
            map(([genres, episodes]: [string[], Episode[]]) => {
                console.log(0);
                if(genres.length > 0) {
                    console.log(1);
                    return episodes.filter(
                        episode => episode.show.genres.some((epGenres) => genres.includes(epGenres))
                    );
                } else {
                    console.log(2);
                    return episodes;
                }
            }),
            tap(x => console.log(x))
        );

        this._subs.push(this.genres.subscribe());
        this._subs.push(this.episodes.subscribe());
        this._subs.push(
            this._schedule.loadingStatus.subscribe((status: boolean) => {
                this.loading = status;
            })
        );
    }

    clearFormArray = (formArray: FormArray) => {
        while (formArray.length !== 0) {
            formArray.removeAt(0)
        }
    }

    generateGenres(genres: Set<string>): void {
        this.clearFormArray(this.filterGenres);
        this.genresTitles = Array.from(genres);
        for (const genre of genres) {
            this.filterGenres.push(
                this._fb.control(false)
            );
        }
    }

    ngOnDestroy(): void {
        this._subs.forEach(sub => sub.unsubscribe());
    }

    redirectToEpisodeDetails(episodeId: number) {
        this._router.navigate(['details', episodeId]);
    }
}
