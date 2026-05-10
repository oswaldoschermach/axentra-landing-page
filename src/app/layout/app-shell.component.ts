import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { CtaFinalComponent } from '../sections/cta-final.component';
import { DifferentialsComponent } from '../sections/differentials.component';
import { HeroComponent } from '../sections/hero.component';
import { ProblemsComponent } from '../sections/problems.component';
import { ProcessComponent } from '../sections/process.component';
import { SolutionsComponent } from '../sections/solutions.component';
import { SocialProofsComponent } from '../sections/social-proofs.component';
import { TechnologiesComponent } from '../sections/technologies.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, ProblemsComponent, SolutionsComponent, DifferentialsComponent, ProcessComponent, SocialProofsComponent, TechnologiesComponent, CtaFinalComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-surface text-slate-100">
      <app-header></app-header>
      <main class="relative overflow-hidden pt-24">
        <div class="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_30%)] pointer-events-none"></div>
        <div class="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
          <app-hero></app-hero>
          <div class="space-y-28">
            <app-problems></app-problems>
            <app-solutions></app-solutions>
            <app-differentials></app-differentials>
            <app-process></app-process>
            <app-social-proofs></app-social-proofs>
            <app-technologies></app-technologies>
            <app-cta-final></app-cta-final>
          </div>
        </div>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppShellComponent {}
