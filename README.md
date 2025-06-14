# debounce-throttle-utils
[![NPM version](https://img.shields.io/npm/v/debounce-throttle-util.svg)](https://www.npmjs.com/package/debounce-throttle-util)
[![NPM downloads](https://img.shields.io/npm/dm/debounce-throttle-util.svg)](https://www.npmjs.com/package/debounce-throttle-util)
[![GitHub stars](https://img.shields.io/github/stars/gsteja2307/debounce-throttle-util.svg)](https://github.com/gsteja2307/debounce-throttle-util/stargazers)

A tiny, dependency-free debounce/throttle utility for browser or Node.js.

## Install

```bash
npm install debounce-throttle-util
```

## Usage

```typescript
import { debounce, throttle } from 'debounce-throttle-util';

const debouncedFn = debounce(() => console.log('Debounced!'), 200);
debouncedFn();
debouncedFn(); // Only one log after 200ms

const throttledFn = throttle(() => console.log('Throttled!'), 200);
throttledFn();
throttledFn(); // Only one log every 200ms
```