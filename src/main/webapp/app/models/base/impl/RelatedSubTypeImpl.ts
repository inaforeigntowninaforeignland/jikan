import IRelatedSubType from '../IRelatedSubType';

import AbstractBaseModel from './AbstractBaseModel';

class RelatedSubTypeImpl extends AbstractBaseModel implements IRelatedSubType {
  type: string;

  name: string;
}

export default RelatedSubTypeImpl;
