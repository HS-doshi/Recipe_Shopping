import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appBeterHightlight]'
})
export class BeterHightlightDirective implements OnInit {

  @Input() highlightColor: string = 'red';
  @Input('appBeterHightlight') defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private render: Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'black', false)
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }
}
