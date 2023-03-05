import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm = "";

  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm
    });
  };

  search(term:string):void{
    console.log(term)
    this.searchTerm = term.trim();
    if(this.searchTerm ){
      console.log(term.trim())
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
  }
};
