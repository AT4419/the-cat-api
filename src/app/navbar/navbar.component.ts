import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  @Input() title: string = '';
  @Input() links: { name: string, url: string }[] = [];

  showPopup: boolean = false;

  constructor(private router: Router) {}

  goLogout() {
    if(this.links[0].name === 'Logout'){
      alert('Logout แล้วนะ');
      localStorage.clear();
    }
  }

  confirmLogout() {
    this.showPopup = true;
  }

  logout() {
    this.showPopup = false;
    this.router.navigate(['/app-home']);
  }

  cancelLogout() {
    this.showPopup = false;
  }
}
