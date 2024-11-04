export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type BodyProps<M> = M extends 'GET' ? never : object;

interface BaseFetchProps<T, M extends HttpMethod, R> {
  method?: M;
  baseUrl?: string;
  endPoint: string;
  options?: RequestInit;
  transform?: (data: R) => T;
}

interface QueryFetchProps<T, M extends HttpMethod, R>
  extends BaseFetchProps<T, M, R> {
  method?: Extract<M, 'GET'>;
  body?: never;
}

interface MutationFetchProps<T, M extends HttpMethod, R>
  extends BaseFetchProps<T, M, R> {
  method: Exclude<M, 'GET'>;
  body: BodyProps<M>;
}

export type UseFetchProps<T, M extends HttpMethod, R> = M extends 'GET'
  ? QueryFetchProps<T, M, R>
  : MutationFetchProps<T, M, R>;
