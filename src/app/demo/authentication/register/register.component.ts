import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [[RouterModule],[ReactiveFormsModule],[HttpClientModule],[NgIf]],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [[ServiceService],[HttpClient]]

})
export default class RegisterComponent  implements OnInit {

  registerForm: FormGroup | undefined;
  isRegistrationSuccessful ;
  registrationError;

 constructor(
   private service: ServiceService,
   private fb:FormBuilder
 ){}

 ngOnInit(): void {
   this.registerForm = this.fb.group({
     nom: ['',[Validators.required]],
     email: ['',[Validators.required]],
     num_tel: ['',[Validators.required]],
     password: ['',[Validators.required]],
     confirmPassword : ['',[Validators.required]],
   },{validator: this.passwordValidator}
 )

 }

 passwordValidator(FormGroup: FormGroup){
   const password = FormGroup.get('password')?.value;
   const confirmPassword = FormGroup.get('confirmPassword')?.value;
   if (password != confirmPassword){
     FormGroup.get('confirmPassword')?.setErrors({ passwordMisMatch: true})
   }
   else{
     FormGroup.get('confirmPassword')?.setErrors(null)
   }
 }

 submitForm(){
   console.log(this.registerForm.value);
   this.service.register(this.registerForm.value).subscribe(
     (Response) => {
       console.log(Response);
       this.isRegistrationSuccessful = true;
       this.registrationError = false;
     },
     (error) => {
       console.error(error);
       this.isRegistrationSuccessful = false; 
       this.registrationError = true;
     }
   );

 }




}
