import IBaseResponse from 'app/models/IBaseResponse';

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
}

export default IAnime;
