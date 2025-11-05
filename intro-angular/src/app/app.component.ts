import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'angular platformuna hoş geldiniz!';
  sample: string ='burada bir örnek var';
  author:string='Türkay Ürkmez';
  date = '2025 Kasım';

  isChecked: boolean = true;
  textValue:string = 'Değişti';

  
}
