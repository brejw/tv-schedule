import { IImage } from "./show.interface";

export class Image {
    public readonly default: string = '/assets/no-cover.png';
    private readonly _medium?: string;
    private readonly _original?: string;

    constructor(image: IImage) {
        this._medium = image?.medium;
        this._original = image?.original;
    }

    public get() {
        return this._medium ?? this._original ?? this.default;
    }

}
