import {Injector, NgModule, Type} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {BrowserModule} from '@angular/platform-browser';
import {FrontendFrameworksComponent} from './frontend-frameworks/frontend-frameworks.component';
import {FrontendFrameworkComponent} from './frontend-frameworks/frontend-framework/frontend-framework.component';
import {CustomElementsBase} from './base/CustomElementsBase';
import { DisplayCenteredComponent } from './display-centered/display-centered.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FrontendFrameworksComponent,
    FrontendFrameworkComponent,
    DisplayCenteredComponent
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
    this.createAndDefineCustomElement('app-counter', CounterComponent);
    this.createAndDefineCustomElement('app-frontend-frameworks', FrontendFrameworksComponent);
    this.createAndDefineCustomElement('app-display-centered', DisplayCenteredComponent);
  }

  createAndDefineCustomElement(selector: string, component: Type<CustomElementsBase>) {
    const element = createCustomElement<CustomElementsBase>(component, {
      injector: this.injector
    })
    customElements.define(selector, element);
  }
}
