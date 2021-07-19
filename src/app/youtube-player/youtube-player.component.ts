import { Component, OnInit } from '@angular/core';
import {SongService} from '../service/song.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { analyzeFile } from '@angular/compiler';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  song: any;
  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private router: Router
  
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.songService.findSongById(id);
      console.log(id);
    });

  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  quaylai(){
    this.router.navigate(['test']);
  }
}