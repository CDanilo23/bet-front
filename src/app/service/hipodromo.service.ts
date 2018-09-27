import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HipodromoService {

  constructor(private http: Http, private router: Router) { }

  findAll(): Observable<any> {
    let response = this.http.get('http://localhost:8010/hipodromo')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
      console.log(response);
      return response;
  }
}
