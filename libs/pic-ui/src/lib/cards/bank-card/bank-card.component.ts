import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pulse-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.css']
})
export class BankCardComponent implements OnInit {

  @Input('title') title: string;
  @Input('label') label: string;
  @Input('icon') icon: string;
  @Input('active') active: boolean;

  @Output() clickCard = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
  }

  executeEmit() {
    this.clickCard.emit();
  }

}
