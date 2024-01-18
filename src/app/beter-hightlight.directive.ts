import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBeterHightlight]'
})
export class BeterHightlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'green';

  constructor(private elRef: ElementRef, private render: Renderer2) { }
  ngOnInit(): void {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'black', false)
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'green'
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'red'
  }
}
