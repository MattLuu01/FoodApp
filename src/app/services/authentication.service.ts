import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Users } from "../interfaces/users";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { LocalStorageService } from "./localstorage.service";
import { Router } from "@angular/router";
import { nullSafeIsEquivalent } from "@angular/compiler/src/output/output_ast";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private userSubject!: BehaviorSubject<Users>;
  public user!: Observable<Users>;
  baseUrl: string = 'http://localhost:3000/authusers'


  constructor(private router: Router,private http: HttpClient) {
    this.userSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')! ));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): Users {
    return this.userSubject.value;
}

login(userEmail: string, userPassword: string) {
  return this.http
    .post<any>(`http://localhost:3000/authusers`, {
      userEmail,
      userPassword
    })
    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
  }));
}
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
