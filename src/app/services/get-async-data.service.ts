import { CompanyInfo } from './../models/company-info.model';
import { CompanyType } from './../models/company-type.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GetAsyncDataService {
  constructor(private httpClient: HttpClient) {}

  getCompanyTypes(): Observable<CompanyType[]> {
    return this.httpClient.get<CompanyType[]>(
      'https://api.jsonbin.io/b/5f2560b01823333f8f19b7cd'
    );
  }

  checkRegNumber(regNumber: number): Observable<boolean> {
    return this.httpClient
      .get<CompanyInfo[]>('https://api.jsonbin.io/b/5f25613bdddf413f95ba07bc')
      .pipe(
        map((responseData) => {
          return responseData.some(
            (companyData) => companyData.No === regNumber.toString()
          );
        })
      );
  }
}
