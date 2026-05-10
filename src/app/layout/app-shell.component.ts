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
import { FaqComponent } from '../sections/faq.component';
import { FloatingCtaComponent } from '../shared/floating-cta.component';
import { ScrollProgressBarComponent } from '../shared/scroll-progress-bar.component';
import { WhatsappFabComponent } from '../shared/whatsapp-fab.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, ProblemsComponent, SolutionsComponent, DifferentialsComponent, ProcessComponent, SocialProofsComponent, TechnologiesComponent, FaqComponent, CtaFinalComponent, FooterComponent, FloatingCtaComponent, ScrollProgressBarComponent, WhatsappFabComponent],
  template: `
    <app-scroll-progress-bar></app-scroll-progress-bar>
    <div class="min-h-screen bg-surface text-slate-100">
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <app-header></app-header>
      </div>
      <main class="relative overflow-hidden pt-24">
        <div class="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_30%)] pointer-events-none"></div>
        <div class="relative w-full px-4 sm:px-8 lg:px-16 pb-24">
          <app-hero></app-hero>

          <app-problems class="block mt-24"></app-problems>
          <app-solutions class="block mt-24"></app-solutions>
          <app-differentials class="block mt-24"></app-differentials>
          <app-process class="block mt-24"></app-process>
          <app-social-proofs class="block mt-24"></app-social-proofs>
          <app-technologies class="block mt-24"></app-technologies>
          <app-faq class="block mt-24"></app-faq>

          <app-cta-final class="block mt-24"></app-cta-final>
        </div>
        <app-floating-cta></app-floating-cta>
        <app-whatsapp-fab></app-whatsapp-fab>
      </main>
      <div class="w-full px-4 sm:px-8 lg:px-16">
        <app-footer></app-footer>
      </div>
    </div>
  `,
})
export class AppShellComponent {}
