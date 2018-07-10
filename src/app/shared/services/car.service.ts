import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarService {

  public API = '//localhost:8080';
  public CAR_API: string = this.API + '/cars';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    // Definimos la url que me va a traer todos los carros
    return this.http.get(this.API + '/cool-cars');
  }

  get(id: string) {
    return this.http.get(this.CAR_API + '/' + id);
  }

  save(car: any): Observable<Object> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car); // se le pasa a este metodo la URL, y el objeto json
    } else {// insertamos el carro en caso contrario
      result = this.http.post(this.CAR_API, car);
    }

    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
