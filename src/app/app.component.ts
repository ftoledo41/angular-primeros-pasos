import { Component } from '@angular/core';

// Transforma la clase a un componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  public title: string = 'Hola Mundo';
}
