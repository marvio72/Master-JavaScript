import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {
  // dato | calculadora: otroDato
  // param1              param2
  transform(value: number, args: number): any {
    const operaciones = `
      Suma: ${value + args} -
      Resta: ${value - args} -
      Multiplicación: ${value * args} -
      División: ${value / args}
      `;

    return operaciones;
  }
}
