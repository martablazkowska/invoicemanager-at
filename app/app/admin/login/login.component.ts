import {Component} from "@angular/core";
import {UserService} from '../../shared/user.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    username: string;
    password1: string;

    constructor(private userSVC: UserService) {
    }

    login(){
        if(this.username && this.password1) {
            this.userSVC.login(this.username, this.password1);
        }
    }
}
