import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { IconService } from '@ant-design/icons-angular';
import {
  BellOutline,
  SettingOutline,
  CheckCircleOutline,
  LogoutOutline,
  EditOutline,
  UserOutline,
  UnorderedListOutline,} from '@ant-design/icons-angular/icons';
import { UserEditPopupComponent } from 'src/app/demo/user-edit-popup/user-edit-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-right',
  standalone: true,
  imports: [SharedModule, RouterModule,UserEditPopupComponent,ReactiveFormsModule,HttpClientModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers : [[ServiceService],[HttpClient]]

})
export class NavRightComponent implements OnInit {

  constructor(private iconService: IconService,private router: Router,private fb: FormBuilder,private http: HttpClient,private service: ServiceService,
    private toastr : ToastrService
  ) {
    this.iconService.addIcon(
      ...[
        CheckCircleOutline,
        SettingOutline,
        LogoutOutline,
        UserOutline,
        EditOutline,
        UnorderedListOutline,
        BellOutline,]);
  
        this.userForm = this.fb.group({
          nom: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]], 
          num_tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
          password : ['', [Validators.required]],
          confirmpassword : ['',[Validators.required]],
          image: [null] 
        },{validator: this.passwordValidator});
      }

  profile = [
    {
      icon: 'edit',
      title: 'Edit Profile'
    },
    {
      icon: 'user',
      title: 'View Profile'
    },
  ];


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // this.checkToken(); 
    this.router.navigateByUrl("/login");
};

  showPopup = false;
  openPopup(): void {
    this.showPopup = true;
  }
  closePopup(): void {
    this.showPopup = false;
  }


  user: any ;
  
  user_copy: any ;

  userimage: any;

  miseajourprofile( ){
  const userData = localStorage.getItem('user');
  this.user = JSON.parse(userData);
  this.service.getUser(this.user.id).subscribe(
    (response) => {
      this.user = response;
      this.user_copy = Object.assign({}, response);
    }
  )
  this.service.ImageUser(this.user.id).subscribe(
    (response: any) => {
    this.userimage = response;
    }
  );
}

  ngOnInit() {
    this.miseajourprofile();
  }
  
  
  passwordValidator(FormGroup: FormGroup){
    const password = FormGroup.get('password')?.value;
    const confirmPassword = FormGroup.get('confirmpassword')?.value;
    if (password != confirmPassword){
      FormGroup.get('confirmpassword')?.setErrors({ passwordMisMatch: true})
    }
    else{
      FormGroup.get('confirmpassword')?.setErrors(null)
    }
  }

  userForm: FormGroup; 
  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = new FormData();
      const userformdata = {
        id : this.user.id,
        nom: this.userForm.get('nom')?.value,
        email: this.userForm.get('email')?.value,
        num_tel: this.userForm.get('num_tel')?.value,
        password: this.userForm.get('password')?.value,
      };

      formData.append('user', JSON.stringify(userformdata));
      formData.append('file', this.userForm.get('image')?.value);
      
      this.service.EditProfile(formData,this.user.id).subscribe(
        response =>{
          // console.log('Success! from formdata', response)
          window.location.reload();
          // this.toastr.success("User profile updated successfuly");

        },
        error => console.error('Error!', error)
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

