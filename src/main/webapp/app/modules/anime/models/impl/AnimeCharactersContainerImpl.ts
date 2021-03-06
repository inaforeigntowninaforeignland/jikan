import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';
import IStaff from 'app/models/staff/IStaff';
import StaffImpl from 'app/models/staff/impl/StaffImpl';

import IAnimeCharacter from '../IAnimeCharacter';
import IAnimeCharactersContainer from '../IAnimeCharactersContainer';
import AnimeCharacterImpl from '../impl/AnimeCharacterImpl';

class AnimeCharactersContainerImpl extends AbstractBaseResponse implements IAnimeCharactersContainer {
  @ValidateNested()
  @Type(() => AnimeCharacterImpl)
  characters: IAnimeCharacter[];

  @ValidateNested()
  @Type(() => StaffImpl)
  staff: IStaff[];
}

export default AnimeCharactersContainerImpl;
