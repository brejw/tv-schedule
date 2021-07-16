import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Episode } from "../../../class/episode.class";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    get episode(): Episode {
        return this._episode;
    }


    @Input() set episode(value: Episode) {
        this._episode = value;
    }

    @Output() goToEpisode: EventEmitter<number> = new EventEmitter<number>();
    private _episode!: Episode;

    constructor() {
    }

    ngOnInit(): void {
    }

    showRedirect() {
        this.goToEpisode.emit(this._episode.show.id);
    }

}
