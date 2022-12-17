import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import { breedInterface } from 'src/app/interfaces/breed.interface';
import { resultInterface } from 'src/app/interfaces/result.interface';
import { CatApiService } from 'src/app/services/cat-api.service';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.scss']
})
export class CatSearchComponent implements OnInit {
  breeds: breedInterface[] = [];
  results: resultInterface[] = [];
  form!: FormGroup;
  loading: boolean = false;

  constructor(private catService: CatApiService) { }

  ngOnInit(): void {
    this.catService.getBreeds().subscribe((res: breedInterface[]) => this.breeds = res)
    this.form = new FormGroup ({
      breed: new FormControl(),
      amount: new FormControl('10')
    })
  }

  search(form: FormGroup){
    this.loading = true;
    this.results = [];
    this.catService
      .getResults(form.value.amount, form.value.breed)
      .subscribe((res: resultInterface[]) => {
        this.loading = false;
        this.results = res;
      })
  }
}
