import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { ServiceService } from 'src/app/Service/service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [[RouterModule],[ReactiveFormsModule],[HttpClientModule],[NgIf],[RouterModule]],
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
   private fb:FormBuilder,
   private toastr : ToastrService,
   private router: Router,
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
   const formValue = this.registerForm.value;
   const submissionData = {
    ...formValue,
    role: "collaborateur"
  };


   this.service.register(submissionData).subscribe(
     (Response) => {
      this.toastr.success("User Created successfully");
      
      setTimeout(() => {
          this.router.navigateByUrl("/login");
      }, 1000); 

      this.isRegistrationSuccessful = true;
       this.registrationError = false;
     },
     (error) => {
      this.toastr.error("This email already exists");
      this.isRegistrationSuccessful = false; 
       this.registrationError = true;
     }
   );

 }




}
