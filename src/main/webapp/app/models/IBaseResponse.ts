// TODO Add JSDoc
interface IBaseResponse {
  requestCacheExpiry: number;

  requestCached: boolean;

  requestHash: string;

  /**
   * Total items
   */
  contentLength: number;
}

export default IBaseResponse;
