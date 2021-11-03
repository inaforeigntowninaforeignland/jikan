import IBaseResponse from 'app/models/base/IBaseResponse';

import IBaseTopDetail from './IBaseTopDetail';

// TODO Add JSDoc
interface IBaseTop<T extends IBaseTopDetail> extends IBaseResponse {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;

  top: T[];
}

export default IBaseTop;
