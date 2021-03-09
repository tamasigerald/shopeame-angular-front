import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() products;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getPercentage(value) {
    return (value * 20) - 4 + '%';
  }
}
