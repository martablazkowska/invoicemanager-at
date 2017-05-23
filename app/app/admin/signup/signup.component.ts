import {Component} from "@angular/core";
import {UserService} from '../../shared/user.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignUpComponent {
    username: string;
    password1: string;
    password2: string;
    passwordFailed: boolean = false;
    tasks: any;

    constructor(private userSVC: UserService) {
    }

    register(){
        this.passwordFailed = (this.password1 != this.password2);
        if(this.username && !this.passwordFailed) {
            this.userSVC.register(this.username, this.password1)
                .subscribe(user => {
                    console.log(user);
                })
        }
    }
}