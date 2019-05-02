import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AdminService } from "../user.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isUser = "";
  @Input("token") token: string;

  constructor(private fb: FormBuilder, private dbAdmin: AdminService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: "",
      password: ""
    });
  }
  onSignIn() {
    this.submitted = true;
    this.dbAdmin
      .login(this.loginForm.value)
      .subscribe(
        res => (
          (this.isUser = res.isUser),
          (this.token = res.token),
          console.log(this.token),
          localStorage.setItem("isUser", this.isUser)
        )
      );
  }
}
