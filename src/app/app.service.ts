import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  //companyNamesListURL = "http://192.168.43.111:5000/";
  currentDataURL = "../assets/data/test.json";

  data: any = [{ "rishu": "ris" }, {"rohit": ""}];
  constructor(private http: HttpClient) { }

  showCompanyData(CompanyName: any) {
    console.log(CompanyName);
    //return this.http.get(this.companyNamesListURL).map((response: Response) => response.json());
  }

  getCompaniesNames(): Observable<any> {
  console.log(this.currentDataURL);
    return this.http.get(this.currentDataURL);
  }
}
