import { Component, OnInit } from "@angular/core";
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
  token = "";

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
      .subscribe(res => (this.token = res.token));
  }
}
