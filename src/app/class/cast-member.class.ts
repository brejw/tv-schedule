import { IActor, ICastMember, ICharacter } from "./show.interface";
import { Character } from "./character.class";
import { Actor } from "./actor.class";

export class CastMember {
    character: Character;
    person: Actor;
    self: boolean;
    voice: boolean;


    public static fromIterface(member: ICastMember) {
       return new this(
            member.character,
            member.person,
            member.self,
            member.voice
       );
    }

    constructor(
        character: ICharacter,
        person: IActor,
        self: boolean,
        voice: boolean
    ) {
        this.character = Character.fromInterface(character);
        this.person = Actor.fromInterface(person);
        this.self = self;
        this.voice = voice;
    }

}
