import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeLinks = [
    { name: 'Register', url: '/app-register' },
    { name: 'Login', url: '/app-login' }
  ];
  catImg: any = 'https://cdn2.thecatapi.com/images/MTUxMzEzNg.jpg';
  constructor(private Service: ApiService) {}

  ngOnInit(): void {
      this.getCat();
  }

  getCat() {
    this.Service.getRandCat().subscribe(res => {
      this.catImg = res;
      console.log(res);
    })
    this.playSound();
  }

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;
  playSound() {
    this.audioPlayer.nativeElement.play();
  }
}
