import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="seguranca" class="mb-16 space-y-8" appReveal>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Soluções corporativas</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Serviços premium para operações que não podem falhar</h2>
        </div>
        <p class="max-w-xl text-sm leading-7 text-slate-400">Soluções de infraestrutura, segurança e automação desenhadas para resultados reais em empresas.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <ng-container *ngFor="let service of services; let i = index">
          <article class="glass-panel rounded-[2rem] border border-white/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70" appReveal [ngStyle]="{'--delay': (i * 0.12) + 's'}">
            <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/70 text-sky-300 shadow-glow">
              <span class="text-xl">{{ service.icon }}</span>
            </div>
            <h3 class="mt-5 text-xl font-semibold text-white">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-400">{{ service.description }}</p>
          </article>
        </ng-container>
      </div>
    </section>
  `,
})
export class SolutionsComponent {
  services = [
    { icon: '↔', title: 'Networking Corporativo', description: 'Projetos de conectividade segura e alta performance para ambientes complexos.' },
    { icon: '🛡', title: 'Segurança Eletrônica', description: 'Monitoramento físico e controles integrados para proteção contínua.' },
    { icon: '🔐', title: 'Cibersegurança', description: 'Defesa avançada para proteger dados, aplicações e redes críticas.' },
    { icon: '⚡', title: 'Infraestrutura e Energia', description: 'Arquitetura resiliente com energia redundante e gestão inteligente.' },
    { icon: '🗄', title: 'Data Centers', description: 'Ambientes seguros, escaláveis e gerenciáveis para operações corporativas.' },
    { icon: '🤖', title: 'Automação e IA', description: 'Processos automatizados e inteligência aplicada para decisões rápidas.' },
    { icon: '📞', title: 'Omnichannel', description: 'Experiências sincronizadas entre canais e sistemas empresariais.' },
    { icon: '🔗', title: 'Desenvolvimento e Integrações', description: 'Sistemas conectados com APIs, ERPs e infraestrutura existente.' },
  ];
}
