import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';

  @Output() blueprintCreation = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @Output() serverCreation = new EventEmitter<{
    name: string;
    content: string;
  }>();

  /**
   * Emits the custom event encapsulating the server creation properties
   */
  onAddServer() {
    this.serverCreation.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  /**
   * Emits the custom event encapsulating the blueprint creation properties
   */
  onAddBlueprint() {
    this.blueprintCreation.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
