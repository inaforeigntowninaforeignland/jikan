import { Expose } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import AbstractBaseModel from 'app/models/base/impl/AbstractBaseModel';

import IStaff from '../IStaff';
import PositionType from '../enums/PositionType';

class StaffImpl extends AbstractBaseModel implements IStaff {
  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  positions: PositionType[];

  name: string;
}

export default StaffImpl;
