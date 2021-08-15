import { Component, OnInit, Input } from '@angular/core';
import { musicInterface } from '../cool-music';
@Component({
  selector: 'app-cool-music-details',
  templateUrl: './cool-music-details.component.html',
  styleUrls: ['./cool-music-details.component.css']
})
export class CoolMusicDetailsComponent implements OnInit {


@Input() music?: musicInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
