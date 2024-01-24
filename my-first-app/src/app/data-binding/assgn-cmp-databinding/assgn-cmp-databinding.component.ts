import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn-cmp-databinding',
  templateUrl: './assgn-cmp-databinding.component.html',
  styleUrl: './assgn-cmp-databinding.component.css',
})
export class AssgnCmpDatabindingComponent {
  values: number[] = [];

  onValueGenerated(generatedValue: { value: number }): void {
    this.values.push(generatedValue.value);
  }
}
