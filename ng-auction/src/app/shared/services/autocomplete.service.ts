import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  autocompleteSubject = new Subject<boolean>();

  informAutocomplete(value: boolean) {
    this.autocompleteSubject.next(value);
  }
}
