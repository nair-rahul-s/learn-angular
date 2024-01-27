import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentView: string = 'recipe';

  /**
   * Called from header component. Whatever is clicked in the header, the value is sent here by event binding
   * @param value 
   */
  onNavigation(value: string) {
    this.currentView = value;
  }
}
