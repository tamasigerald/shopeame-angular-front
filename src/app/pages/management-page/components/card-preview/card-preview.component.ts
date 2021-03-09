import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getPercentage(value) {
    const percentage = (value * 20);
    const percentageRounded = Math.round(percentage / 10) * 10;
    return percentageRounded + '%';
  }
}
