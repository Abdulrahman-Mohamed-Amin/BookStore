import { Component, OnInit } from '@angular/core';
import { LandingService } from '../services/landing.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  numOfImg:number = 0
  numOfCatPerPage:number = 3
  categories:any[] = []
  constructor(private _landservice:LandingService){}

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this._landservice.getCategories().subscribe({
      next: (res) =>{
        this.categories = res.splice(0 , this.numOfCatPerPage)
        
      }
    })
  }

  veiwMore(){
    if(this.numOfCatPerPage == 9){
      this.numOfCatPerPage = 9
    }else{

      this.numOfCatPerPage += 3
      this.getAllCategories()
    }
  }
}
