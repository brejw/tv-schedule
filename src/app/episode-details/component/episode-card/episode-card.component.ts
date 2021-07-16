import { Component, Input, OnInit } from '@angular/core';
import { Episode } from "../../../class/episode.class";

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {
  get episode(): Episode {
    return this._episode;
  }

  @Input() set episode(value: Episode) {
    this._episode = value;
  }
  private _episode!: Episode;

  constructor() { }

  ngOnInit(): void {
    console.log(this._episode);
  }
}
