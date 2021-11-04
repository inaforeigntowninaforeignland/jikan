import { IsDefined, IsUrl } from 'class-validator';

import IPictureDetail from '../IPictureDetail';

class PictureDetailImpl implements IPictureDetail {
  @IsUrl()
  @IsDefined()
  large: string;

  @IsUrl()
  @IsDefined()
  small: string;
}

export default PictureDetailImpl;
