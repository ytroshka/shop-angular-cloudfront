import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://zzvdqullrj.execute-api.eu-central-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://e6w0un5hz3.execute-api.eu-central-1.amazonaws.com/dev',
    bff: 'https://zzvdqullrj.execute-api.eu-central-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: false,
    cart: false,
  },
};
