import type { ResizerParams } from './types';

/**
 * Breakpoints are matched in insertion order: the first entry whose
 * maxWidth is greater than or equal to the current viewport width wins.
 * `base` must stay last as the fallback for anything wider than tablet.
 */
const resizerParams: ResizerParams = {
  mobile: {
    name: 'mobile',
    width: 375,
    height: 667,
    minWidth: 320,
    minHeight: 480,
    maxWidth: 767,
    fontSize: 16
  },
  tablet: {
    name: 'tablet',
    width: 768,
    height: 1024,
    minWidth: 768,
    minHeight: 700,
    maxWidth: 1279,
    fontSize: 16
  },
  base: {
    name: 'base',
    width: 1920,
    height: 1080,
    minWidth: 1280,
    minHeight: 720,
    maxWidth: Infinity,
    fontSize: 16
  }
};

export default resizerParams;
