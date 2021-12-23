import uid from '../index.js';

describe('Easy uid module', () => {
  it('should generate random token as string', () => {
    expect(typeof uid() === 'string').toBeTruthy();
  });

  it('should generate different token for two calling that method', () => {
    expect(uid() !== uid()).toBeTruthy();
  });

  it('should generate over milion unique ids', () => {
    let cache = {};

    for (let i = 0; i < 2_000_000; i++) {
      let id = uid();

      if (cache[id]) {
        expect(true).toBeFalsy();
      }

      cache[id] = true;
    }

    expect(true).toBeTruthy();
  });
});
