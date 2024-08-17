// angular import
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [[FormsModule],[NgIf],[RouterModule],[HttpClientModule],[ReactiveFormsModule]],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [[ServiceService],[HttpClient]]

})
export default class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  registrationError;

  constructor(
    private router: Router,
    private service: ServiceService,
    private fb:FormBuilder,
    private toastr : ToastrService
  ) {}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    }
  )
  }



  submitForm(){
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (Response) => {
        // console.log(Response);
        // this.registrationError = false;
        localStorage.setItem('token',Response.token);
        localStorage.setItem('user', JSON.stringify(Response.user));
        this.toastr.success("User logged in successfully");
        setTimeout(() => {
          if (Response.user.role === "admin") {
            this.router.navigateByUrl("/Dashboard");
          } else {
            if (Response.user.role === "manager") {
              this.router.navigateByUrl("/ValidationAbsence");
            } else {
              this.router.navigateByUrl("/liste-absence");
            }
          }
        }, 3000); 
      },  
      (error) => {
        // console.error(error);
        this.toastr.error("Votre email et mot de passe sont incorrects");
        // this.registrationError = true;
      }
    );
  }

  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
