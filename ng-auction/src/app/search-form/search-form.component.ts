import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit{

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildSearchForm();
  }


  private buildSearchForm() {
    this.searchForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

}
