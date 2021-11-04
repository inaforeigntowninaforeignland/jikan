import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';

import IBaseTopDetail from '../IBaseTopDetail';
import IBaseTopContainer from '../IBaseTopContainer';

abstract class AbstractBaseTopContainer<T extends IBaseTopDetail> extends AbstractBaseResponse implements IBaseTopContainer<T> {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;

  @ValidateNested()
  @Type(options => {
    return (options?.newObject as AbstractBaseTopContainer<T>).type;
  })
  top: T[];

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(type: Function) {
    super();

    this.type = type;
  }
}

export default AbstractBaseTopContainer;
