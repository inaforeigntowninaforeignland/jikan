import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';

import IPictureDetail from '../IPictureDetail';
import PictureDetailImpl from '../impl/PictureDetailImpl';
import IPicturesContainer from '../IPicturesContainer';

class PicturesContainerImpl extends AbstractBaseResponse implements IPicturesContainer {
  @ValidateNested()
  @Type(() => PictureDetailImpl)
  pictures: IPictureDetail[];
}

export default PicturesContainerImpl;
