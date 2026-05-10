import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-animated-number',
  standalone: true,
  imports: [CommonModule],
  template: `<span>{{prefix}}{{displayValue}}{{suffix}}</span>`
})
export class AnimatedNumberComponent implements AfterViewInit {
  @Input() value: string | number = 0;
  @Input() duration = 1500;
  @Input() autoStart = false;
  displayValue: string | number = 0;
  prefix = '';
  suffix = '';
  private observer!: IntersectionObserver;
  private decimals = 0;

  constructor(private readonly el: ElementRef) {}

  ngAfterViewInit() {
    const val = typeof this.value === 'string' ? this.value : String(this.value);
    const regex = /^([+-]?)(\d+\.?\d*)(.*)/;
    const match = regex.exec(val);
    let num = 0;
    if (match) {
      this.prefix = match[1] || '';
      num = Number.parseFloat(match[2]);
      this.suffix = match[3] || '';
      this.decimals = match[2].includes('.') ? 1 : 0;
    }

    // Para autoStart, mostra o valor final imediatamente para nunca exibir 0
    if (this.autoStart) {
      this.displayValue = this.decimals ? num.toFixed(1) : num;
    }

    if (!this.autoStart) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animate(num);
            this.observer.disconnect();
          }
        });
      }, { threshold: 0.3 });
      this.observer.observe(this.el.nativeElement);
    }
  }

  animate(end: number) {
    const duration = this.duration;
    const startTime = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const value = easedProgress * end;
      this.displayValue = this.decimals ? value.toFixed(1) : Math.floor(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.displayValue = this.decimals ? end.toFixed(1) : end;
      }
    };
    requestAnimationFrame(step);
  }
}

@Component({
  selector: 'app-social-proofs',
  standalone: true,
  imports: [CommonModule, RevealDirective, AnimatedNumberComponent],
  template: `
    <section class="mb-16 space-y-8" appReveal>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Prova social</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Resultados comprovados em operações empresariais</h2>
        </div>
        <p class="max-w-xl text-sm leading-7 text-slate-400">Metas de alta disponibilidade, mitigação de falhas e entregas corporativas para clientes exigentes.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div *ngFor="let proof of proofs; let i = index" class="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 text-center shadow-soft" appReveal [ngStyle]="{'--delay': (i * 0.12) + 's'}">
          <app-animated-number [value]="proof.value" class="text-3xl font-semibold text-white"></app-animated-number>
          <p class="mt-3 text-sm text-slate-400">{{proof.label}}</p>
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
export class SocialProofsComponent {
  proofs = [
    { value: '+150', label: 'Projetos entregues' },
    { value: '99.9%', label: 'Disponibilidade média' },
    { value: '+40', label: 'Empresas atendidas' },
    { value: '-60%', label: 'Falhas operacionais' },
  ];
}
