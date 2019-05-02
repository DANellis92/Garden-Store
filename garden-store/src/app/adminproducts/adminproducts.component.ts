import { Component, OnInit } from '@angular/core';
import {  AdmindataService} from '../admindata.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.scss']
})
export class AdminproductsComponent implements OnInit {

  adminProducts: Object;

  constructor(private data: AdmindataService) { }

  ngOnInit() {
    this.data.getProductsAdmin().subscribe(data => {
      this.adminProducts = data
      console.log(this.adminProducts);
    })
  }

}
