import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './data-binding/server/cockpit/cockpit.component';
import { ServerElementComponent } from './data-binding/server/server-element/server-element.component';
import { AssgnCmpDatabindingComponent } from './data-binding/assgn-cmp-databinding/assgn-cmp-databinding.component';
import { GameControlComponent } from './data-binding/assgn-cmp-databinding/game-control/game-control.component';
import { OddComponent } from './data-binding/assgn-cmp-databinding/odd/odd.component';
import { EvenComponent } from './data-binding/assgn-cmp-databinding/even/even.component';
import { ServerComponent } from './data-binding/server/server.component';

@NgModule({
  declarations: [
    // declare all the components in this array
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    AssgnCmpDatabindingComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ServerComponent
  ],
  imports: [
    // use this array to import all the modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
