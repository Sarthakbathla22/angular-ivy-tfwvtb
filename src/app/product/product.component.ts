import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/Dataproduct.service';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
router: any;
  constructor(private product: DataService) {}

  ngOnInit(): void {
    this.product.getproducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
      console.log(this.products);
      console.log(data);
    });
      }
    Details(product: any): void {
      console.log("CLICKED");
      this.router.navigate(['productDetails', product.id]);
    
  }
}