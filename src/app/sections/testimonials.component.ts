import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 space-y-8" appReveal>
      <div class="mb-8">
        <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Clientes</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Depoimentos</h2>
      </div>
      <div class="flex flex-row gap-6 max-w-5xl w-full">
        <div *ngFor="let t of testimonials" class="glass-panel flex flex-col items-center p-6 rounded-2xl shadow-soft border border-white/10 min-w-[320px] max-w-[320px]">
          <img [src]="t.photo" [alt]="t.name" class="w-16 h-16 rounded-full object-cover mb-4 border-2 border-sky-400" />
          <p class="text-slate-200 text-base italic mb-4 text-center">“{{t.text}}”</p>
          <div class="text-center">
            <div class="font-semibold text-white">{{t.name}}</div>
            <div class="text-xs text-sky-300">{{t.role}}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'João Silva', role: 'Diretor de TI', photo: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'A Axentra transformou nossa infraestrutura e garantiu alta disponibilidade.' },
    { name: 'Maria Souza', role: 'CEO', photo: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Equipe consultiva, soluções inovadoras e suporte excepcional.' },
    { name: 'Carlos Lima', role: 'Gerente de Operações', photo: 'https://randomuser.me/api/portraits/men/65.jpg', text: 'Reduzimos falhas e aumentamos a performance com a Axentra.' },
  ];
}
