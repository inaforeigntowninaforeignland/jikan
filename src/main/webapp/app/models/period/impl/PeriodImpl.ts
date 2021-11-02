import { Expose, Type } from 'class-transformer';

import IPeriod from '../IPeriod';
import IPeriodPropContainer from '../IPeriodPropContainer';

import PeriodPropContainerImpl from './PeriodPropContainerImpl';

class PeriodImpl implements IPeriod {
  @Type(() => Date)
  from: Date;

  @Type(() => Date)
  to: Date;

  @Type(() => PeriodPropContainerImpl)
  prop: IPeriodPropContainer;

  @Expose({ name: 'string' })
  period: string;
}

export default PeriodImpl;
