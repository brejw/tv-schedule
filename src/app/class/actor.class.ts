import { IActor, IImage } from "./show.interface";
import { Image } from "./image.class";

export class Actor {
    birthday: any;
    country: any;
    deathday: any;
    gender: "Male" | "Female";
    id: number;
    private _image: Image;
    name: string;
    url: string;

    static fromInterface(actor: IActor) {
        return new this(
            actor.birthday,
            actor.country,
            actor.deathday,
            actor.gender,
            actor.id,
            actor.image,
            actor.name,
            actor.url
        );
    }

    constructor(
        birthday: any,
        country: any,
        deathday: any,
        gender: "Male" | "Female",
        id: number,
        image: IImage,
        name: string,
        url: string
    ) {
        this.birthday = birthday;
        this.country = country;
        this.deathday = deathday;
        this.gender = gender;
        this.id = id;
        this._image = new Image(image);
        this.name = name;
        this.url = url;
    }


    get image(): string {
        return this._image.get();
    }
}
