import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ax-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      [href]="href"
      [attr.target]="target || null"
      class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
      [ngClass]="buttonClass"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class PrimaryButtonComponent {
  @Input() href = '#';
  @Input() target?: string;
  @Input() variant: 'solid' | 'ghost' = 'solid';

  get buttonClass(): string {
    return this.variant === 'ghost'
      ? 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10'
      : 'bg-sky-500 text-slate-950 shadow-[0_20px_120px_rgba(56,189,248,0.18)] hover:bg-sky-400';
  }
}
