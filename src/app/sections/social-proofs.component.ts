import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-social-proofs',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="space-y-8" appReveal>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Prova social</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Resultados comprovados em operações empresariais</h2>
        </div>
        <p class="max-w-xl text-sm leading-7 text-slate-400">Metas de alta disponibilidade, mitigação de falhas e entregas corporativas para clientes exigentes.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 text-center shadow-soft">
          <p class="text-3xl font-semibold text-white">+150</p>
          <p class="mt-3 text-sm text-slate-400">Projetos entregues</p>
        </div>
        <div class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 text-center shadow-soft">
          <p class="text-3xl font-semibold text-white">99.9%</p>
          <p class="mt-3 text-sm text-slate-400">Disponibilidade média</p>
        </div>
        <div class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 text-center shadow-soft">
          <p class="text-3xl font-semibold text-white">+40</p>
          <p class="mt-3 text-sm text-slate-400">Empresas atendidas</p>
        </div>
        <div class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 text-center shadow-soft">
          <p class="text-3xl font-semibold text-white">-60%</p>
          <p class="mt-3 text-sm text-slate-400">Falhas operacionais</p>
        </div>
      </div>

      <div class="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 shadow-soft sm:grid-cols-2">
        <div class="space-y-2">
          <p class="text-sm uppercase tracking-[0.28em] text-slate-400">Confiança de parceiros</p>
          <div class="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2">Cisco</span>
            <span class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2">Fortinet</span>
            <span class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2">AWS</span>
            <span class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2">Microsoft</span>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-sm uppercase tracking-[0.28em] text-slate-400">Desempenho</p>
          <div class="grid gap-3 text-sm text-slate-300">
            <div class="flex items-center justify-between rounded-3xl bg-slate-900/75 px-4 py-3">
              <span>Tempo de entrega reduzido</span>
              <span class="text-sky-300">34%</span>
            </div>
            <div class="flex items-center justify-between rounded-3xl bg-slate-900/75 px-4 py-3">
              <span>Redução de incidentes</span>
              <span class="text-emerald-300">48%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SocialProofsComponent {}
