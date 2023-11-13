import md5 from 'crypto-js/md5';
import { AfdianRequestParams } from '../types';

export interface AfdianRequest {
  user_id: string;
  params?: string;
  ts: number;
}

export interface AfdianSignedRequest {
  user_id: string;
  params?: string;
  ts: number;
  sign: string;
}

export const buildRequest = (userId: string, params?: AfdianRequestParams): AfdianRequest => {
  const req = {
    user_id: userId,
    ts: Math.floor(Date.now() / 1000),
    params: JSON.stringify(params || { empty: true })
  };
  return req;
};

export const signRequest = (token: string, body: AfdianRequest): AfdianSignedRequest => {
  const toSign = `${token}params${body.params}ts${body.ts}user_id${body.user_id}`;
  const sign = md5(toSign).toString();
  return {
    ...body,
    sign
  };
};
