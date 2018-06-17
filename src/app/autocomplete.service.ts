import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutocompleteService {

  public cityList: BehaviorSubject<string[]> = new BehaviorSubject([
    'Paris', 'Amsterdam', 'Lyon', 'Marseille', 'Londres', 'Dijon'
  ]);
  public value: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private detail: string;


  constructor(private http: HttpClient) {
    http.get('http://www-uat.tictactrip.eu/api/cities/popular/5')
      .subscribe(res => {
        this.cityList.next(res.map(e => e.local_name));
      });
  }

  onInputChange(req: string) {
    const url = `http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${req}`;
    this.http.get(url).subscribe(res   => {
      this.cityList.next(res.map(e => e.local_name).splice(0, 7));
    });
  }

  setValue(value: string) {
    this.value.next(value);
  }

  setDetail(detail: string) {
    this.detail = detail;
  }

}
