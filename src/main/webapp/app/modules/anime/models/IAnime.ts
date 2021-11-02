import IBaseResponse from 'app/models/base/IBaseResponse';
import IRelatedSubType from 'app/models/base/IRelatedSubType';
import IPeriod from 'app/models/period/IPeriod';

// TODO Add JSDoc Describe other fields
interface IAnime extends IBaseResponse {
  id: number;

  imageUrl: string;

  trailerUrl: string;

  title: string;

  titleEnglish: string;

  titleJapanese: string;

  titleSynonyms: string[];

  /**
   * Description
   */
  synopsis: string;

  score: number;

  producers: IRelatedSubType[];

  /**
   * Period
   */
  aired: IPeriod;
}

export default IAnime;
