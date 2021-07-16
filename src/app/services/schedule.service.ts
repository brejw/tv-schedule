import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { tap, map } from "rxjs/operators";
import * as moment from 'moment';
import { IEpisode } from "../class/show.interface";
import { DATE_FORMAT } from "../utils/date-format.const";
import { Episode } from "../class/episode.class";

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    private scheduleEndpoint: string = 'https://api.tvmaze.com/schedule/web';
    private _genres: BehaviorSubject<Set<string>> = new BehaviorSubject<Set<string>>(new Set());
    private _date: Subject<Date> = new Subject<Date>();
    private _episodes: Subject<Episode[]> = new Subject<Episode[]>();
    private _loadingStatus: Subject<boolean> = new Subject<boolean>();

    public get loadingStatus() {
        return this._loadingStatus.asObservable();
    }
    public get episodes() {
        return this._episodes.asObservable();
    }

    public get genres(): Observable<Set<string>> {
        return this._genres.asObservable();
    }

    constructor(
        private _http: HttpClient
    ) {
        this._date.asObservable().pipe(
            tap(() => this._loadingStart()),
            tap(x => this.getSchedule(x))
        ).subscribe(console.log);
    }

    public getSchedule(date: Date = new Date(), countryCode: string = 'US'): void {
        const formattedDate = moment(date).format(DATE_FORMAT);
        this._http.get<IEpisode[]>(this.scheduleEndpoint, {
            params: {
                date: formattedDate,
                country: countryCode
            }
        }).pipe(
            map((response: IEpisode[]) => response.map((episode) => Episode.fromInterface(episode))),
            tap((episodes: Episode[]) => this._selectGeneres(episodes)),
            tap(() => this._loadingFinish()),
        ).subscribe((x) => this._episodes.next(x));
    }

    private _selectGeneres(episodes: Episode[]): void {
        const genresArr =  episodes.reduce((prev: string[], current: Episode) => [...prev, ...current.show.genres], []);
        this._genres.next(new Set(genresArr));
    }

    public updateDate(date: Date) {
        this._date.next(date);
    }

    private _loadingStart = () => this._loadingStatus.next(true);
    private _loadingFinish = () => this._loadingStatus.next(false);
}
