import PositionType from './enums/PositionType';

// TODO Add JSDoc
interface IStaff {
  id: number;

  url: string;

  name: string;

  imageUrl: string;

  positions: PositionType[];
}

export default IStaff;
