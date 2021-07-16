import { IEpisode, IImage, ILinks, IShow } from "./show.interface";
import { Show } from "./show.class";
import * as moment from "moment/moment";
import { EpisodeImage } from "./episode-image.class";

export class Episode {
    private readonly _show?: Show | null;
    private readonly _links: ILinks;
    private readonly _airdate: string;
    private readonly _airstamp: string;
    private readonly _airtime: string;
    private readonly _id: number;
    private readonly _image: EpisodeImage;
    private readonly _name: string;
    private readonly _number: number;
    private readonly _runtime: number;
    private readonly _season: number;
    private readonly _summary: string;
    private readonly _type: string;
    private readonly _url: string;

    static fromInterface(obj: IEpisode): Episode {
        return new this(
            obj._links,
            obj.airdate,
            obj.airstamp,
            moment(obj.airstamp).format('h:mm:ss a'),
            obj.id,
            obj.image,
            obj.name,
            obj.number,
            obj.runtime,
            obj.season,
            obj.summary,
            obj.type,
            obj.url,
            obj._embedded?.show
        );
    }

    constructor(
        links: ILinks,
        airdate: string,
        airstamp: string,
        airtime: string,
        id: number,
        image: IImage,
        name: string,
        number: number,
        runtime: number,
        season: number,
        summary: string,
        type: string,
        url: string,
        show?: IShow,
    ) {
        this._show = show ? Show.fromInterface(show): null;
        this._links = links;
        this._airdate = airdate;
        this._airstamp = airstamp;
        this._airtime = airtime;
        this._id = id;
        this._image = new EpisodeImage(image);
        this._name = name;
        this._number = number;
        this._runtime = runtime;
        this._season = season;
        this._summary = summary;
        this._type = type;
        this._url = url;
    }


    get show(): Show {
        return <Show>this._show;
    }

    get links(): ILinks {
        return this._links;
    }

    get airdate(): string {
        return this._airdate;
    }

    get airstamp(): string {
        return this._airstamp;
    }

    get airtime(): string {
        return this._airtime;
    }

    get id(): number {
        return this._id;
    }

    get image(): string {
        if (this._show) {
            return this._show.image;

        }
        return this._image.get();
    }

    get name(): string {
        return this._name;
    }

    get number(): number {
        return this._number;
    }

    get runtime(): number {
        return this._runtime;
    }

    get season(): number {
        return this._season;
    }

    get summary(): string {
        if(this._show) {
            return this._show.summary;

        }
        return this._summary;
    }

    get type(): string {
        return this._type;
    }

    get url(): string {
        return this._url;
    }
}
