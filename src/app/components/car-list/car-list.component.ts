import {Component, OnInit} from '@angular/core';
import {CarService} from '../../shared/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styles: []
})
export class CarListComponent implements OnInit {

  cars: Array<any>;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
    });
  }

}
