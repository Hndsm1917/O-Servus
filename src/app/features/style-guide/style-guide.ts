import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { LocaleService } from '../../core/i18n/locale.service';

interface ColorSwatch {
  label: string;
  token: string;
  dark: boolean;
}

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.html',
  styleUrl: './style-guide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleGuide {
  protected readonly locale = inject(LocaleService);

  protected readonly redSwatches: ColorSwatch[] = [
    { label: '50', token: '--color-red-50', dark: false },
    { label: '100', token: '--color-red-100', dark: false },
    { label: '200', token: '--color-red-200', dark: false },
    { label: '300', token: '--color-red-300', dark: true },
    { label: '500', token: '--color-red-500', dark: true },
    { label: '600', token: '--color-red-600', dark: true },
    { label: '700', token: '--color-red-700', dark: true },
    { label: '900', token: '--color-red-900', dark: true }
  ];

  protected readonly graphiteSwatches: ColorSwatch[] = [
    { label: '50', token: '--color-graphite-50', dark: false },
    { label: '100', token: '--color-graphite-100', dark: false },
    { label: '200', token: '--color-graphite-200', dark: false },
    { label: '300', token: '--color-graphite-300', dark: false },
    { label: '400', token: '--color-graphite-400', dark: false },
    { label: '500', token: '--color-graphite-500', dark: true },
    { label: '600', token: '--color-graphite-600', dark: true },
    { label: '700', token: '--color-graphite-700', dark: true },
    { label: '800', token: '--color-graphite-800', dark: true },
    { label: '900', token: '--color-graphite-900', dark: true }
  ];

  protected readonly semanticSwatches: ColorSwatch[] = [
    { label: 'Success', token: '--text-success', dark: true },
    { label: 'Warning', token: '--text-warning', dark: true },
    { label: 'Danger', token: '--text-danger', dark: true },
    { label: 'Gold', token: '--color-gold-500', dark: true }
  ];

  protected readonly dots = [0, 1, 2, 3];
  protected readonly activeDot = signal(0);
  protected readonly sliderValue = signal(40);

  protected setActiveDot(index: number): void {
    this.activeDot.set(index);
  }

  protected onSliderInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.sliderValue.set(Number(target.value));
  }
}
