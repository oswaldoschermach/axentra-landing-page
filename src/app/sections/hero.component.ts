import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';
import { PrimaryButtonComponent } from '../ui/primary-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, RevealDirective],
  template: `
    <section id="home" class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/95 p-6 shadow-soft sm:p-10 lg:flex lg:items-center lg:gap-8 lg:p-12" appReveal>
      <div class="absolute -right-10 top-12 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>
      <div class="absolute left-0 top-0 h-40 w-40 rounded-full bg-teal-400/5 blur-3xl"></div>

      <div class="relative z-10 flex-1">
        <span class="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.36em] text-sky-300">Infraestrutura empresarial</span>
        <h1 class="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Tecnologia corporativa preparada para operações que não podem parar</h1>
        <p class="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Infraestrutura, segurança, automação e inteligência aplicada para empresas que exigem performance, estabilidade e escalabilidade.</p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <ax-button href="#contato">Solicitar diagnóstico</ax-button>
          <ax-button variant="ghost" href="#contato">Falar com especialista</ax-button>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2">
          <div class="glass-panel rounded-3xl border border-white/10 p-5">
            <p class="text-sm uppercase tracking-[0.32em] text-slate-400">Projetos entregues</p>
            <p class="mt-3 text-3xl font-semibold text-white">+150</p>
          </div>
          <div class="glass-panel rounded-3xl border border-white/10 p-5">
            <p class="text-sm uppercase tracking-[0.32em] text-slate-400">Disponibilidade média</p>
            <p class="mt-3 text-3xl font-semibold text-white">99.9%</p>
          </div>
        </div>
      </div>

      <div class="relative z-10 mt-12 lg:mt-0 lg:w-1/2">
        <div class="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <div class="absolute -left-8 top-10 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl"></div>
          <div class="flex items-center justify-between gap-4 text-slate-300">
            <div>
              <p class="text-xs uppercase tracking-[0.32em] text-slate-400">Visão do Data Center</p>
              <p class="mt-3 text-sm text-slate-200">Rede operacional e painel de status em tempo real</p>
            </div>
            <span class="rounded-2xl bg-slate-950/70 px-3 py-2 text-xs uppercase tracking-[0.26em] text-slate-200">Enterprise</span>
          </div>

          <div class="mt-8 grid gap-4">
            <div class="rounded-3xl border border-white/10 bg-slate-950/75 p-5">
              <div class="flex items-center justify-between text-slate-300">
                <span class="text-xs uppercase tracking-[0.28em]">SAÍDA</span>
                <span class="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">Segurança ativa</span>
              </div>
              <div class="mt-5 flex items-center justify-between gap-4">
                <div>
                  <p class="text-3xl font-semibold text-white">78%</p>
                  <p class="mt-2 text-sm text-slate-400">Operações em malha segura</p>
                </div>
                <div class="h-14 w-14 rounded-3xl bg-sky-500/15"></div>
              </div>
            </div>
            <div class="rounded-3xl border border-white/10 bg-slate-950/75 p-5">
              <div class="flex items-center justify-between text-slate-300">
                <span class="text-xs uppercase tracking-[0.28em]">MÉTRICAS</span>
                <span class="text-sm text-slate-400">Últimos 30 dias</span>
              </div>
              <div class="mt-5 grid gap-3">
                <div class="grid grid-cols-[1fr_2rem] items-center gap-3">
                  <span class="block h-2 rounded-full bg-sky-500/60"></span>
                  <span class="text-right text-sm text-slate-300">99.9%</span>
                </div>
                <div class="grid grid-cols-[1fr_2rem] items-center gap-3">
                  <span class="block h-2 rounded-full bg-emerald-400/60"></span>
                  <span class="text-right text-sm text-slate-300">+40 clientes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
