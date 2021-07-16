import { IExternals, IImage, ILinks, IRating, ISchedule, IShow, IWebChannel } from "./show.interface";
import { Image } from "./image.class";

export class Show {
    _links: ILinks;
    averageRuntime: number;
    dvdCountry: null;
    externals: IExternals;
    genres: string[];
    id: number;
    private _image: Image;
    language: string;
    name: string;
    network: null;
    officialSite: string;
    premiered: string;
    rating: IRating;
    runtime: number;
    schedule: ISchedule;
    status: string;
    summary: string;
    type: string;
    updated: number;
    url: string;
    webChannel: IWebChannel;
    weight: number;

    constructor(
        links: ILinks,
        averageRuntime: number,
        dvdCountry: null,
        externals: IExternals,
        genres: string[],
        id: number,
        image: IImage,
        language: string,
        name: string,
        network: null,
        officialSite: string,
        premiered: string,
        rating: IRating,
        runtime: number,
        schedule: ISchedule,
        status: string,
        summary: string,
        type: string,
        updated: number,
        url: string,
        webChannel: IWebChannel,
        weight: number
    ) {
        this._links = links;
        this.averageRuntime = averageRuntime;
        this.dvdCountry = dvdCountry;
        this.externals = externals;
        this.genres = genres;
        this.id = id;
        this._image = new Image(image);
        this.language = language;
        this.name = name;
        this.network = network;
        this.officialSite = officialSite;
        this.premiered = premiered;
        this.rating = rating;
        this.runtime = runtime;
        this.schedule = schedule;
        this.status = status;
        this.summary = summary;
        this.type = type;
        this.updated = updated;
        this.url = url;
        this.webChannel = webChannel;
        this.weight = weight;
    }

    static fromInterface(obj: IShow): Show {

        return new this(
            obj._links,
            obj.averageRuntime,
            obj.dvdCountry,
            obj.externals,
            obj.genres,
            obj.id,
            obj.image,
            obj.language,
            obj.name,
            obj.network,
            obj.officialSite,
            obj.premiered,
            obj.rating,
            obj.runtime,
            obj.schedule,
            obj.status,
            obj.summary,
            obj.type,
            obj.updated,
            obj.url,
            obj.webChannel,
            obj.weight,
        )
    }


    get image(): string {
        return this._image.get();
    }
}
