import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="infra" class="space-y-8" appReveal>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Desafios corporativos</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Problemas que travam operações críticas</h2>
        </div>
        <p class="max-w-xl text-sm leading-7 text-slate-400">Mostramos as dores que empresas de alto impacto enfrentam quando tecnologia não entrega segurança, estabilidade e integração.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div class="glass-panel rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70">
          <p class="text-sm uppercase tracking-[0.24em] text-sky-300">1</p>
          <h3 class="mt-4 text-xl font-semibold text-white">Falhas de infraestrutura</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">Ambientes instáveis que comprometem disponibilidade e produtividade.</p>
        </div>
        <div class="glass-panel rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70">
          <p class="text-sm uppercase tracking-[0.24em] text-sky-300">2</p>
          <h3 class="mt-4 text-xl font-semibold text-white">Riscos de segurança</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">Vulnerabilidades expõem dados e colocam operações em risco.</p>
        </div>
        <div class="glass-panel rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70">
          <p class="text-sm uppercase tracking-[0.24em] text-sky-300">3</p>
          <h3 class="mt-4 text-xl font-semibold text-white">Baixa eficiência</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">Processos manuais e sistemas desconectados reduzem velocidade e margem.</p>
        </div>
        <div class="glass-panel rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70">
          <p class="text-sm uppercase tracking-[0.24em] text-sky-300">4</p>
          <h3 class="mt-4 text-xl font-semibold text-white">Indisponibilidade</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">Paradas inesperadas geram prejuízo e fragilizam operação.</p>
        </div>
        <div class="glass-panel rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70">
          <p class="text-sm uppercase tracking-[0.24em] text-sky-300">5</p>
          <h3 class="mt-4 text-xl font-semibold text-white">Integrações fragmentadas</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">Sistemas que não conversam deixam dados desconectados.</p>
        </div>
        <div class="glass-panel rounded-[1.8rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70">
          <p class="text-sm uppercase tracking-[0.24em] text-sky-300">6</p>
          <h3 class="mt-4 text-xl font-semibold text-white">Gargalos tecnológicos</h3>
          <p class="mt-3 text-sm leading-7 text-slate-400">Lentidão operacional limita crescimento e resposta em tempo real.</p>
        </div>
      </div>
    </section>
  `,
})
export class ProblemsComponent {}
