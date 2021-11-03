import { Expose } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import AbstractBaseModel from 'app/models/base/impl/AbstractBaseModel';

import IVoiceActor from '../IVoiceActor';

class VoiceActorImpl extends AbstractBaseModel implements IVoiceActor {
  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  language: string;

  name: string;
}

export default VoiceActorImpl;
