import IBaseResponse from './IBaseResponse';
import IPictureDetail from './IPictureDetail';

/**
 * Pictures container
 */
interface IPicturesContainer extends IBaseResponse {
  /**
   * Pictures
   */
  pictures: IPictureDetail[];
}

export default IPicturesContainer;
