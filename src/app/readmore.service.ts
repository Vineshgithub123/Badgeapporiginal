import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadmoreService {

  constructor(public http:HttpClient) { }
  getdetails(){
    return this.http.get('http://localhost:3000')
  }
}
