import IBaseSearchDetail from '../base/IBaseSearchDetail';

// TODO Add JSDoc
interface ISearchMangaDetail extends IBaseSearchDetail {
  publishing: boolean;

  chapters: number;

  volumes: number;
}

export default ISearchMangaDetail;
