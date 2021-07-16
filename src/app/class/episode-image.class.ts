import { Image } from "./image.class";
import { IImage } from "./show.interface";

export class EpisodeImage extends Image {
    public readonly default: string = '/assets/no-thumbnail.jpg';

    constructor(props: IImage) {
        super(props);
    }

    get(): string {
        return super.get() ?? this.default;
    }
}
