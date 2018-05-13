import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ImageService {
img: any;
  constructor(private http: Http) { }

uploadImage(img){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/imagini/upload', img, { headers: headers })
    .map(res => res.json());
}

deleteImage(img){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.delete('http://localhost:3000/imagini/delete/:id', img)
    .map(res => res.json());
}

showImages() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/imagini/show', { headers: headers })
    .map(res => res.json());
}
  // const IMAGES=[
  //   {"id": 1}
  // ]

}
