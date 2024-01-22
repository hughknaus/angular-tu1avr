import { Component, Input, OnInit, Injector } from '@angular/core';
import { MyType, MY_TYPE } from './app.module';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  constructor(private injector: Injector) {
    let A = this.injector.get<MyType>(MY_TYPE);
    console.log('A', A.myname);
    A.myname = 'joe';
    let B = this.injector.get<MyType>(MY_TYPE);
    console.log('B', B.myname);
  }
}
