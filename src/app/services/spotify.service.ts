import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery( query: string ){
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDGvxL1sQtKxFWlrTWGpG1Qw4zCUWP_64vg9Fy8m3PpYrsJIKSLcKaQ62KmHrXbtqX21MToWmI2pvA1Gf0'
    });

    return this.http.get(url, { headers });

   }

   getNewReleases() {

      return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));


   }

   getArtistas( termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items));
   }
   getArtista( id: string){
    return this.getQuery(`artists/${id}`);
    //.pipe( map( data => data['artists'].items));
   }
   getTopTracks( id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=mx`)
    .pipe( map( data => data['tracks']));
   }
}
