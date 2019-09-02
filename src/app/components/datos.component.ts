import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/datos.service';


@Component({
  selector: 'app-datos',
  templateUrl: '../views/datos.component.html',
  styleUrls: ['../views/datos.component.css']
})
export class DatosComponent implements OnInit {

  public Avion = [];
  public resultados = [];
  

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getCantAreonaves();
    this.DatosJSON();
  }

  getCantAreonaves(){
    this.dataService.getData().subscribe(data => {
      console.log("Los items");
      console.log(Object.values(data));
      console.log("Los datos");
      this.Avion = data;
    });
  }

  DatosJSON(){
    var tmp = [];
    var result :[{
      "maintCmpActivity":{
        "maintCmpActName":String,
        "maintHistories":[
          {
            "machineID": Number,
            "dateInit": String,
            "Machine":{
                "callSing": String
            }
          }
        ]
      }
    }];
    this.dataService.datosJSON().subscribe(data =>{ 
      data.forEach(function (a) {
         console.log("Estructura Completa: ",Object.keys(a));
         console.log("Contenido del MainHistories",a.maintHistories);
         var temp = a.maintHistories;
         temp.forEach(function (b) {
            console.log("Contenido del MainTaskHistories", b.maintTaskHistories);
            console.log("Estructura del MainHIstories", Object.keys(b));
            console.log("Contenido del MaintCmpActivity", b.maintCmpActivity);
            console.log("PRUEBA",Object.keys(b)[21]);
            result =[{
              "maintCmpActivity":{
                "maintCmpActName": b.maintCmpActivity.maintCmpActName,
                "maintHistories":[
                  {
                    "machineID": b.machineID,
                    "dateInit": b.dateInit,
                    "Machine":{
                        "callSing": a.callSing
                    }
                  }
                ]
              }
            }];
            tmp.push(result);
         });
      });
      this.resultados = tmp;
    });
  }

}
