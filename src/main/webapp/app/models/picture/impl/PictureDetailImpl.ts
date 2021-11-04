import { IsOptional, IsUrl } from 'class-validator';

import IPictureDetail from '../IPictureDetail';

class PictureDetailImpl implements IPictureDetail {
  @IsOptional()
  @IsUrl()
  large: string;

  @IsOptional()
  @IsUrl()
  small: string;
}

export default PictureDetailImpl;
