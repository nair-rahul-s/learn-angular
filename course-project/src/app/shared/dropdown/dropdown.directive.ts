import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') openDropdown: boolean = false;

  /**
   * On click of target element set the opendropdown to the reverse value, else set false
   * @param event 
   */
  @HostListener('document:click', ['$event']) click(event: Event) {
    this.openDropdown = this.elementRef.nativeElement.contains(event.target)
      ? !this.openDropdown
      : false;
  }

  constructor(private elementRef: ElementRef) {}
}
