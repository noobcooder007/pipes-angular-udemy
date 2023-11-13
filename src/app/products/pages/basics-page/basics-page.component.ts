import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower = 'juan';
  public nameUpper = 'JUAN';
  public fullName = 'JuAn TeJeDa';
  public currentDate: Date = new Date();
}
