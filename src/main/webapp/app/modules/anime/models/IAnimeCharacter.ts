import IBaseCharacter from 'app/models/base/IBaseCharacter';
import IVoiceActor from 'app/models/seiyuu/IVoiceActor';

// TODO Add JSDoc
interface IAnimeCharacter extends IBaseCharacter {
  voiceActors: IVoiceActor[];
}

export default IAnimeCharacter;
