import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pass: string = '';
    verPass: string = '';
    firstName: any = '';
    lastName: any = '';
    age: String = '';
    tel: string = '';
    gender: any = 'male';
    email: string = '';
    isRegis: boolean = true;
    isValid: boolean = true;
    ageNumber: number = 0;
    isValidEmail: boolean = true;

    constructor(private router: Router) {}
    checkPass(): boolean | undefined {
        if (this.pass && this.verPass) {
            if (
                this.pass === this.verPass &&
                this.pass.length >= 8 &&
                this.verPass.length >= 8
            ) {
                alert('Successfully applied');
                console.log('pass');
                return true;
            } else {
                alert('Passwords do not match');
                console.log('fail');
                return false;
            }
        } else {
            return false;
        }
        // this.checkInput();
        // console.log(this.gender);
        // console.log(this.firstName);
    }

    

    filterPhone(event: any) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
        console.log(event.target.value);
    }
    filterAge(event: any) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
        this.ageNumber = parseInt(event.target.value);
        console.log(event.target.value);
    }

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
        if (this.checkPass() == false) {
            this.isRegis = false;
            this.isCheckField['pass'] = true;
            this.pass = '';
            this.isCheckField['verPass'] = true;
            this.verPass = '';
        }
        console.log(
            this.isCheckField['firstName'],
            this.isCheckField['lastName'],
            this.isCheckField['age'],
            this.isCheckField['gender'],
            this.isCheckField['email'],
            this.isCheckField['phone']
        );
        this.isRegis = false;
        if (
            !this.isCheckField['firstName'] &&
            !this.isCheckField['lastName'] &&
            !this.isCheckField['age'] &&
            !this.isCheckField['gender'] &&
            !this.isCheckField['email'] &&
            !this.isCheckField['phone']
        ) {
            this.isRegis = true;
            this.checkPass();
            if (this.checkPass() == true) {
                console.log('pass');
                this.isRegis = true;
            }
        }
        console.log('outIf  ' + this.isRegis);
    }

    navigateLogin() {
        if (this.isRegis == true) {
            this.router.navigate(['/app-login']);
        } else {
            this.router.navigate(['/app-register']);
        }
    }
    isCheckField: { [key: string]: boolean } = {};
    checkBoolean(key?: string) {
        if (key) {
            if (key === 'firstName') {
                this.isCheckField['firstName'] = this.firstName.trim() === '';
            } else if (key === 'lastName') {
                this.isCheckField['lastName'] = this.lastName.trim() === '';
            } else if (key === 'age') {
                this.isCheckField['age'] = this.age.trim() === '';
            } else if (key === 'gender') {
                this.isCheckField['gender'] = this.gender.trim() === '';
                console.log(this.isCheckField['gender']);
            } else if (key === 'email') {
                this.isCheckField['email'] = this.email.trim() === '';
            } else if (key === 'phone') {
                this.isCheckField['phone'] = this.tel.trim() === '';
            } else if (key === 'pass') {
                this.isCheckField['pass'] = this.pass.trim() === '';
            } else if (key === 'verPass') {
                this.isCheckField['verPass'] = this.verPass.trim() === '';
            }
        } else {
            this.isCheckField['lastName'] = this.lastName.trim() === '';
            this.isCheckField['firstName'] = this.firstName.trim() === '';
            this.isCheckField['age'] = this.age.trim() === '';
            this.isCheckField['gender'] = this.gender.trim() === '';
            this.isCheckField['email'] = this.email.trim() === '';
            this.isCheckField['phone'] = this.tel.trim() === '';
            this.isCheckField['pass'] = this.pass.trim() === '';
            this.isCheckField['verPass'] = this.verPass.trim() === '';
        }
    }

    goClick() {
        this.playSound();
        setTimeout(() => {
            this.checkBoolean();
            this.validate();
            this.navigateLogin();
        }, 500);
    }
    backToHome() {
        this.playSound();
        setTimeout(() => {
            this.router.navigate(['/app-home']);
        }, 500);
        
    }

    @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;
    playSound() {
        this.audioPlayer.nativeElement.play();
    }
}
