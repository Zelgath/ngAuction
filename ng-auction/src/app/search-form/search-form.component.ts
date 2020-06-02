import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchService } from '../shared/services/search.service';
import { debounceTime, switchMap, filter, tap, map } from 'rxjs/operators';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AutocompleteService } from '../shared/services/autocomplete.service';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnDestroy{

  public searchForm: FormGroup;
  public isDetail = false;
  autocompleteSubscription: Subscription;
  products: Observable<Product[]>;

  constructor(private fb: FormBuilder,
              private searchService: SearchService,
              private autocompleteService: AutocompleteService,
              private productService: ProductService) {
                this.buildSearchForm();
                this.autocompleteOrFiltering();
                this.initializeSubscription();
              }


  private buildSearchForm() {
    this.searchForm = this.fb.group({
      title: ['']
    });
  }

  private autocompleteOrFiltering() {
    this.isDetail ?
    this.generateAutocomplete() :
    this.subscribeToSearchService();
  }

  private subscribeToSearchService() {
    this.getValueFromInput()
    .subscribe(searchValue => this.searchService.searchInput = searchValue);
  }

  private generateAutocomplete(): Observable<Product[]> {
    return this.getValueFromInput().pipe(
      tap(() => console.log('sth')),
      switchMap(input => this.productService.getFiltered(input))
    );
  }

  private getValueFromInput(): Observable<string> {
    return this.searchForm.valueChanges.pipe(
      map(searchValue => searchValue.title),
      debounceTime(300),
    );
  }

  private initializeSubscription() {
    this.autocompleteSubscription = this.autocompleteService.autocompleteSubject
    .subscribe( value => this.isDetail = value);
  }

  ngOnDestroy() {
    this.autocompleteSubscription.unsubscribe();
  }

}
