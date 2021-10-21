import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  title: string = 'My Store';

  constructor() { }

  ngOnInit(): void {
  }
  faShoppingCart = faShoppingCart;
 

}
