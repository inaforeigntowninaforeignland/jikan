import { Type } from 'class-transformer';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';

import ITopDetail from '../ITopDetail';
import ITop from '../ITop';

abstract class AbstractTop<T extends ITopDetail> extends AbstractBaseResponse implements ITop<T> {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;

  @Type(options => {
    return (options?.newObject as AbstractTop<T>).type;
  })
  top: T[];

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(type: Function) {
    super();

    this.type = type;
  }
}

export default AbstractTop;
