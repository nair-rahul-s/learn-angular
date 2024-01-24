import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentView: string = 'recipe';

  onNavigation(value: string) {
    this.currentView = value;
  }
}
