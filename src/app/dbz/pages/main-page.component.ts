import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // conceptop poderozo; accedemos al servicio
  // Los servicios no deben ser publicos
  // privado y creamos getters y setters
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    // creamos una copia, para el caso lo utilizamos, por venir de una data
    return [...this.dbzService.characteres];
  }

  onDeleteCharacter(id:string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
