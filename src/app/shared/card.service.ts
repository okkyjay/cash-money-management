import {Card} from './card.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  formData: Card;
  readonly rootUrl = 'http://localhost:15387/api';
  list: Card[];

  constructor(private http: HttpClient) { }

  postCardDetails(formData: Card){
    return this.http.post(this.rootUrl + '/PaymentDetail', formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + '/PaymentDetail')
    .toPromise()
    .then( res => {
      this.list = res as Card[];
    } );
  }
}
