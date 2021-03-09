import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product;
  @Output() emitSubmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    const textarea$$ = document.querySelector('.form__input--textarea');
    if (textarea$$) {
      textarea$$.addEventListener('input', () => {
        // console.log(textarea$$);
        if (textarea$$.scrollTop !== 0) {
          // textarea$$.style.height = textarea$$.scrollHeight + 'px';
        }
      });
    }
  }

  // tslint:disable-next-line: typedef
  submitProduct() {
    this.emitSubmit.emit(this.product);
  }

}
