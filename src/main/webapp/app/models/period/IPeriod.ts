import IPeriodPropContainer from './IPeriodPropContainer';

// TODO Add JSDoc
interface IPeriod {
  from: Date;

  to: Date;

  prop: IPeriodPropContainer;

  period: string;
}

export default IPeriod;
