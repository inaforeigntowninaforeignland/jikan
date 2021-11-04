/**
 * Base search detail
 */
// TODO Add JSDoc
interface IBaseSearchDetail {
  id: number;

  url: string;

  imageUrl: string;

  title: string;

  synopsis: string;

  type: string;

  score: number;

  startDate: Date;

  endDate: Date;

  members: number;
}

export default IBaseSearchDetail;
