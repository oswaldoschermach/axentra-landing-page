import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-cta',
  standalone: true,
  template: `
    <a href="#contato" class="fixed z-50 bottom-6 right-6 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-sky-500/30 transition-all flex items-center gap-2 animate-bounce-in">
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 17l4 4 4-4m0 0V3m0 18V3'/></svg>
      Solicitar diagnóstico
    </a>
  `,
  styles: [
    `@keyframes bounce-in { 0% { transform: scale(0.7); opacity: 0; } 80% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } } .animate-bounce-in { animation: bounce-in 0.8s cubic-bezier(.68,-0.55,.27,1.55) both; }`
  ]
})
export class FloatingCtaComponent {}
