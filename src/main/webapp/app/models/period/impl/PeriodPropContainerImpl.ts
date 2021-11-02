import { Type } from 'class-transformer';

import IPeriodPropContainer from '../IPeriodPropContainer';
import IPeriodProp from '../IPeriodProp';

import PeriodPropImpl from './PeriodPropImpl';

class PeriodPropContainerImpl implements IPeriodPropContainer {
  @Type(() => PeriodPropImpl)
  from: IPeriodProp;

  @Type(() => PeriodPropImpl)
  to: IPeriodProp;
}

export default PeriodPropContainerImpl;
