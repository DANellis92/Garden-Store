import { Component, OnInit, Input } from "@angular/core";
import { AdmindataService } from "../admindata.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-adminproducts",
  templateUrl: "./adminproducts.component.html",
  styleUrls: ["./adminproducts.component.scss"]
})
export class AdminproductsComponent implements OnInit {
  adminProducts: Object;
  @Input("token") token: string;

  constructor(private data: AdmindataService) {}

  ngOnInit() {
    this.data.getProductsAdmin().subscribe(data => {
      this.adminProducts = data;
      console.log(this.adminProducts);
    });
  }
  itsLit(productid): void {
    this.data.lightEmUp(productid, this.token).subscribe(res => {
      console.log(res);
      this.getProducts();
    });
  }
  getProducts(): void {
    this.data.getProductsAdmin().subscribe(data => {
      this.adminProducts = data;
      console.log(this.adminProducts);
    });
  }
}
