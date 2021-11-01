import IBaseResponse from 'app/models/IBaseResponse';

import ITopDetail from './ITopDetail';

// TODO Add JSDoc
interface ITop<T extends ITopDetail> extends IBaseResponse {
  /**
   * @see {@link https://github.com/typestack/class-transformer#working-with-generics}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;

  top: T[];
}

export default ITop;
