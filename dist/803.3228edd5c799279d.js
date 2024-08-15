"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[803],{8803:(g,i,a)=>{a.r(i),a.d(i,{default:()=>p});var c=a(34),e=a(4341),l=a(1626),m=a(904),t=a(3953),u=a(5794);const d=()=>["/login"];let p=(()=>{class s{constructor(r,n,o){this.service=r,this.fb=n,this.toastr=o}ngOnInit(){this.registerForm=this.fb.group({nom:["",[e.k0.required]],email:["",[e.k0.required]],num_tel:["",[e.k0.required]],password:["",[e.k0.required]],confirmPassword:["",[e.k0.required]]},{validator:this.passwordValidator})}passwordValidator(r){const n=r.get("password")?.value,o=r.get("confirmPassword")?.value;n!=o?r.get("confirmPassword")?.setErrors({passwordMisMatch:!0}):r.get("confirmPassword")?.setErrors(null)}submitForm(){console.log(this.registerForm.value);const n={...this.registerForm.value,role:"collaborateur"};this.service.register(n).subscribe(o=>{this.toastr.success("User Created successfully"),this.isRegistrationSuccessful=!0,this.registrationError=!1},o=>{this.toastr.error("This email already exists"),this.isRegistrationSuccessful=!1,this.registrationError=!0})}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(m.N),t.rXU(e.ok),t.rXU(u.tw))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["app-register"]],standalone:!0,features:[t.Jv_([[m.N],[l.Qq]]),t.aNF],decls:43,vars:4,consts:[[1,"auth-main"],[1,"auth-wrapper","v3"],[1,"auth-form"],[1,"auth-header"],[1,"card","my-5"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-end","mb-4"],[1,"mb-0"],[1,"link-primary",3,"routerLink"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3"],["for","company",1,"form-label"],["type","text","id","company","placeholder","Nom & Pr\xe9nom","formControlName","nom","autocomplete","off",1,"form-control"],["for","emailAddress",1,"form-label"],["type","email","id","emailAddress","placeholder","Email Address","formControlName","email","autocomplete","off",1,"form-control"],["type","text","id","company","placeholder","11111","formControlName","num_tel","autocomplete","off",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","placeholder","Password","formControlName","password","autocomplete","off",1,"form-control"],["type","password","id","password","placeholder","Password","formControlName","confirmPassword","autocomplete","off",1,"form-control"],[1,"mt-4","text-sm","text-muted"],["href","javascript:",1,"text-primary"],[1,"d-grid","mt-3"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(n,o){1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.nrm(3,"div",3),t.j41(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3",7)(8,"b"),t.EFF(9,"Sign up"),t.k0s()(),t.j41(10,"a",8),t.EFF(11,"Already have an account?"),t.k0s()(),t.j41(12,"form",9),t.bIt("ngSubmit",function(){return o.submitForm()}),t.j41(13,"div",10)(14,"label",11),t.EFF(15,"Nom & Pr\xe9nom"),t.k0s(),t.nrm(16,"input",12),t.k0s(),t.j41(17,"div",10)(18,"label",13),t.EFF(19,"Email Address*"),t.k0s(),t.nrm(20,"input",14),t.k0s(),t.j41(21,"div",10)(22,"label",11),t.EFF(23,"Numero de t\xe9lephone "),t.k0s(),t.nrm(24,"input",15),t.k0s(),t.j41(25,"div",10)(26,"label",16),t.EFF(27,"Password"),t.k0s(),t.nrm(28,"input",17),t.k0s(),t.j41(29,"div",10)(30,"label",16),t.EFF(31,"Confirm Password"),t.k0s(),t.nrm(32,"input",18),t.k0s(),t.j41(33,"p",19),t.EFF(34," By Signing up, you agree to our "),t.j41(35,"a",20),t.EFF(36,"Terms of Service"),t.k0s(),t.EFF(37," and "),t.j41(38,"a",20),t.EFF(39,"Privacy Policy"),t.k0s()(),t.j41(40,"div",21)(41,"button",22),t.EFF(42,"Create Account"),t.k0s()()()()()()()()),2&n&&(t.R7$(10),t.Y8G("routerLink",t.lJ4(3,d)),t.R7$(2),t.Y8G("formGroup",o.registerForm),t.R7$(29),t.Y8G("disabled",o.registerForm.invalid))},dependencies:[c.iI,c.Wk,e.X1,e.qT,e.me,e.BC,e.cb,e.j4,e.JD,l.q1],styles:['.auth-main[_ngcontent-%COMP%]{position:relative}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;min-height:100vh}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .saprator[_ngcontent-%COMP%]{position:relative;display:flex;align-self:center;justify-content:center}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .saprator[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:0;width:100%;height:1px;background:var(--bs-border-color);z-index:1}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .saprator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem;padding:8px 24px;background:#fff;z-index:5;text-transform:capitalize;color:#262626;font-weight:500}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]{display:flex;align-items:center}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]{flex-direction:column;min-height:100vh;padding:24px;background-repeat:no-repeat;background-size:auto 82%;background-position:left bottom;position:relative;justify-content:space-between}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:5}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#fff3;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-grow:1}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%;max-width:495px;box-shadow:none}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{padding-left:15px}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:underline}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-footer[_ngcontent-%COMP%], .auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}']})}return s})()}}]);