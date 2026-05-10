import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../animations/reveal.directive';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="mb-16 space-y-8" appReveal>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Tecnologias</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Parcerias e integrações estratégicas</h2>
          <p class="mt-6 max-w-xl text-sm leading-7 text-slate-400">Apoio tecnológico com plataformas maduras para infraestrutura e automação enterprise.</p>
        </div>
      </div>

      <div class="relative w-full">
        <button aria-label="Anterior" class="carousel-btn left-2" (click)="scroll(-1)">&lt;</button>
        <div #carousel class="carousel-track flex items-center gap-8 overflow-x-auto scrollbar-hide px-2 py-4">
          <div *ngFor="let logo of logos" class="carousel-logo flex-shrink-0 flex items-center justify-center h-20 w-36 rounded-xl bg-white/10 border border-white/10 shadow-soft mx-2" appReveal>
            <img [src]="logo.src" [alt]="logo.alt" class="h-12 max-w-[120px] object-contain" />
          </div>
        </div>
        <button aria-label="Próximo" class="carousel-btn right-2" (click)="scroll(1)">&gt;</button>
      </div>
    </section>
  `,
  styles: [
    `
    .carousel-track {
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }
    .carousel-logo {
      transition: transform 0.3s;
    }
    .carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: rgba(15,23,42,0.7);
      border: 1px solid rgba(255,255,255,0.12);
      color: #38bdf8;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .carousel-btn:hover {
      background: rgba(56,189,248,0.18);
    }
    .carousel-btn.left-2 { left: 0; }
    .carousel-btn.right-2 { right: 0; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `
  ]
})
export class TechnologiesComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  logos = [
    // Cabeamento Pon-Lan
    { src: 'assets/logos-fabricantes/Cabeamento Pon-Lan/furukawa.png', alt: 'Furukawa' },
    { src: 'assets/logos-fabricantes/Cabeamento Pon-Lan/lightera.png', alt: 'Lightera' },
    { src: 'assets/logos-fabricantes/Cabeamento Pon-Lan/nokia.png', alt: 'Nokia' },
    // Ciberseguranca
    { src: 'assets/logos-fabricantes/Ciberseguranca/checkpoint.png', alt: 'Checkpoint' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/ciscocybervision.png', alt: 'Cisco Cybervision' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/crowdstrike.png', alt: 'Crowdstrike' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/fortinet.png', alt: 'Fortinet' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/hcaptcha.png', alt: 'hCaptcha' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/netskope.png', alt: 'Netskope' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/paloalto.png', alt: 'Palo Alto' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/sophos.png', alt: 'Sophos' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/tenable.png', alt: 'Tenable' },
    { src: 'assets/logos-fabricantes/Ciberseguranca/trendmicro.png', alt: 'Trend Micro' },
    // Comercial Consumo
    { src: 'assets/logos-fabricantes/Comercial Consumo/apple.png', alt: 'Apple' },
    { src: 'assets/logos-fabricantes/Comercial Consumo/dell.png', alt: 'Dell' },
    { src: 'assets/logos-fabricantes/Comercial Consumo/hp.png', alt: 'HP' },
    { src: 'assets/logos-fabricantes/Comercial Consumo/lenovo.png', alt: 'Lenovo' },
    { src: 'assets/logos-fabricantes/Comercial Consumo/samsung.png', alt: 'Samsung' },
    // Controle Acesso
    { src: 'assets/logos-fabricantes/Controle Acesso/came.png', alt: 'Came' },
    { src: 'assets/logos-fabricantes/Controle Acesso/dahua.png', alt: 'Dahua' },
    { src: 'assets/logos-fabricantes/Controle Acesso/hikvision.png', alt: 'Hikvision' },
    { src: 'assets/logos-fabricantes/Controle Acesso/invenzi.png', alt: 'Invenzi' },
    // CX e Ominichannel
    { src: 'assets/logos-fabricantes/CX e Ominichannel/deltavox.png', alt: 'Deltavox' },
    { src: 'assets/logos-fabricantes/CX e Ominichannel/khomp.png', alt: 'Khomp' },
    // Energia
    { src: 'assets/logos-fabricantes/Energia/eaton.png', alt: 'Eaton' },
    { src: 'assets/logos-fabricantes/Energia/huawei.png', alt: 'Huawei' },
    { src: 'assets/logos-fabricantes/Energia/ipmetal.png', alt: 'IPMetal' },
    { src: 'assets/logos-fabricantes/Energia/tp-link.png', alt: 'TP-Link' },
    { src: 'assets/logos-fabricantes/Energia/vertiv.png', alt: 'Vertiv' },
    // Data Center
    { src: 'assets/logos-fabricantes/Data Center/apc.png', alt: 'APC' },
    { src: 'assets/logos-fabricantes/Data Center/eaton.png', alt: 'Eaton' },
    { src: 'assets/logos-fabricantes/Data Center/nhs.png', alt: 'NHS' },
    { src: 'assets/logos-fabricantes/Data Center/vertiv.png', alt: 'Vertiv' },
    // Networking
    { src: 'assets/logos-fabricantes/Networking/cambium.png', alt: 'Cambium' },
    { src: 'assets/logos-fabricantes/Networking/zyxel.png', alt: 'Zyxel' },
    // Seguranca Eletronica
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/axis.png', alt: 'Axis' },
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/cconet.png', alt: 'Cconet' },
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/dahua.png', alt: 'Dahua' },
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/hikvision.png', alt: 'Hikvision' },
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/intelbras.png', alt: 'Intelbras' },
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/invenzi.png', alt: 'Invenzi' },
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/milestone.png', alt: 'Milestone' },
    { src: 'assets/logos-fabricantes/Seguranca Eletronica/senstar.png', alt: 'Senstar' },
    // Testes e Ferramentas
    { src: 'assets/logos-fabricantes/Testes e Ferramentas/fluke.png', alt: 'Fluke' },
    { src: 'assets/logos-fabricantes/Testes e Ferramentas/megabras.png', alt: 'Megabras' },
  ];

  ngAfterViewInit() {
    this.autoScroll();
  }

  scroll(direction: number) {
    const el = this.carousel.nativeElement;
    const scrollAmount = 220; // largura aproximada de um logo + gap
    el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  autoScroll() {
    const el = this.carousel.nativeElement;
    let auto = true;
    const step = () => {
      if (!auto) return;
      el.scrollLeft += 1;
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      }
      requestAnimationFrame(step);
    };
    el.addEventListener('mouseenter', () => { auto = false; });
    el.addEventListener('mouseleave', () => {
      if (!auto) {
        auto = true;
        step();
      }
    });
    step();
  }
}
