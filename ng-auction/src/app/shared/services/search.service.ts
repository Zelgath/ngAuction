import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject: BehaviorSubject<string> = new BehaviorSubject('');

  set searchInput(value: string) {
    this.searchSubject.next(value);
  }

  getSearch(): Observable<string> {
    return this.searchSubject.asObservable();
  }

}
