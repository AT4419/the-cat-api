import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isCheckField: { [key: string]: boolean } = {};
    email: string = '';
    pass: string = '';
    isValidEmail: boolean = true;
    isLogin: boolean = true;

    constructor(private router: Router) {}

    filterEmail(event: any) {
        this.isValidEmail = false;
        this.email = event.target.value;
        const atIndex = this.email.indexOf('@');
        const dotIndex = this.email.lastIndexOf('.');

        if (this.email.includes('@') || this.email.includes('.')) {
            if (
                atIndex > 0 &&
                dotIndex > atIndex + 1 &&
                dotIndex < this.email.length - 1
            ) {
                const localPart = this.email.substring(0, atIndex);
                const domainPart = this.email.substring(atIndex + 1, dotIndex);
                const topLevelPart = this.email.substring(dotIndex + 1);

                if (
                    localPart.length > 0 &&
                    domainPart.length > 0 &&
                    topLevelPart.length > 0
                ) {
                    this.isValidEmail = true;
                } else {
                    this.isValidEmail = false;
                }
            } else {
                this.isValidEmail = false;
            }
        }
        console.log(event.target.value);
    }

    validate() {
        this.isLogin = false;
        if (
            !this.isCheckField['email'] &&
            !this.isCheckField['pass']
        ) {
            this.isLogin = true;
        }
        console.log('outIf  ' + this.isLogin);
    }

    checkField(key?: string) {
        if (key) {
            if (key === 'email') {
                this.isCheckField['email'] = this.email.trim() === '';
            } else if (key === 'pass') {
                this.isCheckField['pass'] = this.pass.trim() === '';
            }
        } else {
            this.isCheckField['email'] = this.email.trim() === '';
            this.isCheckField['pass'] = this.pass.trim() === '';
        }
    }

    navigateLogin() {
        if (this.isLogin == true && this.isValidEmail == true) {
            localStorage.setItem('email',this.email);
            localStorage.setItem('pass', this.pass);
            this.router.navigate(['/app-allcat']);
        }
    }

    goLogin() {
        this.playSound();
        setTimeout(() => {
            this.checkField();
            this.validate();
            this.navigateLogin();
        }, 500);
    }

    @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;
    playSound() {
        this.audioPlayer.nativeElement.play();
    }
}
