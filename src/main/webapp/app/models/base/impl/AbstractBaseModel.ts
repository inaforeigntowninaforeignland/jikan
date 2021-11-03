import { Expose } from 'class-transformer';

class AbstractBaseModel implements IBaseModel {
  @Expose({ name: 'mal_id' })
  id: number;

  url: string;
}

export default AbstractBaseModel;
