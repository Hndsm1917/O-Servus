import { computed, Injectable, signal } from '@angular/core';

import resizerParams from './config/resizer-params';
import type { DeviceParams } from './config/types';

type ScreenOrientation = 'portrait' | 'upside-down' | 'clockwise' | 'counterclockwise';

@Injectable({ providedIn: 'root' })
export class ResizerService {
  private readonly viewportWidth = signal(0);
  private readonly viewportHeight = signal(0);

  readonly isResizerActivated = signal(false);
  readonly screenType = signal<ScreenOrientation>('portrait');

  readonly currentConfig = computed<DeviceParams>(() => {
    const width = this.viewportWidth();

    for (const config of Object.values(resizerParams)) {
      if (width <= config.maxWidth) return config;
    }

    return resizerParams['base'];
  });

  readonly fontSize = computed(() => {
    const config = this.currentConfig();
    const horizontalRatio = Math.max(config.minWidth, this.viewportWidth()) / config.width;
    const verticalRatio = Math.max(config.minHeight, this.viewportHeight()) / config.height;

    return config.fontSize * Math.min(horizontalRatio, verticalRatio);
  });

  constructor() {
    this.handleResize();
    this.handleOrientationChange();

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('orientationchange', this.handleOrientationChange);
  }

  private readonly handleResize = (): void => {
    const wasInitialized = this.viewportWidth() !== 0;

    this.viewportWidth.set(window.innerWidth || document.documentElement.clientWidth);
    this.viewportHeight.set(window.innerHeight || document.documentElement.clientHeight);

    if (!wasInitialized) this.isResizerActivated.set(true);
  };

  private readonly handleOrientationChange = (): void => {
    const orientation = (window as { orientation?: number }).orientation;

    if (orientation === undefined) {
      this.screenType.set('portrait');
      return;
    }

    switch (orientation) {
      case 180:
        this.screenType.set('upside-down');
        break;
      case -90:
        this.screenType.set('clockwise');
        break;
      case 90:
        this.screenType.set('counterclockwise');
        break;
      default:
        this.screenType.set('portrait');
    }
  };
}
