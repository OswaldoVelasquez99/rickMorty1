import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  episodes:any = {};
  
  constructor(
    private service: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getEpisodes().then((response) => {
      this.episodes = response.results;
    });
  }
  /*goToEpisode(id:any) {
    this.router.navigateByUrl(`episode-date/${id}`)
  }*/

}
