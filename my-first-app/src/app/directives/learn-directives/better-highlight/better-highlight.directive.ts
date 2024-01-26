import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  /**
   * mouseenter is a event provided by dom, on top of which we are binding the behavior
   * So wherever this directive sits on, if we mouseover that element, we get the written behavior
   */
  @HostListener('mouseenter') mouseOver() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
