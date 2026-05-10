import { HostListener, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../ui/primary-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-surface/80 backdrop-blur-xl transition duration-500" [class.border-white/10]="scrolled()" [class.bg-surface/95]="scrolled()">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 sm:px-8 lg:px-12">
        <a href="#home" class="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-100">
          <img src="/assets/logo.png" alt="Axentra Tecnologia" class="h-10 w-auto object-contain" />
        </a>

        <nav class="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          <a href="#home" class="transition hover:text-white">Soluções</a>
          <a href="#infra" class="transition hover:text-white">Infraestrutura</a>
          <a href="#seguranca" class="transition hover:text-white">Segurança</a>
          <a href="#automacao" class="transition hover:text-white">Automação</a>
          <a href="#autoridade" class="transition hover:text-white">Sobre</a>
          <a href="#contato" class="transition hover:text-white">Contato</a>
        </nav>

        <div class="flex items-center gap-3">
          <button type="button" class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:bg-white/10 lg:hidden" aria-label="Abrir menu" (click)="menuOpen.set(!menuOpen())" [attr.aria-expanded]="menuOpen()">
            <span class="text-lg">☰</span>
          </button>
          <ax-button href="#contato" class="hidden lg:inline-flex">Falar com especialista</ax-button>
        </div>
      </div>

      <div *ngIf="menuOpen()" class="border-t border-white/10 bg-surface/95 lg:hidden">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:px-8">
          <a href="#home" class="rounded-3xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5" (click)="menuOpen.set(false)">Soluções</a>
          <a href="#infra" class="rounded-3xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5" (click)="menuOpen.set(false)">Infraestrutura</a>
          <a href="#seguranca" class="rounded-3xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5" (click)="menuOpen.set(false)">Segurança</a>
          <a href="#automacao" class="rounded-3xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5" (click)="menuOpen.set(false)">Automação</a>
          <a href="#autoridade" class="rounded-3xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5" (click)="menuOpen.set(false)">Sobre</a>
          <a href="#contato" class="rounded-3xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5" (click)="menuOpen.set(false)">Contato</a>
          <ax-button href="#contato">Falar com especialista</ax-button>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
