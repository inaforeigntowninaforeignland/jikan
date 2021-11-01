import { Type } from 'class-transformer';

import IPictureDetail from '../IPictureDetail';
import PictureDetailImpl from '../impl/PictureDetailImpl';
import IPicturesContainer from '../IPicturesContainer';

import AbstractBaseResponse from './AbstractBaseResponse';

class PicturesContainerImpl extends AbstractBaseResponse implements IPicturesContainer {
  @Type(() => PictureDetailImpl)
  pictures: IPictureDetail[];
}

export default PicturesContainerImpl;
