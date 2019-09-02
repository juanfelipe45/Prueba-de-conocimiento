import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})

export class DataService{
    constructor( private http: HttpClient ){}

    getData(){
        return this.http.get("/assets/data/datos.json").pipe(
            map((res: any)=>{
                return res;
            })
        );
    }

    datosJSON(){
        return this.http.get("/assets/data/datos.json").pipe(
            map((res: any)=>{
                return res;
            }),
            filter((res: any)=>{
                return res;
            })
        );
    }

}