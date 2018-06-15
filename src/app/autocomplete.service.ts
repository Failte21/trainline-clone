import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutocompleteService {

  public cityList : BehaviorSubject<string[]> = new BehaviorSubject([
    'Paris', 'Amsterdam', 'Lyon', 'Marseille', 'Londres', 'Dijon'
  ]);
  private focused: BehaviorSubject<string> = new BehaviorSubject<string>('Paris');
  private focusedIndex = 1;

  constructor(private http: HttpClient) {
    http.get('http://www-uat.tictactrip.eu/api/cities/popular/5')
      .subscribe(res => {
        this.cityList.next(res.map(e => e.local_name));
      });
  }

  onInputChange(req: string) {
    const url = `http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${req}`;
    this.http.get(url).subscribe(res => {
      this.cityList.next(res.map(e => e.local_name).splice(0, 7));
    });
  }

}
