import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

export class MyType {
  public myname: string;
}

export const MY_TYPE = new InjectionToken<MyType>('MyType');

let defaultMyType = { myname: 'test' } as MyType;

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: MY_TYPE, useValue: defaultMyType }],
})
export class AppModule {}
