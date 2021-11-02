import { Expose } from 'class-transformer';

import IRelatedSubType from '../IRelatedSubType';

class RelatedSubTypeImpl implements IRelatedSubType {
  @Expose({ name: 'mal_id' })
  id: number;

  type: string;

  name: string;

  url: string;
}

export default RelatedSubTypeImpl;
