const app = require('../../src/app');

describe('\'gateway\' service', () => {
  it('registered the service', () => {
    const service = app.service('gateway');
    expect(service).toBeTruthy();
  });
});
