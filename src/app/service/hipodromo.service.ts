import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HipodromoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get('http://192.168.5.4:8010/hipodromo');
  }
}
