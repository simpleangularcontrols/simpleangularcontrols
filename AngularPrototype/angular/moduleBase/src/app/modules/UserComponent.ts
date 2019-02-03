import { Component } from "@angular/core";
import { UserService } from "../services/UserService";
import { AuthenticationService } from "../services/AuthenticationService";
import { OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'ngUserComponent',
  templateUrl: './UserComponent.html'
})
export class UserComponent {

  constructor(private userService: UserService, private authService: AuthenticationService, private toastr: ToastrService) {

  }

  protected login(): void {
    this.authService.Login("admin", "12345678");
  }


  users: string[];
  users2: string[];

  protected loadusers(): void {

    this.userService.GetUsers().subscribe((result) => {

      this.users = result;

    }, (err) => {
      this.toastr.error(err.message);
      this.users = [];
    });

    this.userService.GetUsers().subscribe((result) => {

      this.users2 = result;

    }, (err) => {
      this.toastr.error(err.message);
      this.users2 = [];
    });
  }


}