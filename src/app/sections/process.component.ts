import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="space-y-8" appReveal>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Processo</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Uma jornada alinhada ao crescimento da sua empresa</h2>
          <p class="mt-6 max-w-xl text-sm leading-7 text-slate-400">Processo consultivo e transparente para transformar a infraestrutura e a operação de forma sustentada.</p>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 sm:p-8">
        <div class="absolute inset-y-0 left-12 hidden w-px bg-white/10 sm:block"></div>
        <div class="grid gap-6 sm:grid-cols-5">
          <article class="glass-panel rounded-[1.8rem] border border-white/10 p-6 text-center shadow-soft transition duration-300 hover:-translate-y-1">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">1</div>
            <p class="mt-5 text-lg font-semibold text-white">Diagnóstico</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">Mapeamento da infraestrutura e riscos.</p>
          </article>
          <article class="glass-panel rounded-[1.8rem] border border-white/10 p-6 text-center shadow-soft transition duration-300 hover:-translate-y-1">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">2</div>
            <p class="mt-5 text-lg font-semibold text-white">Planejamento</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">Estratégia escalável e segura para execução.</p>
          </article>
          <article class="glass-panel rounded-[1.8rem] border border-white/10 p-6 text-center shadow-soft transition duration-300 hover:-translate-y-1">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">3</div>
            <p class="mt-5 text-lg font-semibold text-white">Implementação</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">Deploy com governança, qualidade e segurança.</p>
          </article>
          <article class="glass-panel rounded-[1.8rem] border border-white/10 p-6 text-center shadow-soft transition duration-300 hover:-translate-y-1">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">4</div>
            <p class="mt-5 text-lg font-semibold text-white">Monitoramento</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">Visibilidade contínua e alertas inteligentes.</p>
          </article>
          <article class="glass-panel rounded-[1.8rem] border border-white/10 p-6 text-center shadow-soft transition duration-300 hover:-translate-y-1">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">5</div>
            <p class="mt-5 text-lg font-semibold text-white">Evolução contínua</p>
            <p class="mt-3 text-sm leading-7 text-slate-400">Aprimoramento constante com foco em resultados.</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ProcessComponent {}
