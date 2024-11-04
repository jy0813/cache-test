export interface CustomError extends Error {
  status: number;
  message: string;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type BodyProps<M> = M extends 'GET' | 'DELETE' ? never : object;


export interface BaseApiRequestProps<T, M extends HttpMethod, R = { [key: string]: T }> {
  method?: M;
  endPoint: string;
  next?: NextFetchRequestConfig;
  transform?: (data: R) => T;
}

interface QueryRequestProps<T, M extends HttpMethod, R = { [key: string]: T }> extends BaseApiRequestProps<T, M, R> {
  method?: Extract<M, 'GET' | 'DELETE'>;
  body?: never;
}

interface MutationRequestProps<T, M extends HttpMethod, R = { [key: string]: T }> extends BaseApiRequestProps<T, M, R> {
  method: Exclude<M, 'GET' | 'DELETE'>;
  body: BodyProps<M>;
}

export type ApiRequestProps<T, M extends HttpMethod, R = { [key: string]: T }> = M extends 'GET' | 'DELETE'
  ? QueryRequestProps<T, M, R>
  : MutationRequestProps<T, M, R>;


const createApiInstance = (baseUrl: string, headers: HeadersInit) => {
  const apiRequest = async <T, M extends HttpMethod, R = { [key: string]: T }>(
    apiRequestProps: ApiRequestProps<T, M, R>
  )  => {
    const { method = 'GET', endPoint, body, next, transform } = apiRequestProps;

    logRequestInfo(method, endPoint);

    const response = await fetch(`${baseUrl}${endPoint}`, {
      method,
      headers,
      body: method !== 'GET' ? JSON.stringify(body) : undefined,
      next,
    });

    const result = await handleApiResponse(response, transform);
    return result;
  };

  const logRequestInfo = (method: HttpMethod, endPoint: string) => {
    const isServer = typeof window === 'undefined';
    const currentTime = new Date().toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
      hour12: false,
    });

    if (process.env.NEXT_PUBLIC_MODE === 'local') {
      console.log(`${isServer ? '서버' : '클라이언트'} 사이드에서 ${endPoint}에 ${currentTime}에 ${method} 요청`);
    }
  };

  const handleApiResponse = async <T, R>(response: Response, transform?: (data: R) => T) => {
    const { status } = response;
    const result = await response.json();

    if (!response.ok) {
      throw createApiError(status, result);
    }

    const data = transform ? transform(result as R) : (result as T);
    return data;
  };



  const createApiError = (status: number, result: any): CustomError => {
    const errorMessage = handleResponseError(status);
    const error = new Error(errorMessage || result.message) as CustomError;
    error.status = status;
    error.message = errorMessage || result.message;
    return error;
  };


  const handleResponseError = (status: number): string | undefined => {
    switch (status) {
      case 401: return '인증하세요~~~';
      case 403: return '권한없습니다~~~';
      case 404: return '페이지없습니다~~~';
      case 500: return '서버에러입니다~~~~';
      default: return undefined;
    }
  };

  const createdApiMethod = {
    get: <T, R = { [key: string]: T }>({ endPoint, next, transform }: { endPoint: string; next?: NextFetchRequestConfig; transform?: (data: R) => T; }) =>
      apiRequest<T, 'GET', R>({ method: 'GET', endPoint, next, transform }),

    post: <T, R = { [key: string]: T }>({ endPoint, body, next, transform }: { endPoint: string; body: object; next?: NextFetchRequestConfig; transform?: (data: R) => T; }) =>
      apiRequest<T, 'POST', R>({ method: 'POST', endPoint, body, next, transform }),

    put: <T, R = { [key: string]: T }>({ endPoint, body, next, transform }: { endPoint: string; body: object; next?: NextFetchRequestConfig; transform?: (data: R) => T; }) =>
      apiRequest<T, 'PUT', R>({ method: 'PUT', endPoint, body, next, transform }),

    patch: <T, R = { [key: string]: T }>({ endPoint, body, next, transform }: { endPoint: string; body: object; next?: NextFetchRequestConfig; transform?: (data: R) => T; }) =>
      apiRequest<T, 'PATCH', R>({ method: 'PATCH', endPoint, body, next, transform }),

    delete: <T, R = { [key: string]: T }>({ endPoint, next, transform }: { endPoint: string; next?: NextFetchRequestConfig; transform?: (data: R) => T; }) =>
      apiRequest<T, 'DELETE', R>({ method: 'DELETE', endPoint, next, transform }),
  };


  return {
    get: createdApiMethod.get,
    post: createdApiMethod.post,
    put: createdApiMethod.put,
    patch: createdApiMethod.patch,
    delete: createdApiMethod.delete,
  };
}


export const apiInstance = createApiInstance('http://localhost:9090/api', {
  'Content-Type': 'application/json',
    Accept: 'application/json',
});


