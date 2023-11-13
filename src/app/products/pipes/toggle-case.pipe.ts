import { Pipe, PipeTransform } from '@angular/core';

// juan | toggleCase = 'JUAN'
// JUAN | toggleCase = 'juan'

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, toUpper: boolean = false): string {
        return toUpper ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}