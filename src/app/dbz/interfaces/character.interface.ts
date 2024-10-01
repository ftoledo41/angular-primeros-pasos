export interface Character {
  // Queda que pueda recibir un nulo, pero solo por el ejercicio, deberia definirse el ID desde el principio
  id?: string,
  name: string;
  power: number;
}
