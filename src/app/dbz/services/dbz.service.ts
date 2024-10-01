import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

// console.log(uuid());

import { Character } from '../interfaces/character.interface';

// El decorador; es una simple clase, lo mismo que una clase,
// pero el decorado @Injectable lo indica como servicio
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characteres: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  // Tomar todas las propiedad de la interface Character
  addCharacter(character: Character): void {
    // ... operador spret, y esparcelas en las propiedades del nuevo objeto
    const newCharacter: Character = { id: uuid(), ...character };

    this.characteres.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //   this.characteres.splice(index, 1);
  // }

  deleteCharacterById(id: string) {
    this.characteres = this.characteres.filter(character => character.id != id);
  }
}
