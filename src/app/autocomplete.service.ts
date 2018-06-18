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
  public focusedIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) {
    http.get('http://www-uat.tictactrip.eu/api/cities/popular/5')
      .subscribe((res: any[]) => {
        this.cityList.next(res.map(e => e.local_name));
      });
  }

  onInputChange(req: string) {
    const url = `http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${req}`;
    this.http.get(url).subscribe((res: any[])   => {
      this.cityList.next(res.map(e => e.local_name).splice(0, 7));
    });
  }

  setValue(value: string) {
    this.value.next(value);
  }

  setValueWithIndex() {
    const cityList = this.cityList.getValue();
    const index = this.focusedIndex.getValue();
    const selectedCity = cityList[index];
    this.value.next(selectedCity);
  }

  navigate(direction: 'asc' | 'desc') {
    const currentIndex = this.focusedIndex.getValue();
    if (direction === 'desc') {
      const maxLen = this.cityList.getValue().length;
      const nextIndex = currentIndex + 1 > maxLen - 1 ? maxLen - 1 : currentIndex + 1;
      this.focusedIndex.next(nextIndex);
    } else {
      const nextIndex = currentIndex - 1 > 0 ? currentIndex - 1 : 0;
      this.focusedIndex.next(nextIndex);
    }
  }

}
