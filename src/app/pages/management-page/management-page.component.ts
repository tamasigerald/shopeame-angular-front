import { ProductsServiceService } from './../../shared/services/products-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';


@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent implements OnInit {
  product = {
    description: '',
    id: 0,
    image: '',
    name: '',
    price: '',
    stars: '',
  };
  idProduct;
  constructor(private route: ActivatedRoute, private productService: ProductsServiceService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idProduct = params.get('idProduct');
    });
    if (this.idProduct) {
      this.productService.getProduct(this.idProduct).subscribe((res: any) => {
        this.product = res.result[0];
      });
    }
  }

  // tslint:disable-next-line: typedef
  checkProduct(product: any) {
    // tslint:disable-next-line: triple-equals
    if (typeof (product.price) != 'number' || typeof (product.stars) != 'number') {
      product.price = 0;
      product.stars = 0;
    }
    if (this.idProduct) {
      this.productService.updateProduct(product.id, product).subscribe({
        // tslint:disable-next-line: no-shadowed-variable
        next: product => {
          const data = {title: 'Producto editado!'};
          this.openDialog(data);
          product = product;
        },
        error: error => {
          const data = { title: 'Ha habido un error!', content: error };
          this.openDialog(data);
          product = product;
          console.error('There was an error!', error);
        }
      });
    } else {
      this.productService.postProduct(product).subscribe({
        // tslint:disable-next-line: no-shadowed-variable
        next: product => {
          let data;
          // tslint:disable-next-line: no-string-literal
          data = { title: 'Producto añadido!', content: product['name'] };
          this.openDialog(data);
          product = product;
        },
        error: error => {
          const data = { title: 'Ha habido un error!', content: error };
          this.openDialog(data);
          product = product;
          console.log('There was an error!', error);
        }
      });
    }
  }

  // tslint:disable-next-line: typedef
  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    this.matDialog.open(DialogComponent, dialogConfig);
  }
}
