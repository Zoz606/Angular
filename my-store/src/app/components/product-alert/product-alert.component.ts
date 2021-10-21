import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';
import { Product } from "../../products";

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  

}
