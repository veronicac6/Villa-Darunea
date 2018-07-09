import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  _album: any[] = [];
  filterAlbum: any[] = [];
  constructor(private _lightbox: Lightbox) {

    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/gallery/outdoors/outdoors_' + i + '.jpg';
      const category = "outdoors";
      const album = {
        src: src,
        category: category
      };
      this._album.push(album);
    }
    for (let i = 1; i <= 8; i++) {
      const src = '../../../assets/images/gallery/rooms/rooms_' + i + '.jpg';
      const category = "rooms";

      const album = {
        src: src,
        category: category
      };
      this._album.push(album);
    }
    this.filterAlbum=this._album;
    // console.log(this._album);
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
  filter(categ) {
    if(categ=='all'){return this.filterAlbum=this._album;}
    else
    return this.filterAlbum=this._album.filter(img=>img.category==categ);
  }

  ngOnInit() {

  }

}
