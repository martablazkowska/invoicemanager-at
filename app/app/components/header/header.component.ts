import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    isUserLoggedIn: boolean;


    constructor (private userSVC: UserService){

        this.userSVC.isLoggedIn.subscribe((value) => {
            console.log(value);
            this.isUserLoggedIn = value;
        });
    }

    ngOnInit(){

    }

    logout(){
        this.userSVC.logout();
    }
}
