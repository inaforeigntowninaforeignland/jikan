// TODO Add JSDoc
interface ITopDetail {
  /**
   * ID
   */
  id: number;

  rank: number;

  title: string;

  url: string;

  imageUrl: string;

  type: string;

  startDate: Date;

  endDate: Date;

  members: number;

  score: number;
}

export default ITopDetail;
