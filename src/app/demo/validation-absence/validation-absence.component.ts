import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Spinkit } from 'src/app/theme/shared/components/spinner/spinkits' ;

@Component({
  selector: 'app-validation-absence',
  standalone: true,
  imports: [SharedModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './validation-absence.component.html',
  styleUrl: './validation-absence.component.scss',
  providers : [ServiceService,HttpClient]
})
export class ValidationAbsenceComponent implements OnInit{
  absenseform: FormGroup; 
  constructor(
  private service : ServiceService,
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private toastr : ToastrService
  ){ 
    this.absenseform = this.fb.group({
      status: ['', Validators.required],
    });
  }

  absences: any[] = []; 

  isLoading = false;
  Spinkit = Spinkit;
ngOnInit(): void {
  const userData = localStorage.getItem('user');
  let user = JSON.parse(userData);

  this.isLoading = true; 

  this.service.getabsencebymanager(user.id).subscribe(
  (response) => {
      this.absences = response;
      this.isLoading = false; 

  });
}



onSubmit(id_absence : number): void {
  if (this.absenseform.valid) {

    const userformdata = {
      status : this.absenseform.get('status')?.value,
    };

  console.log(id_absence);
  console.log(userformdata);


    this.service.UpdateStatus(id_absence,userformdata).subscribe(
      (response) =>{
        this.toastr.success("Status Updated successfully");
      },
      (error) => {
        this.toastr.error(error);
      }
    );
    
  } else {
    console.log('Form is invalid');
  }
}


}
