// TODO Add JSDoc
interface IBaseTopDetail extends IBaseModel {
  rank: number;

  title: string;

  imageUrl: string;

  type: string;

  startDate: Date;

  endDate: Date;

  members: number;

  score: number;
}

export default IBaseTopDetail;
