export const environment = {
  production: true,
  name: 'prod',
  config: {
    logging: {
      console: true
    },
    api: {
      protocol: 'http://',
      hostname: 'localhost',
      version: 'api/v1',
      services: {
        query: {
          port: 8080
        }
      }
    }
  }
};
