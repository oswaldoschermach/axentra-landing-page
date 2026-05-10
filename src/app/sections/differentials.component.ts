import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-differentials',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="autoridade" class="space-y-8" appReveal>
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Diferenciais Axentra</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Autoridade em tecnologia corporativa e entregas estratégicas</h2>
          <p class="mt-6 max-w-xl text-sm leading-7 text-slate-400">Uma operação completa, segura e alinhada a resultados de negócios para empresas que demandam excelência tecnológica.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <article class="glass-panel rounded-[2rem] border border-white/10 p-7 shadow-soft">
            <p class="text-sm uppercase tracking-[0.24em] text-slate-300">01</p>
            <h3 class="mt-4 text-xl font-semibold text-white">Soluções corporativas completas</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">Da planta física à automação e continuidade digital, atuamos em toda a experiência tecnológica.</p>
          </article>
          <article class="glass-panel rounded-[2rem] border border-white/10 p-7 shadow-soft">
            <p class="text-sm uppercase tracking-[0.24em] text-slate-300">02</p>
            <h3 class="mt-4 text-xl font-semibold text-white">Especialistas em ambientes críticos</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">Serviços feitos para operações que não podem parar, com foco em alta disponibilidade e estabilidade.</p>
          </article>
          <article class="glass-panel rounded-[2rem] border border-white/10 p-7 shadow-soft">
            <p class="text-sm uppercase tracking-[0.24em] text-slate-300">03</p>
            <h3 class="mt-4 text-xl font-semibold text-white">Atendimento consultivo</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">Análise personalizada para garantir a solução certa em cada fase do ciclo de tecnologia.</p>
          </article>
          <article class="glass-panel rounded-[2rem] border border-white/10 p-7 shadow-soft">
            <p class="text-sm uppercase tracking-[0.24em] text-slate-300">04</p>
            <h3 class="mt-4 text-xl font-semibold text-white">Integração ponta a ponta</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">Sistemas, processos e infraestrutura conectados para máxima eficiência e visibilidade.</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class DifferentialsComponent {}
