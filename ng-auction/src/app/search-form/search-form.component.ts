import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchService } from '../shared/services/search.service';
import { debounceTime, switchMap, filter, tap, map } from 'rxjs/operators';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AutocompleteService } from '../shared/services/autocomplete.service';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  public searchForm: FormGroup;
  public filteredOptions: Observable<Product[]>;

  constructor(private fb: FormBuilder,
              private searchService: SearchService,
              private autocompleteService: AutocompleteService,
              ) {
                this.buildSearchForm();
                this.subscribeToSearchService();
                this.subscribeToAutocomplete();
              }


  private buildSearchForm() {
    this.searchForm = this.fb.group({
      title: ['']
    });
  }

  displayFn(product: Product): string {
    return product.title;
  }

  private subscribeToAutocomplete() {
    this.filteredOptions = this.autocompleteService.autocompleteSubject;
  }

  private subscribeToSearchService() {
    this.getValueFromInput()
    .subscribe(searchValue => this.searchService.searchInput = searchValue);
  }


  private getValueFromInput(): Observable<string> {
    return this.searchForm.valueChanges.pipe(
      map(searchValue => searchValue.title),
      debounceTime(300),
    );
  }

}
