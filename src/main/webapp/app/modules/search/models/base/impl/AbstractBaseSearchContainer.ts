import { ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';
import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';

import IBaseSearchContainer from '../IBaseSearchContainer';
import IBaseSearchDetail from '../IBaseSearchDetail';

abstract class AbstractBaseSearchContainer<T extends IBaseSearchDetail> extends AbstractBaseResponse implements IBaseSearchContainer<T> {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;

  @ValidateNested()
  @Type(options => {
    return (options?.newObject as AbstractBaseSearchContainer<T>).type;
  })
  results: T[];

  @Expose({ name: ExposePropertyType.LAST_PAGE })
  lastPage;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(type: Function) {
    super();

    this.type = type;
  }
}

export default AbstractBaseSearchContainer;
