import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress-bar',
  standalone: true,
  template: `<div class="fixed top-0 left-0 w-full h-1 z-50"><div class="h-full bg-sky-500 transition-all" [style.width.%]="progress"></div></div>`
})
export class ScrollProgressBarComponent {
  progress = 0;
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }
  ngOnInit() { this.onScroll(); }
}
