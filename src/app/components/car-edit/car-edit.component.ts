import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {CarService} from '../../shared/services/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styles: []
})
export class CarEditComponent implements OnInit {

  car: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.carService.get(id).subscribe((car: any) => {
          if (car) {
            this.car = car;
            this.car.href = car._links.self.href;
            console.log('Lo encontro');
            console.log(this.car.href);
          } else {
            this.goToList();
          }
        });
      }
    });
  }

  save(form: NgForm) {
    this.carService.save(form).subscribe(result => {
      this.goToList();
    }, error => console.log('ocurrio un error en el save'));
  }

  remove(href: string) {
    this.carService.remove(href).subscribe(result => {
      this.goToList();
    }, error => console.log('ocurrio un error al eliminar'));
  }

  goToList() {
    this.router.navigate(['/car-list']);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
