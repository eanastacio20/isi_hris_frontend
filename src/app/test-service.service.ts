import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


export class TestDTO {
  public idno: number = 0;
  public name: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpClient: HttpClient) { }

  testService() {
    return this.httpClient.get('/isi-hris/test')
  }
}
