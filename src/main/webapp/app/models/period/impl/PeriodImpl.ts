import { ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IPeriod from '../IPeriod';
import IPeriodPropContainer from '../IPeriodPropContainer';

import PeriodPropContainerImpl from './PeriodPropContainerImpl';

class PeriodImpl implements IPeriod {
  @Type(() => Date)
  from: Date;

  @Type(() => Date)
  to: Date;

  @ValidateNested()
  @Type(() => PeriodPropContainerImpl)
  prop: IPeriodPropContainer;

  @Expose({ name: ExposePropertyType.STRING })
  period: string;
}

export default PeriodImpl;
