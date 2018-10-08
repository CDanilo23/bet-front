import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeadersUtil } from './headers';
import { Hipodromo } from '../pages/configuration/hipodromo/hipodromo';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class HipodromoService {

  constructor(private http: HttpClient) { }

  getAllHipodromos() {
    const headers = HeadersUtil.getHeaders();
    return this.http.get<Hipodromo[]>('http://localhost:8010/hipodromo', { headers });
  }
}
