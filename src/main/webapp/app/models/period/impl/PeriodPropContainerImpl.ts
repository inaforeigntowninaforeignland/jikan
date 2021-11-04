import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import IPeriodPropContainer from '../IPeriodPropContainer';
import IPeriodProp from '../IPeriodProp';

import PeriodPropImpl from './PeriodPropImpl';

class PeriodPropContainerImpl implements IPeriodPropContainer {
  @ValidateNested()
  @Type(() => PeriodPropImpl)
  from: IPeriodProp;

  @ValidateNested()
  @Type(() => PeriodPropImpl)
  to: IPeriodProp;
}

export default PeriodPropContainerImpl;
