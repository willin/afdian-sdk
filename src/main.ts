import fetch from 'isomorphic-unfetch';
import api from './constants/api';
import { signRequest, buildRequest } from './utils/request';
import {
  AfdianClientOptions,
  AfdianRequestParams,
  AfdianResponse,
  AfdianOrderResponse,
  AfdianSponsorResponse,
  AfdianWebhookResponse
} from './types';

export class Afdian {
  private readonly userId: string;

  private readonly token: string;

  constructor(opts: AfdianClientOptions) {
    const { userId, token } = opts;
    this.userId = userId;
    this.token = token;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private send(url: string, params?: AfdianRequestParams) {
    const signed = signRequest(this.token, buildRequest(this.userId, params));
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signed)
    }).then((res) => res.json());
  }

  /* eslint-disable @typescript-eslint/no-unsafe-return */
  ping(): Promise<AfdianResponse> {
    return this.send(api.ping);
  }

  queryOrder(page: number): Promise<AfdianOrderResponse> {
    return this.send(api.queryOrder, { page });
  }

  querySponsor(page: number): Promise<AfdianSponsorResponse> {
    return this.send(api.querySponsor, { page });
  }

  // eslint-disable-next-line class-methods-use-this
  webhookOrder(context: unknown): AfdianWebhookResponse | Promise<AfdianWebhookResponse> {
    return context as AfdianWebhookResponse;
  }
}
