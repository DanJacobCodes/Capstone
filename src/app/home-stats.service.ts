import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeStatsService {

  constructor(private http: Http) { }


  getByAddressAndZip(address: string, zipcode: string, ) {

    return this.http.get("https://api.housecanary.com/v2/property/value?address="+address+"&zipcode="+zipcode)

  }

}
