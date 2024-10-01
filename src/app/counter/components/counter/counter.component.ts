import { Component } from "@angular/core"; //seccion de angular que ofrece varias cosas, componentes, propiedades, constantes, etc.

@Component({
  //el nombre con el que se invocara
  selector: 'app-counter',
  //el html a utilizar
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <br /><br />
    <button (click)="reset(10)">Reset</button>
    <br /><br />
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
// Lo debemos declarar en app.module si o si para poder utilizarlo
export class CounterCompoment {

  public counter: number = 10;
  // Botones + y - para el counter
  // recibimos un valor de tipo number
  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(value: number): void {
    this.counter = value;
  }
}
