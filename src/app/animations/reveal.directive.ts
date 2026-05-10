import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit {
  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'reveal');
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.element.nativeElement, 'visible');
            instance.disconnect();
            break;
          }
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(this.element.nativeElement);
  }
}
