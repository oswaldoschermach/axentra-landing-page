import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `
    <section class="mb-16 space-y-8" appReveal>
      <div class="mb-8">
        <p class="text-sm uppercase tracking-[0.32em] text-sky-300">Atuação</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Onde Atuamos</h2>
      </div>
      <div class="glass-panel rounded-2xl overflow-hidden border border-white/10 max-w-3xl w-full">
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-54.0,-34.0,-34.0,-2.0&amp;layer=mapnik" style="border:0" width="100%" height="320"></iframe>
      </div>
    </section>
  `
})
export class MapComponent {}
