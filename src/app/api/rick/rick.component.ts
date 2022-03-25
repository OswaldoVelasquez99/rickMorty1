import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.scss']
})
export class RickComponent implements OnInit {
  id:any = {}
  character:any = {}

  constructor(
    private activeRouter: ActivatedRoute,
    private service: ApiService
  ) {
    /*this.service.getCharacter(this.id).subscribe({
      next: (character: any) => {
        console.log('character', character);
        this.character = character;
      }
    })*/
    /*this.service.getCharacter(this.id).subscribe({
      next: (character: any) => {
        console.log('character', character);
        this.character = character;
      }
    })*/
  }

  ngOnInit() {
    //obtener el id de la ruta
    this.id = this.activeRouter.snapshot.paramMap.get("id");

    //llamar servicio y le paso el id
    this.service.getCharacter(this.id).then((character) => {
      this.character = character;
    })
    
  }

}
