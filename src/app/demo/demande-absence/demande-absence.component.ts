import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-demande-absence',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './demande-absence.component.html',
  styleUrl: './demande-absence.component.scss',
  providers : [[ServiceService],[HttpClient]]

})
export class DemandeAbsenceComponent implements OnInit {
  DemandeAbsence:  FormGroup | undefined;

  constructor(
    private fb:FormBuilder,
    private service : ServiceService,
    private toastr : ToastrService
  ){}

  ngOnInit(): void {
    this.DemandeAbsence = this.fb.group({
      type: ['',[Validators.required]],
      debut_d: ['',[Validators.required]],
      fin_d: ['',[Validators.required]],
    });
  }

  submitForm(){
    if (this.DemandeAbsence.valid) {
      const formValue = this.DemandeAbsence.value;
      const userData = localStorage.getItem('user');
      let user = JSON.parse(userData);

    const submissionData = {
      ...formValue,
      user: {
        id: user.id
      },
      status: "Demande"
    };
    console.log(submissionData);

    this.service.addabsence(submissionData).subscribe(
        (Response) => {
            // console.log();
            this.toastr.success('absence added successfuly')
        },
        (error) =>
        {
          console.log('error');
        }

    )

  }
    // this.service.register(this.registerForm.value).subscribe(
    //   (Response) => {
    //     console.log(Response);
    //     this.isRegistrationSuccessful = true;
    //     this.registrationError = false;
    //   },
    //   (error) => {
    //     console.error(error);
    //     this.isRegistrationSuccessful = false; 
    //     this.registrationError = true;
    //   }
    // );
 
  }





}
