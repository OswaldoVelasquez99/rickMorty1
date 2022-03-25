import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations:any = {};

  constructor(
    private service: ApiService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getLocations().then((response) => {
      this.locations = response.results;
    });
  }

}
