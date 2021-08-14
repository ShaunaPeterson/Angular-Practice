import { Component, OnInit } from '@angular/core';
import { musicInterface } from '../cool-music';
import { MOCKMUSIC } from '../mock-music';
@Component({
  selector: 'app-cool-music',
  templateUrl: './cool-music.component.html',
  styleUrls: ['./cool-music.component.css']
})
export class CoolMusicComponent implements OnInit {

  coolMusic: musicInterface = {
    id: 1,
    name: 'mos thoser'
  };

  mockMusic = MOCKMUSIC;

  selectedSong?: musicInterface;
  onSelect(music:musicInterface): void {
    this.selectedSong = music;
  }

  

  constructor() { }

  ngOnInit(): void {
  }
// goodSong = "mos thoser";
}
