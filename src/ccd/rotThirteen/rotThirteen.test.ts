import { rotThirteen } from './rotThirteen';

describe('rot-13 Test Suite', () => {
  test('Hello, World -> URYYB, JBEYQ', () => {
    expect(rotThirteen('Hello, World')).toEqual('URYYB, JBEYQ');
  });
  test('hello, world -> URYYB, JBEYQ', () => {
    expect(rotThirteen('hello, world')).toEqual('URYYB, JBEYQ');
  });
  test('_hello1, $world( -> _URYYB1, $JBEYQ(', () => {
    expect(rotThirteen('_hello1, $world(')).toEqual('_URYYB1, $JBEYQ(');
  });
});
