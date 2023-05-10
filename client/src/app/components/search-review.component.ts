import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-review',
  templateUrl: './search-review.component.html',
  styleUrls: ['./search-review.component.css']
})
export class SearchReviewComponent implements OnInit {
  searchForm! : FormGroup
  searchRequest! : string

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
      this.searchForm = this.createForm()
  }

 private createForm() {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.pattern(/^\S.*\S$/)])
    })
  }

  search() {
    this.searchRequest = this.searchForm.value['name']
    // console.info(this.searchRd
  }
}
