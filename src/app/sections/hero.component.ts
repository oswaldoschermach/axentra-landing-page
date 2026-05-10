import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';
import { PrimaryButtonComponent } from '../ui/primary-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, RevealDirective],
  template: `
    <section id="home" class="relative flex items-center justify-center min-h-[70vh] overflow-hidden rounded-[2rem] border border-white/10 bg-black/90 p-0 shadow-soft" appReveal>
      <!-- Vídeo de fundo -->
      <video #heroVideo autoplay loop muted playsinline (timeupdate)="onTimeUpdate()" [class.fade]="isFading" class="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none transition-opacity duration-700">
        <source src="assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <!-- Overlay para contraste -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      <!-- Conteúdo centralizado -->
      <div class="relative z-10 flex flex-col items-center justify-center w-full px-4 py-20 text-center animate-fade-in">
        <span class="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.36em] text-sky-300 mb-6">Infraestrutura empresarial</span>
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl animate-fade-in-up">Tecnologia corporativa preparada<br>para operações que não podem parar</h1>
        <p class="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-200 animate-fade-in-up delay-100">Infraestrutura, segurança, automação e inteligência aplicada para empresas que exigem performance, estabilidade e escalabilidade.</p>
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <ax-button href="#contato">Solicitar diagnóstico</ax-button>
          <ax-button variant="ghost" href="#contato">Falar com especialista</ax-button>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 animate-fade-in-up delay-300">
          <div class="glass-panel rounded-3xl border border-white/10 p-5 bg-black/40 backdrop-blur">
            <p class="text-sm uppercase tracking-[0.32em] text-slate-400">Projetos entregues</p>
            <p class="mt-3 text-3xl font-semibold text-white">+150</p>
          </div>
          <div class="glass-panel rounded-3xl border border-white/10 p-5 bg-black/40 backdrop-blur">
            <p class="text-sm uppercase tracking-[0.32em] text-slate-400">Disponibilidade média</p>
            <p class="mt-3 text-3xl font-semibold text-white">99.9%</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in { animation: fade-in 1s both; }
    .animate-fade-in-up { animation: fade-in-up 1.2s both; }
    .delay-100 { animation-delay: .1s; }
    .delay-200 { animation-delay: .2s; }
    .delay-300 { animation-delay: .3s; }
    .fade { opacity: 0 !important; transition: opacity 0.7s; }
    `
  ]
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  isFading = false;
  private fadeStarted = false;

  ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;
    video.addEventListener('ended', () => {
      // fallback para navegadores que não suportam loop corretamente
      video.currentTime = 0;
      video.play();
    });
  }

  onTimeUpdate() {
    const video = this.heroVideo.nativeElement;
    if (!this.fadeStarted && video.duration - video.currentTime < 0.7) {
      this.isFading = true;
      this.fadeStarted = true;
    }
    // Quando o vídeo reinicia, remove o fade
    if (this.fadeStarted && video.currentTime < 0.2) {
      this.isFading = false;
      this.fadeStarted = false;
    }
  }
}
