// angular import
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';


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

  constructor(private router: Router,private service: ServiceService,
    private fb:FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    }
  )
  }



  submitForm(){
    //  console.log("hello");
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (Response) => {
        console.log(Response);
        this.registrationError = false;
        localStorage.setItem('token',Response.token);
      
        this.router.navigateByUrl("/dashboard/default");
        
      },  
      (error) => {
        console.error(error);
        this.registrationError = true;
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
