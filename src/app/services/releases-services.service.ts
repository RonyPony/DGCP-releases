import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ReleasesByYear } from '../models/releasesByYear';
import { Release } from '../models/release';
@Injectable({
  providedIn: 'root'
})
export class ReleasesServicesService {

  constructor(private http:HttpClient) { }

  getReleasesByYear(year:string,currentPage:string,pageSize:string) {
    //https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVinValues/5UXWX7C5*BA?format=json&modelyear=2011
    var result = this.http.get<ReleasesByYear>(`https://api.dgcp.gob.do/api/year/${year}/${currentPage}?limit=${pageSize}`)
    return result;
  }
  getReleaseById(releaseId:string){
    var result = this.http.get<Release>(`https://api.dgcp.gob.do/api/release/${releaseId}`)
    return result;
  }
}
