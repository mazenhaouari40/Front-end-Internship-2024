"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[502],{4502:(P,g,o)=>{o.r(g),o.d(g,{ValidationAbsenceComponent:()=>O});var d=o(1626),r=o(4341),p=o(904),l=o(2389),_=o(4322),n=o(3953),f=o(34),m=o(5794),a=o(177),b=o(5639);function C(i,u){if(1&i&&n.nrm(0,"app-spinner",6),2&i){const t=n.XpG();n.Y8G("backgroundColor","#1890ff")("spinner",t.Spinkit.skLine)}}function M(i,u){if(1&i){const t=n.RV6();n.j41(0,"div",7)(1,"figure",8)(2,"figcaption"),n.nrm(3,"img",9),n.j41(4,"h4"),n.EFF(5),n.k0s(),n.j41(6,"p")(7,"span",10),n.EFF(8,"ID:"),n.k0s(),n.j41(9,"span",11),n.EFF(10),n.k0s()(),n.j41(11,"p")(12,"span",10),n.EFF(13,"Type:"),n.k0s(),n.j41(14,"span",11),n.EFF(15),n.k0s()(),n.j41(16,"p")(17,"span",10),n.EFF(18,"D\xe9but:"),n.k0s(),n.j41(19,"span",11),n.EFF(20),n.nI1(21,"date"),n.k0s()(),n.j41(22,"p")(23,"span",10),n.EFF(24,"Fin:"),n.k0s(),n.j41(25,"span",11),n.EFF(26),n.nI1(27,"date"),n.k0s()(),n.j41(28,"form",12),n.bIt("ngSubmit",function(){const s=n.eBV(t).$implicit,c=n.XpG();return n.Njj(c.onSubmit(s.id_absence))}),n.j41(29,"p")(30,"span",10),n.EFF(31,"Status : "),n.k0s(),n.j41(32,"span",11)(33,"select",13)(34,"option",14),n.EFF(35,"Accepte\t"),n.k0s(),n.j41(36,"option",15),n.EFF(37,"Refus\xe9"),n.k0s()()()(),n.j41(38,"div",16)(39,"button",17),n.EFF(40,"Submit"),n.k0s()()()()()()}if(2&i){const t=u.$implicit,e=n.XpG();n.R7$(3),n.Y8G("src","data:image/png;base64,"+t.user.imageencode_64bits,n.B4B),n.R7$(2),n.JRh(t.user.nom),n.R7$(5),n.JRh(t.id_absence),n.R7$(5),n.JRh(t.type),n.R7$(5),n.JRh(n.i5U(21,8,t.debut_d,"yyyy-MM-dd")),n.R7$(6),n.JRh(n.i5U(27,11,t.fin_d,"yyyy-MM-dd")),n.R7$(2),n.Y8G("formGroup",e.absenseform),n.R7$(11),n.Y8G("disabled",e.absenseform.invalid)}}let O=(()=>{class i{constructor(t,e,s,c){this.service=t,this.fb=e,this.route=s,this.toastr=c,this.absences=[],this.isLoading=!1,this.Spinkit=_.N,this.absenseform=this.fb.group({status:["",r.k0.required]})}ngOnInit(){const t=localStorage.getItem("user");let e=JSON.parse(t);this.isLoading=!0,this.service.getabsencebymanager(e.id).subscribe(s=>{this.absences=s,this.isLoading=!1})}onSubmit(t){if(this.absenseform.valid){const e={status:this.absenseform.get("status")?.value};console.log(t),console.log(e),this.service.UpdateStatus(t,e).subscribe(s=>{this.toastr.success("Status Updated successfully")},s=>{this.toastr.error(s)})}else console.log("Form is invalid")}static#n=this.\u0275fac=function(e){return new(e||i)(n.rXU(p.N),n.rXU(r.ok),n.rXU(f.nX),n.rXU(m.tw))};static#t=this.\u0275cmp=n.VBU({type:i,selectors:[["app-validation-absence"]],standalone:!0,features:[n.Jv_([p.N,d.Qq]),n.aNF],decls:10,vars:2,consts:[[3,"backgroundColor","spinner",4,"ngIf"],["charset","utf-8"],["name","viewport","content","width=device-width, initial-scale=1"],[1,"container","page-container"],[1,"row","gutters"],["class","col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12",4,"ngFor","ngForOf"],[3,"backgroundColor","spinner"],[1,"col-xl-3","col-lg-3","col-md-3","col-sm-4","col-12"],[1,"user-card","green"],["alt","Soeng Souy",1,"profile",3,"src"],[1,"attribute"],[1,"value"],[3,"ngSubmit","formGroup"],["id","status","formControlName","status"],["value","Accepte"],["value","Refus\xe9"],[1,"button-container"],["type","submit",1,"submit-button",3,"disabled"]],template:function(e,s){1&e&&(n.DNE(0,C,1,2,"app-spinner",0),n.j41(1,"head"),n.nrm(2,"meta",1),n.j41(3,"title"),n.EFF(4,"bs4 Contacts cards"),n.k0s(),n.nrm(5,"meta",2),n.k0s(),n.j41(6,"body")(7,"div",3)(8,"div",4),n.DNE(9,M,41,14,"div",5),n.k0s()()()),2&e&&(n.Y8G("ngIf",s.isLoading),n.R7$(9),n.Y8G("ngForOf",s.absences))},dependencies:[l.G,a.Sq,a.bT,r.qT,r.xH,r.y7,r.wz,r.BC,r.cb,r.j4,r.JD,b.t,a.vh,d.q1,r.X1,r.YN],styles:['@charset "UTF-8";.card-content[_ngcontent-%COMP%]{position:relative;padding:15px}.line-container[_ngcontent-%COMP%]{margin-bottom:10px}.white-line[_ngcontent-%COMP%]{height:2px;background-color:#fff}.image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:10px}.card-image[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;object-fit:cover}body[_ngcontent-%COMP%]{background:#eee}.page-container[_ngcontent-%COMP%]{margin-top:40px}figure.user-card[_ngcontent-%COMP%]{background:#fff;padding:20px;border-top:3px solid #f2f2f2;border:1px solid #e1e5f1;text-align:center}figure.user-card.red[_ngcontent-%COMP%]{border-top:3px solid #fc6d4c}figure.user-card.green[_ngcontent-%COMP%]{border-top:3px solid #3ecfac}figure.user-card.blue[_ngcontent-%COMP%]{border-top:3px solid #5a99ee}figure.user-card.yellow[_ngcontent-%COMP%]{border-top:3px solid #ffc139}figure.user-card.orange[_ngcontent-%COMP%]{border-top:3px solid #ff5000}figure.user-card.teal[_ngcontent-%COMP%]{border-top:3px solid #47BCC7}figure.user-card.pink[_ngcontent-%COMP%]{border-top:3px solid #ff9fd0}figure.user-card.brown[_ngcontent-%COMP%]{border-top:3px solid #79574b}figure.user-card.purple[_ngcontent-%COMP%]{border-top:3px solid #904e95}figure.user-card.fb[_ngcontent-%COMP%]{border-top:3px solid #3B5998}figure.user-card.gp[_ngcontent-%COMP%]{border-top:3px solid #E02F2F}figure.user-card[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{border-radius:5px;max-width:72px;margin-bottom:20px}figure.user-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 5px}figure.user-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0 0 15px;color:#8796af;font-size:14px}figure.user-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;color:#8796af;line-height:150%;font-size:.85rem;text-align:left;padding:5px 0 10px 50px}figure.user-card[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]{font-weight:700;margin-right:10px;padding-left:0}figure.user-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#333}figure.user-card[_ngcontent-%COMP%]   ul.contacts[_ngcontent-%COMP%]{margin:0;padding:0 0 15px;line-height:150%;font-size:.85rem}figure.user-card[_ngcontent-%COMP%]   ul.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.2rem 0}figure.user-card[_ngcontent-%COMP%]   ul.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#5a99ee}figure.user-card[_ngcontent-%COMP%]   ul.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{min-width:36px;float:left;font-size:1rem}figure.user-card[_ngcontent-%COMP%]   ul.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]{color:#ff5000}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none}.submit-button[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none;padding:7px 40px;margin-top:25px;font-size:16px;cursor:pointer;border-radius:5px;transition:background-color .3s}.submit-button[_ngcontent-%COMP%]:hover{background-color:#006400}']})}return i})()}}]);