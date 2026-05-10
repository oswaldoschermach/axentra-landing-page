import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="space-y-3">
      <p class="text-sm uppercase tracking-[0.28em] text-sky-300">{{ eyebrow }}</p>
      <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ title }}</h2>
      <p class="max-w-2xl text-sm leading-7 text-slate-400">{{ description }}</p>
    </div>
  `,
})
export class SectionTitleComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() description = '';
}
