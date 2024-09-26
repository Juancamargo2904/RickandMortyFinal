import { Component, OnInit } from '@angular/core';
import {RickMortyServiceService} from '../rick-morty-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {


  characters: any[] =[];
  selectedCharacter: any = null
  constructor(private rickMortyServiceService :RickMortyServiceService,
    private router: Router
   ){}

  ngOnInit(): void {
    this.rickMortyServiceService.getpersonajes().subscribe(data =>{
      this.characters = data.results;
    });
  }

  verDetalles(id: number): void {
    console.log("hola");
    this.router.navigate(['/detalles', id]);  // Redirige al componente de detalles
  }

  selectCharacter(character: any): void {
    this.selectedCharacter = character;
  }


  deselectCharacter(): void {
    this.selectedCharacter = null;
  }


}






