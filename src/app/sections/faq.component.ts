import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 space-y-8" appReveal>
      <div class="flex flex-col items-center mb-8">
        <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Dúvidas</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl text-center">Perguntas Frequentes</h2>
      </div>
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">
          <div *ngFor="let faq of faqs; let i = index" class="glass-panel rounded-xl border border-white/10">
            <button (click)="open = open === i ? null : i" class="w-full text-left bg-transparent rounded-xl p-4 text-white font-semibold flex justify-between items-center focus:outline-none transition">
              {{faq.q}}
              <span class="ml-4">{{open === i ? '-' : '+'}}</span>
            </button>
            <div *ngIf="open === i" class="p-4 text-slate-300 bg-black/30 rounded-b-xl animate-fade-in">
              {{faq.a}}
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FaqComponent {
  open: number|null = null;
  faqs = [
    { q: 'Quais segmentos a Axentra atende?', a: 'Atendemos empresas de todos os portes, com foco em operações críticas e alta disponibilidade.' },
    { q: 'Como funciona o diagnóstico gratuito?', a: 'Um especialista avalia sua infraestrutura e propõe melhorias sem compromisso.' },
    { q: 'A Axentra oferece suporte 24/7?', a: 'Sim, temos planos de suporte contínuo para garantir estabilidade.' },
    { q: 'Vocês atuam em todo o Brasil?', a: 'Sim, atendemos clientes em todo o território nacional.' },
    { q: 'Quais tecnologias vocês dominam?', a: 'Trabalhamos com as principais plataformas do mercado, como Cisco, Fortinet, AWS, Microsoft e outras.' },
    { q: 'Como é feito o acompanhamento pós-projeto?', a: 'Oferecemos suporte e monitoramento contínuo para garantir o sucesso das soluções implementadas.' },
    { q: 'Posso solicitar um orçamento personalizado?', a: 'Sim, basta entrar em contato e um especialista irá entender sua demanda.' },
    { q: 'Vocês oferecem treinamentos?', a: 'Sim, oferecemos treinamentos para equipes técnicas e operacionais.' },
  ];
}
