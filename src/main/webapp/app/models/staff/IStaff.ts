import PositionType from './enums/PositionType';

// TODO Add JSDoc
interface IStaff extends IBaseModel {
  name: string;

  imageUrl: string;

  positions: PositionType[];
}

export default IStaff;
