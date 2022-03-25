import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../services/api.service'
import { HeaderComponent } from '../plantillas/header/header.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public characters:any;

  constructor(
    private ApiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    /*this.ApiService.getRick().subscribe({
      next: (character:any) => {
        console.log(`character::::`, character);
        this,character = character
      }
    })*/
    /*this.service.getCharacter(1).subscribe({
      next: (character: any) => {
        console.log('character', character);
        this.character = character;
      }
    })*/
    this.ApiService.getRick().then(result => {
      this.characters = result.results
      console.log(`character::::`, this.characters);
    })
  }

  goCharacter(id:any) {
    this.router.navigateByUrl(`rick/${id}`);
    console.log(`ruta:::`, this.router)
  }

}
