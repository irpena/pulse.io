import { Component } from '@angular/core';

@Component({
  selector: 'pulse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pulse';

  executeEmit(){
    console.log("Se ejecuta evento");
  }
}
