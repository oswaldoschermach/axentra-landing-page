import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-insights',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 space-y-8" appReveal>
      <div class="mb-8">
        <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Conteúdo</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Insights & Blog</h2>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        <article *ngFor="let post of posts" class="glass-panel rounded-2xl p-6 flex flex-col shadow-soft border border-white/10">
          <div class="font-semibold text-lg text-white mb-2">{{post.title}}</div>
          <div class="text-xs text-sky-300 mb-4">{{post.date}}</div>
          <div class="text-slate-300 mb-4">{{post.summary}}</div>
          <a [href]="post.link" target="_blank" class="text-sky-400 hover:underline mt-auto font-semibold">Ler mais</a>
        </article>
      </div>
    </section>
  `
})
export class BlogInsightsComponent {
  posts = [
    { title: 'Tendências em Cibersegurança 2026', date: '10/05/2026', summary: 'Como proteger sua empresa dos novos riscos digitais.', link: '#' },
    { title: 'Automação para Operações Críticas', date: '02/05/2026', summary: 'Reduza falhas e aumente performance com automação.', link: '#' },
    { title: 'Infraestrutura Escalável', date: '25/04/2026', summary: 'Como preparar sua TI para o crescimento do negócio.', link: '#' },
  ];
}
