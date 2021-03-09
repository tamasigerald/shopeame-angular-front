import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {
  @Input() products;
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
