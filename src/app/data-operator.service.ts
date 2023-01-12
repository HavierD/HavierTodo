import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError, tap, Subscription } from "rxjs";
import { Injectable, OnDestroy } from '@angular/core';
import { IItem as IItem } from "./item";
import * as OracleDB from "oracledb";

@Injectable({
  providedIn: 'root'
})
export class DataOperatorService {

  async getData(): Promise<IItem>{
    let connection;
    try{
      connection = await OracleDB.createPool({
        user: 'havier'
      })
    }
  }
}
