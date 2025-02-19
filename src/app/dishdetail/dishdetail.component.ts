import { Component, OnInit} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  dish:Dish;

  constructor(private dishServcie: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.dish = this.dishServcie.getDish(id);
  }

  goBack(): void{
    this.location.back();
  }

}
