import { IsDefined, IsNumber, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import VoiceActorImpl from 'app/models/seiyuu/impl/VoiceActorImpl';
import IVoiceActor from 'app/models/seiyuu/IVoiceActor';

import IAnimeCharacter from '../IAnimeCharacter';

class AnimeCharacterImpl implements IAnimeCharacter {
  @IsDefined()
  @IsNumber()
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  @IsOptional()
  @IsUrl()
  url: string;

  @IsOptional()
  @IsUrl()
  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  @IsOptional()
  @IsString()
  name: string;

  role: string;

  @ValidateNested()
  @Type(() => VoiceActorImpl)
  @Expose({ name: ExposePropertyType.VOICE_ACTORS })
  voiceActors: IVoiceActor[];
}

export default AnimeCharacterImpl;
