import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../ui/primary-button.component';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, RevealDirective],
  template: `
    <section id="contato" class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90 p-8 shadow-glow sm:p-12" appReveal>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),transparent_24%)]"></div>
      <div class="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Próximo passo</p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Sua infraestrutura está preparada para o crescimento da sua empresa?</h2>
          <p class="mt-5 max-w-xl text-sm leading-7 text-slate-300">Transforme tecnologia em vantagem competitiva com soluções corporativas escaláveis e gestão de alta disponibilidade.</p>
        </div>
        <div class="flex flex-col items-start gap-4 sm:flex-row sm:justify-end">
          <ax-button href="#contato">Agendar diagnóstico</ax-button>
          <ax-button variant="ghost" href="#contato">Converse com um especialista</ax-button>
        </div>
      </div>
    </section>
  `,
})
export class CtaFinalComponent {}
