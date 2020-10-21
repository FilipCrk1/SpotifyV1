import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  error: boolean;
  constructor( private spotify: SpotifyService) {
    this.error = false;
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
    }, ( errorS ) => {
      this.error = true;
      console.log(errorS);
    });
  }
}
