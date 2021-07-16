export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: IImage;
    summary: string;
    _links: ILinks;
    _embedded?: {
        show?: IShow
    }
}

export interface ISchedule {
    time: string;
    days: string[];
}

export interface IRating {
    average: number;
}
export interface IWebChannel {

    id: number;
    name:string;
    country: {
        name: string;
        code: string;
        timezone: string;
    }

}

export interface IShow {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    officialSite: string;
    schedule: ISchedule,
    rating: IRating,
    weight: number;
    network: null,
    webChannel: IWebChannel,
    dvdCountry: null,
    externals: IExternals;
    image: IImage;
    summary: string;
    updated: number;
    _links: ILinks;
    _embedded?: {
        episodes?: IEpisode[],
        cast?: ICastMember[],
    }
}

export interface IExternals {
    tvrage?: number;
    thetvdb?: number;
    imdb?: string
}
export interface IImage {
    medium?: string;
    original?: string;
    default: string
}


export interface ILinks {
    self?: ILink,
    previousepisode?: ILink,
    nextepisode?: ILink,
}

export interface ILink {
    href: string;
}

export interface ICastMember {
    person: IActor
    character: ICharacter
    self: boolean
    voice: boolean
}

export interface IActor {
    id: number;

    url: string;
    name: string;
    country: any;
    birthday: any;
    deathday: any;
    gender: 'Male' | 'Female';
    image: IImage
}

export interface ICharacter {
    id: number;
    url: string;
    name: string;
    image: IImage
}
