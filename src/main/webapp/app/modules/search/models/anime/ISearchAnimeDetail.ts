import IBaseSearchDetail from '../base/IBaseSearchDetail';

// TODO Add JSDoc
interface ISearchAnimeDetail extends IBaseSearchDetail {
  airing: boolean;

  episodes: number;

  rated: string;
}

export default ISearchAnimeDetail;
