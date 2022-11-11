import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(readonly injector: Injector) {
  }

  ngDoBootstrap() {
    const element = createCustomElement(CounterComponent, {
      injector: this.injector
    });
    customElements.define('counter-element', element);
  }
}
