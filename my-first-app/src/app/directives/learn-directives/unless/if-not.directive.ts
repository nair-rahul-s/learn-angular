import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Structural directive that enables a structure when a condition is false
 */
@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  /**
   * This is setter of property appUnless, which executes whenever the value of the property is being set
   */
  @Input() set appIfNot(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
