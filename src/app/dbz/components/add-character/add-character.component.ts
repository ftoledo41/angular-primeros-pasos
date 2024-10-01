import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // EventEmitter, objetos, string, numero, podemos emitir cualquier cosa
  //EventEmitter es un generico
  // @Output para que main-page-component este escuchando, pueda tener acceso a onNewCharacter
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    // Para Debugear
    // debugger;

    // SI ES IGUAL A CERO, QUE NO HAGA NADA
    if (this.character.name.length === 0) return;

    //ACA LLAMAMOS A onNewCharacter Y EMITIMOS EL OBJETO CHARACTER
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };

  }
}
