import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../pages/configuration/config/config';

@Injectable()
export class CarreraService {

    constructor(private httpclient: HttpClient) {}

    createBoard(optionsMap: any) {
        const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

        console.log('*****************Service*****************', optionsMap);
        this.httpclient.post( URL_SERVICES + '/board', optionsMap, {headers}).subscribe(
            data => {
                console.log('Post request succesful', data);
            },
            error => {
                console.log('Error sending post request', error);
            }
        );
    }
}
