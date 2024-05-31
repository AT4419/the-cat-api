import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  @Input() title: string = '';
  @Input() links: { name: string, url: string }[] = [];

  goLogout() {
    if(this.links[0].name === 'Logout'){
      alert('Logout แล้วนะ');
      localStorage.clear();
    }
  }
}
