import { Type } from 'class-transformer';

import AbstractBaseResponse from 'app/models/impl/abstract-base-response';

import ITopDetail from './top-detail';

abstract class AbstractTop<T extends ITopDetail> extends AbstractBaseResponse {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  private type: Function;

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
