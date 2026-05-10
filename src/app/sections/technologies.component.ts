import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="space-y-8" appReveal>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Tecnologias</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Parcerias e integrações estratégicas</h2>
          <p class="mt-6 max-w-xl text-sm leading-7 text-slate-400">Apoio tecnológico com plataformas maduras para infraestrutura e automação enterprise.</p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">Cisco</div>
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">Fortinet</div>
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">Intelbras</div>
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">Mikrotik</div>
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">Ubiquiti</div>
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">AWS</div>
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">Microsoft</div>
        <div class="glass-panel rounded-[2rem] border border-white/10 p-6 text-center text-slate-300">Dell</div>
      </div>
    </section>
  `,
})
export class TechnologiesComponent {}
