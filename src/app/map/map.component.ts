import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
private map;
  constructor() { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 23.8282, 72.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
  // tslint:disable-next-line:align
  tiles.addTo(this.map);
  }

  ngAfterViewInit() {
    this.initMap();
  }

}
