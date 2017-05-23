import {Injectable} from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {Http, Headers} from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import {Subject} from 'rxjs/Subject';


@Injectable()


export class UserService implements CanActivate {
    isLogged:boolean = false;
    isLoggedIn: Subject<boolean>  = new Subject<boolean>();
    loggedInUser: Subject<any>  = new Subject<any>();

    constructor(private router: Router, private http: Http, private flashMessagesService: FlashMessagesService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.isLogged) {
            return true;
        }
        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string) {
        var user = {
            username: email,
            password: password
        }
        return this.http.post('/api/user', user).map((res) => res.json());

    }

    login(email: string, password: string) {
        var user = {
            username: email,
            password: password
        }

        return this.http.post('/api/authenticate', user).map((res) => res.json())
            .subscribe(
                // We're assuming the response will be an object
                // with the JWT on an token key
                data => {
                    localStorage.setItem('token', data.token);
                    this.isLoggedIn.next(true);
                    this.isLogged = true;
                    this.loggedInUser.next({email: email});
                    this.router.navigateByUrl('/');
                },
                error => {
                    this.flashMessagesService.show(JSON.parse(error._body).message || error.statusText,
                        { cssClass: 'alert-danger', timeout: 10000 })
                }
            );
    }


    logout() {
        localStorage.removeItem('token');
        this.isLoggedIn.next(false);
        this.isLogged = false;
        this.router.navigateByUrl('/');
    }

}