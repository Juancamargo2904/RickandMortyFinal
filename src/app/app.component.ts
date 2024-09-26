import { Component, OnInit } from '@angular/core';
import {RickMortyServiceService} from './rick-morty-service.service'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  personajes: any[] = [];


  constructor(private rickMortyServiceService :RickMortyServiceService){}


  ngOnInit(): void {
    
    this.rickMortyServiceService.getpersonajes().subscribe(data =>{
      this.personajes = data.results;
    })

  }
}
