import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-differentials',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="autoridade" class="mb-16 space-y-8" appReveal>
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Diferenciais Axentra</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Autoridade em tecnologia corporativa e entregas estratégicas</h2>
          <p class="mt-6 max-w-xl text-sm leading-7 text-slate-400">Uma operação completa, segura e alinhada a resultados de negócios para empresas que demandam excelência tecnológica.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <article *ngFor="let diff of diffs; let i = index" class="glass-panel rounded-[2rem] border border-white/10 p-7 shadow-soft" appReveal [ngStyle]="{'--delay': (i * 0.12) + 's'}">
            <p class="text-sm uppercase tracking-[0.24em] text-slate-300">{{diff.num}}</p>
            <h3 class="mt-4 text-xl font-semibold text-white">{{diff.title}}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">{{diff.desc}}</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class DifferentialsComponent {
  diffs = [
    { num: '01', title: 'Soluções corporativas completas', desc: 'Da planta física à automação e continuidade digital, atuamos em toda a experiência tecnológica.' },
    { num: '02', title: 'Especialistas em ambientes críticos', desc: 'Serviços feitos para operações que não podem parar, com foco em alta disponibilidade e estabilidade.' },
    { num: '03', title: 'Atendimento consultivo', desc: 'Análise personalizada para garantir a solução certa em cada fase do ciclo de tecnologia.' },
    { num: '04', title: 'Integração ponta a ponta', desc: 'Sistemas, processos e infraestrutura conectados para máxima eficiência e visibilidade.' },
  ];
}
