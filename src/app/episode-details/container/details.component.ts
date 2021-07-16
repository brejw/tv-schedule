import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Show } from "../../class/show.class";
import { ICastMember, IEpisode, IShow } from "../../class/show.interface";
import { CastMember } from "../../class/cast-member.class";
import { Episode } from "../../class/episode.class";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],

})
export class DetailsComponent implements OnInit, OnDestroy {
    private _subs: Subscription[] = [];
    private _show!: Show;
    private _cast!: CastMember[];
    private _episodes!: Episode[];
    public get show() {
        return this._show;
    }

    public get cast() {
        return this._cast;
    }

    public get episodes() {
        return this._episodes;
    }
    constructor(
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this._route.data.subscribe((x) => this._setShow(x.show));
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this._subs.forEach(sub => sub.unsubscribe());
    }

    _setShow(show: IShow): void {
        this._show = Show.fromInterface(show);
        this._cast = show._embedded!.cast!.map((member: ICastMember) => CastMember.fromIterface(member));
        this._episodes = show._embedded!.episodes!.map((member: IEpisode) => Episode.fromInterface(member));
    }
}
