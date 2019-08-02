import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-card',
  templateUrl: './layout-card.component.html',
  styleUrls: ['./layout-card.component.scss']
})
export class LayoutCardComponent implements OnInit {

  @Input() headerText: string;

  constructor() { }

  ngOnInit() {
  }

}
