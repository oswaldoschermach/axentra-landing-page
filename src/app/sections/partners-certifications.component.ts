import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 space-y-8" appReveal>
      <div class="mb-8">
        <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Reconhecimento</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Parceiros & Certificações</h2>
      </div>
      <div class="flex flex-wrap gap-8 max-w-5xl">
        <div *ngFor="let partner of partners" class="glass-panel flex flex-col items-center p-4 rounded-xl border border-white/10 min-w-[140px] max-w-[160px]">
          <img [src]="partner.logo" [alt]="partner.name" class="h-14 mb-2 object-contain" />
          <span class="text-slate-300 text-xs text-center">{{partner.name}}</span>
        </div>
      </div>
    </section>
  `
})
export class PartnersCertificationsComponent {
  partners = [
    { name: 'Intelbras Integrador', logo: 'assets/logos-fabricantes/Seguranca Eletronica/intelbras.png' },
    { name: 'Dell Partner', logo: 'assets/logos-fabricantes/Comercial Consumo/dell.png' },
    { name: 'Fortinet Certified', logo: 'assets/logos-fabricantes/Ciberseguranca/fortinet.png' },
    { name: 'Cisco Partner', logo: 'assets/logos-fabricantes/Networking/cambium.png' },
  ];
}
