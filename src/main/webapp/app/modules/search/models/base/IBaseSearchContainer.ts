import IBaseResponse from 'app/models/base/IBaseResponse';

import IBaseSearchDetail from './IBaseSearchDetail';

// TODO Add JSDoc
interface IBaseSearchContainer<T extends IBaseSearchDetail> extends IBaseResponse {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;

  results: T[];

  lastPage: number;
}

export default IBaseSearchContainer;
