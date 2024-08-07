// angular import
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party

// icon
import { IconService } from '@ant-design/icons-angular';
import {
  BellOutline,
  SettingOutline,
  GiftOutline,
  MessageOutline,
  PhoneOutline,
  CheckCircleOutline,
  LogoutOutline,
  EditOutline,
  UserOutline,
  ProfileOutline,
  WalletOutline,
  QuestionCircleOutline,
  LockOutline,
  CommentOutline,
  UnorderedListOutline,
  ArrowRightOutline,
  GithubOutline
} from '@ant-design/icons-angular/icons';
import { UserEditPopupComponent } from 'src/app/demo/user-edit-popup/user-edit-popup.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-right',
  standalone: true,
  imports: [SharedModule, RouterModule,UserEditPopupComponent,ReactiveFormsModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  @Input() styleSelectorToggle!: boolean;
  @Output() Customize = new EventEmitter();
  windowWidth: number;
  screenFull: boolean = true;

  constructor(private iconService: IconService,private router: Router,private formBuilder: FormBuilder,private fb: FormBuilder) {
    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(
      ...[
        CheckCircleOutline,
        GiftOutline,
        MessageOutline,
        SettingOutline,
        PhoneOutline,
        LogoutOutline,
        UserOutline,
        EditOutline,
        ProfileOutline,
        QuestionCircleOutline,
        LockOutline,
        CommentOutline,
        UnorderedListOutline,
        ArrowRightOutline,
        BellOutline,
        GithubOutline,
        WalletOutline
      ]
    );


    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // num_tel: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Adjust pattern as needed
       num_tel: ['', [Validators.required,]], // Adjust pattern as needed
      role: ['', Validators.required],
      manager: [''],
      image: [null] // For file input
    });

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
    // {
    //   icon: 'profile',
    //   title: 'Social Profile'
    // },
    // {
    //   icon: 'wallet',
    //   title: 'Billing'
    // }
  ];

  setting = [
    {
      icon: 'question-circle',
      title: 'Support'
    },
    {
      icon: 'user',
      title: 'Account Settings'
    },
    {
      icon: 'lock',
      title: 'Privacy Center'
    },
    {
      icon: 'comment',
      title: 'Feedback'
    },
    {
      icon: 'unordered-list',
      title: 'History'
    }
  ];
  checkToken() {
    const token = localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.checkToken(); 
    this.router.navigateByUrl("/login");
};



userForm: FormGroup;
  showPopup = false;

  roles = [ 'Collaborateur', 'Manager'];
  managers = ['Manager 1', 'Manager 2', 'Manager 3']; // This should be populated dynamically



  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.closePopup();
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
