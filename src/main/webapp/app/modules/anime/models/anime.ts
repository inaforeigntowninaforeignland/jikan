import IBaseResponse from 'app/models/base-response';

// TODO Add JSDoc
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
