import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-edit-popup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-edit-popup.component.html',
  styleUrl: './user-edit-popup.component.scss'
})
export class UserEditPopupComponent  {
  userForm: FormGroup;
  showPopup = false;

  roles = ['Admin', 'User', 'Manager'];
  managers = ['Manager 1', 'Manager 2', 'Manager 3']; // This should be populated dynamically

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      num_tel: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Adjust pattern as needed
      role: ['', Validators.required],
      manager: [''],
      image: [null] // For file input
    });
  }

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
