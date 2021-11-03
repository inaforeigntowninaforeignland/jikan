import IBaseResponse from 'app/models/base/IBaseResponse';
import IStaff from 'app/models/staff/IStaff';

import IAnimeCharacter from './IAnimeCharacter';

/**
 * Anime characters container
 */
interface IAnimeCharactersContainer extends IBaseResponse {
  /**
   * Characters
   */
  characters: IAnimeCharacter[];

  /**
   * Staff
   */
  staff: IStaff[];
}

export default IAnimeCharactersContainer;
