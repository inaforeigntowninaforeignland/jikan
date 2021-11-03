import { Expose } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

class AbstractBaseModel implements IBaseModel {
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  url: string;
}

export default AbstractBaseModel;
