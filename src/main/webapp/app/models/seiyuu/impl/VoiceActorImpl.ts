import { IsDefined, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Expose } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IVoiceActor from '../IVoiceActor';

class VoiceActorImpl implements IVoiceActor {
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

  language: string;

  @IsOptional()
  @IsString()
  name: string;
}

export default VoiceActorImpl;
