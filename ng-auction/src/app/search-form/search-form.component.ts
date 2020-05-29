import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchService } from '../shared/services/search.service';
import { debounceTime, switchMap, filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private searchService: SearchService) {
                this.buildSearchForm();
                this.searchForm.valueChanges.pipe(
                  map(searchValue => searchValue.title),
                  debounceTime(300),
                ).subscribe(searchValue => this.searchService.searchInput = searchValue);
              }


  private buildSearchForm() {
    this.searchForm = this.fb.group({
      title: ['']
    });
  }

}
