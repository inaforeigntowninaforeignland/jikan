interface IBaseResponse {
  requestCacheExpiry: number;

  requestCached: boolean;

  requestHash: string;
}

export default IBaseResponse;
