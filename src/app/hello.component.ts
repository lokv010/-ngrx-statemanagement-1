import { Component, Input } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment,reset } from './counter.action';

@Component({
  selector: 'hello',
  template: `<button (click)="increment()">Increment</button>

  <div>Current Count: {{ count$ | async }}</div>
  
  <button (click)="decrement()">Decrement</button>
  
  <button (click)="reset()">Reset Counter</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  count$: Observable<number>;

  constructor(private store:Store<{count:number}>) {
    this.count$ = store.select('count');//selecting the reducer with the help of store
  }

  increment() {
    this.store.dispatch(increment());//displatching the action
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
