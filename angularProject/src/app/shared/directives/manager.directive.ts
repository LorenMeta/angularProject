import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appManager]'
})
export class ManagerDirective {

  @Input('appManager') highlightColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'gold')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }
  private highlight(color: string): void {
    if(this.el.nativeElement.innerHTML.toLowerCase() === 'manager'){
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color)
    }
  }
}
