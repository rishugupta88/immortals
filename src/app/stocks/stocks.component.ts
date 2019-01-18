import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchRequestForm = new FormGroup({
    seachCompanyName: new FormControl('')
  });

  showCompanyData(data){

  }

}
