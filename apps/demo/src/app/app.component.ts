import { Component } from '@angular/core';

@Component({
  selector: 'pulse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pulse';
  example = `<pulse-workshop-card [title]="'Titulo'" [subtitle]="'Subtitulo'" (selected)="cardSelectedAction($event)"></pulse-workshop-card>`;

  executeEmit(){
    console.log("Se ejecuta evento");
  }

  cardSelectedAction(event){
    
    console.log(`la carta esta ${(event?'Seleccinada':'No Seleccionada')}`, event);
  }
}
