import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightV2]',
})
export class BetterHighlightV2Directive {
  @Input() defaultBackgroundColor: string = 'transparent';
  @Input() highlightBackgroundColor: string = 'blue';

  // Directly targets the element property, w/o use of renderer
  @HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.color') color;

  constructor(private elementRef: ElementRef) {}

  /**
   * mouseenter is a event provided by dom, on top of which we are binding the behavior
   * So wherever this directive sits on, if we mouseover that element, we get the desired behavior
   */
  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = 'black';
  }
}
