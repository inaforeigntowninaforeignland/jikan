import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import AbstractBaseModel from 'app/models/base/impl/AbstractBaseModel';
import VoiceActorImpl from 'app/models/seiyuu/impl/VoiceActorImpl';
import IVoiceActor from 'app/models/seiyuu/IVoiceActor';

import IAnimeCharacter from '../IAnimeCharacter';

class AnimeCharacterImpl extends AbstractBaseModel implements IAnimeCharacter {
  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  name: string;

  role: string;

  @Type(() => VoiceActorImpl)
  @Expose({ name: ExposePropertyType.VOICE_ACTORS })
  voiceActors: IVoiceActor[];
}

export default AnimeCharacterImpl;
