import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  serverElements = [];

  onServerCreation(event: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: event.name,
      content: event.content,
    });
  }

  onBlueprintCreation(event: { name: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.name,
      content: event.content,
    });
  }
}
