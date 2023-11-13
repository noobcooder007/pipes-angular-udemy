import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Juan';
  public gender: 'male' | 'female' = 'male';
  changeclient(): void {
    this.name = 'Celtzin';
    this.gender = 'female';
  }
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  //i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  nextclient(): void {
    this.clients.shift();
  }
  clientsMap: {
    [k: string]: string
  } = { '=0': 'no tenemos clientes esperando', '=1': 'tenemos un cliente esperando', 'other': 'tenemos # clientes esperando' };
  //keyValue pipe
  public person = {
    name: 'Juan',
    age: '26',
    address: 'Irapuato, Guanajuato'
  }
  //Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log(value))
  );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta');
    }, 2000);
  });
}
