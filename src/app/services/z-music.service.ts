import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZMusicService {

  constructor(private http : HttpClient) { 
    
  }
  
  getNewRealeses(){

      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQBMggd0GpJ9G5tqky2r8Qgy46KZjnIRnyCCCzDOsbuiljS9nXaATjkGxBbBwohSokWlzFmpxa-ruyheGYI'
      });

      this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers}).subscribe(resp =>{
        console.log(resp);
        
      })

  }
}
