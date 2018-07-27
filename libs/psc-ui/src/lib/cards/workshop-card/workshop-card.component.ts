import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pulse-workshop-card',
  templateUrl: './workshop-card.component.html',
  styleUrls: ['./workshop-card.component.css']
})
 /**
  * Example of usage:
  * <example-url>http://localhost:4200/xº</example-url>
  * <example-url>/demo/mysample.component.html</example-url>
  */
export class WorkshopCardComponent implements OnInit {
  private  _subtitle;
  public isSelected : boolean;
  @Input() title;   
  @Input()
  public set subtitle(value) {
    this._subtitle = value;
  }
  public get subtitle() {
    return this._subtitle;
  }

  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isSelected = !this.isSelected;
    this.selected.emit(this.isSelected);
  }

}
