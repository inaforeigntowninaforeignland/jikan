import { Expose } from 'class-transformer';

import AbstractBaseModel from 'app/models/base/impl/AbstractBaseModel';

import IVoiceActor from '../IVoiceActor';

class VoiceActorImpl extends AbstractBaseModel implements IVoiceActor {
  @Expose({ name: 'image_url' })
  imageUrl: string;

  language: string;

  name: string;
}

export default VoiceActorImpl;
