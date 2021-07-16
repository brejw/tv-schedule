import { ICharacter, IImage } from "./show.interface";
import { Image } from "./image.class";

export class Character {
    id: number;
    _image: Image;
    name: string;
    url: string;

    static fromInterface(obj: ICharacter) {
        return new this(
            obj.id,
            obj.image,
            obj.name,
            obj.url
        );
    }

    constructor(
        id: number,
        image: IImage,
        name: string,
        url: string
    ) {
        this.id = id
        this._image = new Image(image);
        this.name = name
        this.url = url
    }

    get image(): string {
        return this._image.get();
    }
}
