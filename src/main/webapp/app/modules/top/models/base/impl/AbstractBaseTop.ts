import { Type } from 'class-transformer';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';

import IBaseTopDetail from '../IBaseTopDetail';
import IBaseTop from '../IBaseTop';

abstract class AbstractBaseTop<T extends IBaseTopDetail> extends AbstractBaseResponse implements IBaseTop<T> {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;

  @Type(options => {
    return (options?.newObject as AbstractBaseTop<T>).type;
  })
  top: T[];

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(type: Function) {
    super();

    this.type = type;
  }
}

export default AbstractBaseTop;
