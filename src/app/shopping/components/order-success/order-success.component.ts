import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
