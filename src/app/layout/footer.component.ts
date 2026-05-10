import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="border-t border-white/10 bg-surface/90 py-10 text-slate-400 backdrop-blur-lg">
      <div class="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-12 xl:flex-row xl:items-center xl:justify-between">
        <div class="space-y-4">
          <a href="#home" class="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-100">
            <img src="assets/logo.png" alt="Axentra Tecnologia" class="h-10 w-auto object-contain" />
            Axentra Tecnologia
          </a>
          <p class="max-w-md text-sm leading-6 text-slate-400">Infraestrutura corporativa, cibersegurança, automação e integração de sistemas para operações críticas.</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Links</h3>
            <ul class="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#home" class="hover:text-white transition">Home</a></li>
              <li><a href="#infra" class="hover:text-white transition">Infraestrutura</a></li>
              <li><a href="#seguranca" class="hover:text-white transition">Segurança</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Contato</h3>
            <p class="mt-4 text-sm leading-6 text-slate-400">contato@axentra.com.br<br>+55 11 4000-1234</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Redes</h3>
            <ul class="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="#" class="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" class="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-10 max-w-7xl px-6 text-center text-xs text-slate-500 sm:px-8 lg:px-12">
        <p>© 2026 Axentra Tecnologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
