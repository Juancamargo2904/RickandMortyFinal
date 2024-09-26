import { Component, OnInit } from '@angular/core';
import { RickMortyServiceService } from '../rick-morty-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  personaje: any;
  episodios: any[] =[];
  constructor(
    private rickMortyServiceService: RickMortyServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("detalles");
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      /*this.rickMortyServiceService.getpersonaje(+id).subscribe((data) => {
        console.log(data);
        this.personaje = data;*/
        this.rickMortyServiceService.getpersonaje(+id).subscribe((data) => {
          console.log(data);
          this.personaje = data;
  
          // Obtener detalles de los episodios
          this.rickMortyServiceService.getEpisodios(data.episode).subscribe((episodios) => {
            this.episodios = episodios;
          });
      });
    }
  }

}
