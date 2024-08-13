import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [NgFor,HttpClientModule,FormsModule,NgIf,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers : [ServiceService,HttpClient]
})

export class UserFormComponent implements OnInit {
  userForm: FormGroup; 

  constructor(
    private service : ServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr : ToastrService

  ){
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      email: [ [Validators.required, Validators.email]],
      num_tel: ['', Validators.required],
      password: ['', Validators.required],
      image: [null],
      role: ['', Validators.required],
      manager: ['']
    });


    this.userForm.get('role')?.valueChanges.subscribe(value => {
      this.selectedRole = value;
      this.updateManagerField();
    });

  }

updateManagerField(): void {
  const managerControl = this.userForm.get('manager');

  if (this.selectedRole === 'collaborateur') {
    managerControl?.setValidators(Validators.required);
  } else {
    managerControl?.clearValidators();
    managerControl?.setValue(null); // Reset the manager field to null
  }

  managerControl?.updateValueAndValidity();
}



  managerList: any [];
  userdata: any = []; 
  user: any ;

  selectedRole: string = ''; 

  ngOnInit() {

    let id_route = this.route.snapshot.params['id'];

    this.service.getManagers(id_route).subscribe(
        (response) => {
          this.managerList =response;
        });

    let id = this.route.snapshot.params['id'];
 
    this.service.getUser(id).subscribe(
    (user: any) => {
      this.userdata = user;
    },
    error => {
      console.error('Error fetching users:', error);
    });
    
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = new FormData();
      let id_route = this.route.snapshot.params['id'];

      const userformdata = {
        id : id_route,
        nom: this.userForm.get('nom')?.value,
        // email: this.userForm.get('email')?.value,
        num_tel: this.userForm.get('num_tel')?.value,
        password: this.userForm.get('password')?.value,
        role : this.userForm.get('role')?.value,
        ...(this.selectedRole === 'collaborateur' ? {
          manager: {
            id: parseInt(this.userForm.get('manager')?.value) 
          }
        } : {})
      };
      console.log("id  "+ id_route);

      console.log(userformdata);
      formData.append('user', JSON.stringify(userformdata));
      formData.append('file', this.userForm.get('image')?.value);
      
      this.service.EditProfile_admin(formData,id_route).subscribe(
        () =>{
          this.toastr.success("User Updated successfully");
        },
        (error) => {
          
          console.error('Error!', error);
          this.toastr.error(error);
        }
      );
      

      
    } else {
      console.log('Form is invalid');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.userForm.patchValue({
      image: file
    });
  }






}
