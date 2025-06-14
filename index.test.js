import { debounce, throttle } from './debounceThrottle';

describe('debounce', () => {
  jest.useFakeTimers();

  it('should debounce calls', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    debounced();
    debounced();
    debounced();
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(99);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(1);
    expect(fn).toBeCalledTimes(1);
  });
});

describe('throttle', () => {
  jest.useFakeTimers();

  it('should throttle calls', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    throttled();
    jest.advanceTimersByTime(50);
    throttled();
    jest.advanceTimersByTime(50);
    throttled();
    expect(fn).toBeCalledTimes(1);
    jest.advanceTimersByTime(100);
    throttled();
    expect(fn).toBeCalledTimes(2);
  });
});