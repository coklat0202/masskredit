webpackJsonp([6],{707:function(t,n,e){"use strict";var a=e(0),o=e(87),s=function(){function LoanApprovedService(t){this.http=t,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.detailInvestorUrl="https://masscredit-api.stagingapps.net/user/investor/detail",this.listInstallmentUrl="https://masscredit-api.stagingapps.net/user/loan/payment-history/get-list"}return LoanApprovedService.prototype.getDetailInvestor=function(t){return this.http.post(this.detailInvestorUrl,t,this.options).toPromise().then(function(t){return t.json()}).catch(this.handleError)},LoanApprovedService.prototype.getListInstallment=function(t){return this.http.post(this.listInstallmentUrl,t,this.options).toPromise().then(function(t){return t.json()}).catch(this.handleError)},LoanApprovedService.prototype.handleError=function(t){var n=JSON.parse(t._body);return n},LoanApprovedService=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object])],LoanApprovedService);var t}();n.LoanApprovedService=s},708:function(t,n,e){"use strict";var a=e(0),o=e(50),s=e(87),i=function(){function VerifyComponent(t,n){this.router=t,this.http=n,this.headers=new s.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new s.RequestOptions({headers:this.headers}),this.loaderVerify=0,this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataVerify={access_token:this.access_token,loan_id:null,investor_id:null,history_payment_id:null,otp:null,password:null},this.dataDetailInstallment={dataLoan:null,dataInvestor:null,dataInstallment:{history_payment_id:null}},this.onHide=new a.EventEmitter,this.showLoader=new a.EventEmitter,this.statusInvestor1=new a.EventEmitter,this.paidInstallmentUrl="https://masscredit-api.stagingapps.net/user/loan/payment",this.otpUrl="https://masscredit-api.stagingapps.net/user/loan/payment-otp",this.dataConfirm=0,this.otp={access_token:this.access_token}}return VerifyComponent.prototype.ngOnInit=function(){this.getOtp(),null!=this.dataDetailInstallment&&(this.dataVerify.history_payment_id=this.dataDetailInstallment.dataInstallment.history_payment_id,this.dataVerify.investor_id=this.dataDetailInstallment.dataInvestor,this.dataVerify.loan_id=this.dataDetailInstallment.dataLoan)},VerifyComponent.prototype.hideInstallmentNotPaid=function(t){this.onHide.emit(t)},VerifyComponent.prototype.submitVerifyInstallment=function(t){jQuery("#verifyInstallmentForm").valid()?this.postPaidInstallment():alert("Data tidak valid")},VerifyComponent.prototype.postPaidInstallment=function(){var t=this;this.http.post(this.paidInstallmentUrl,this.dataVerify,this.options).map(function(t){return t.json()}).subscribe(function(n){var e=n.meta.message;alert(e),t.statusInvestor1.emit(1),t.hideInstallmentNotPaid(0)},function(n){var e=JSON.parse(n._body),a=e.meta.message;e.meta.code;return"unauthorized"==a?(alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")):("Password salah!"==a&&(alert("Password salah!"),t.loaderVerify=1),void("Saldo Anda tidak mencukupi."==a&&(alert(a),t.hideInstallmentNotPaid(0))))})},VerifyComponent.prototype.getOtp=function(){var t=this;this.http.post(this.otpUrl,this.otp,this.options).map(function(t){return t.json()}).subscribe(function(n){t.loaderVerify=1,t.dataVerify.otp=n.data.otp},function(t){var n=JSON.parse(t._body);n.meta.code,n.meta.message})},__decorate([a.Input(),__metadata("design:type",Object)],VerifyComponent.prototype,"dataDetailInstallment",void 0),__decorate([a.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"onHide",void 0),__decorate([a.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"showLoader",void 0),__decorate([a.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"statusInvestor1",void 0),VerifyComponent=__decorate([a.Component({selector:"verify",template:e(984)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Router&&o.Router)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Http&&s.Http)&&n||Object])],VerifyComponent);var t,n}();n.VerifyComponent=i},870:function(t,n,e){"use strict";var a=e(0),o=e(50),s=e(87),i=e(153),l=e(72),r=e(871),d=e(874),c=e(873),p=e(875),m=e(879),u=e(878),v=e(881),h=e(707);n.routes=[{path:"",component:r.LoanApprovedComponent}];var f=function(){function LoanApprovedModule(){}return LoanApprovedModule.routes=n.routes,LoanApprovedModule=__decorate([a.NgModule({declarations:[r.LoanApprovedComponent,d.PartComponent,c.BePaidComponent,p.NotPaidComponent,m.VerifyComponent,u.FormVerifyComponent,v.ScoringFormComponent],imports:[s.HttpModule,i.FormsModule,l.CommonModule,o.RouterModule.forChild(n.routes)],providers:[h.LoanApprovedService]}),__metadata("design:paramtypes",[])],LoanApprovedModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=f},871:function(t,n,e){"use strict";var a=e(0),o=e(87),s=e(50),i=e(707),l=function(){function LoanApprovedComponent(t,n,e,a){this.http=t,this.router=n,this.activatedRoute=e,this.loanApprovedService=a,this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataInvestor={access_token:this.access_token,investor_id:null,loan_id:null},this.dataListInstallment={access_token:this.access_token,investor_id:null,loan_id:null},this.dataDetailInvestor={},this.loaderDetailInvestor=0,this.dataPayment=[],this.dataScoring={access_token:this.access_token,id_investor:null},this.imageRate100=[],this.imageRate0=[],this.detailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null}}return LoanApprovedComponent.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(n){var e=n.id,a=n.investorId;null!=e&&null!=a&&(t.dataListInstallment.loan_id=e,t.dataListInstallment.investor_id=a,t.dataInvestor.investor_id=a,t.dataInvestor.loan_id=e,t.detailInstallment.dataLoan=e,t.detailInstallment.dataInvestor=a,null!=t.dataInvestor.investor_id&&null!=t.dataInvestor.loan_id&&t.getDetailInvestor())})},LoanApprovedComponent.prototype.ngDoCheck=function(){1==this.statusChanges&&this.getListInstallment()},LoanApprovedComponent.prototype.statusInvestor1=function(t){this.statusChanges=t},LoanApprovedComponent.prototype.getDetailInvestor=function(){var t=this;try{this.loanApprovedService.getDetailInvestor(this.dataInvestor).then(function(n){var e=n.meta.message,a=JSON.stringify(n.meta.code),o=n.data;t.dataScoring.id_investor=o.investor_id,"4"===a.charAt(0)&&t.handleError(e),"2"===a.charAt(0)&&t.handleSuccess(o)})}finally{this.getListInstallment()}},LoanApprovedComponent.prototype.handleError=function(t){"unauthorized"===t&&(alert("Maaf akses token tidak terdaftar"),this.router.navigate(["/dashboard/sign-out"]))},LoanApprovedComponent.prototype.handleSuccess=function(t){var n="assets/img/default_profile.png";""==t.investor_image&&(t.investor_image=n);var e=[1,1.5,2,2.5,3,3.5,4,4.5,5],a=Number(t.avg_reviews);if(0===a)for(var o=5;o>=1;o--)this.imageRate0.push(o);else for(var s=0,i=e;s<i.length;s++){var l=i[s];if(l===a){var r=l.toString(),d=Number(r),c=5;if(r.match(/^[\d]\.\d$/)){for(var p=Number(r.split(".")[0]),m=4-p,o=1;o<=m;o++)this.imageRate0.push(o);for(var o=1;o<=p;o++)this.imageRate100.push(o);r.match(/^[\d]\.5/)&&(this.imageRate50=1)}else{for(var m=c-d,o=1;o<=d;o++)this.imageRate100.push(o);for(var o=1;o<=m;o++)this.imageRate0.push(o)}}}this.dataDetailInvestor=t;var u=t.amount;this.delimiterSalary(u)},LoanApprovedComponent.prototype.delimiterSalary=function(t){try{var n=!1,e=t.toString();e<0&&(n=!0),e=e.replace(".",""),e=e.replace("-","");for(var a="",o=e.length,s=0,i=o;i>0;i--)s+=1,a=s%3==1&&1!=s?e.substr(i-1,1)+"."+a:e.substr(i-1,1)+a;n&&(a="-"+a);var l="Rp.";this.dataInvestAmount=l.concat(a)}finally{this.getListInstallment()}},LoanApprovedComponent.prototype.getListInstallment=function(){var t=this;this.loanApprovedService.getListInstallment(this.dataListInstallment).then(function(n){var e=(n.meta.message,JSON.stringify(n.meta.code),n.data.history_payment);1==t.statusChanges&&(t.statusChanges=null);try{for(var a=0;a<e.length;a++){var o=e[a],s=o.pokok,i=!1,l=s.toString();l<0&&(i=!0),l=l.replace(".",""),l=l.replace("-","");for(var r="",d=l.length,c=0,p=d;p>0;p--)c+=1,r=c%3==1&&1!=c?l.substr(p-1,1)+"."+r:l.substr(p-1,1)+r;i&&(r="-"+r);var m="Rp.";o.pokok=m.concat(r)}}finally{try{for(var a=0;a<e.length;a++){var o=e[a],s=o.total_payment,i=!1,l=s.toString();l<0&&(i=!0),l=l.replace(".",""),l=l.replace("-","");for(var r="",d=l.length,c=0,u=d;u>0;u--)c+=1,r=c%3==1&&1!=c?l.substr(u-1,1)+"."+r:l.substr(u-1,1)+r;i&&(r="-"+r);var m="Rp.";o.total_payment=m.concat(r)}}finally{try{t.dataPayment=e}finally{t.loaderDetailInvestor=1}}}})},LoanApprovedComponent.prototype.showNotPaidForm=function(t){for(var n=0,e=this.dataPayment;n<e.length;n++){var a=e[n];a.history_payment_id==t&&(this.detailInstallment.dataInstallment=a)}this.statusShowForm=0,this.showDetailInstallment=1},LoanApprovedComponent.prototype.showPaidForm=function(t){for(var n=0,e=this.dataPayment;n<e.length;n++){var a=e[n];a.history_payment_id==t&&(this.detailInstallment.dataInstallment=a)}this.statusShowForm=1,this.showDetailInstallment=1},LoanApprovedComponent.prototype.onHide=function(t){this.showDetailInstallment=t},LoanApprovedComponent.prototype.hideForm=function(t){this.scoringForm=t},LoanApprovedComponent.prototype.showScoringForm=function(){this.scoringForm=1},LoanApprovedComponent=__decorate([a.Component({selector:"loan-approved",template:e(980)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object,"function"==typeof(l="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&l||Object,"function"==typeof(r="undefined"!=typeof i.LoanApprovedService&&i.LoanApprovedService)&&r||Object])],LoanApprovedComponent);var t,n,l,r}();n.LoanApprovedComponent=l},872:function(t,n,e){"use strict";var a=e(0),o=e(87),s=e(50),i=function(){function BePaidComponent(t,n){this.http=t,this.router=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataInvestor={access_token:this.access_token,investor_id:null,loan_id:null},this.dataDetailInvestor={},this.loaderInstallmentPaid=0,this.loaderDetailInvestor=0,this.dataDetailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null},this.onHide=new a.EventEmitter}return BePaidComponent.prototype.ngOnInit=function(){jQuery("#PaidForm").modal({backdrop:"static",keyboard:!1}),null!=this.dataDetailInstallment&&(this.loaderInstallmentPaid=1)},BePaidComponent.prototype.hideInstallmentPaid=function(t){jQuery("#PaidForm").modal("toggle"),this.onHide.emit(t)},__decorate([a.Input(),__metadata("design:type",Object)],BePaidComponent.prototype,"dataDetailInstallment",void 0),__decorate([a.Output(),__metadata("design:type",Object)],BePaidComponent.prototype,"onHide",void 0),BePaidComponent=__decorate([a.Component({selector:"be-paid",template:e(981),providers:[]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object])],BePaidComponent);var t,n}();n.BePaidComponent=i},873:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(872))},874:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(880))},875:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(876))},876:function(t,n,e){"use strict";var a=e(0),o=e(87),s=e(50),i=function(){function NotPaidComponent(t,n){this.http=t,this.router=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataInvestor={access_token:this.access_token,investor_id:null,loan_id:null},this.loaderInstallmentNotPaid=0,this.dataDetailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null},this.dataInvestorAmount={},this.statusInvestor=new a.EventEmitter,this.onHide=new a.EventEmitter}return NotPaidComponent.prototype.ngOnInit=function(){jQuery("#NotPaidForm").modal({backdrop:"static",keyboard:!1}),null!=this.dataDetailInstallment&&(this.loaderInstallmentNotPaid=1)},NotPaidComponent.prototype.paidInstallment=function(){this.loaderInstallmentNotPaid=2},NotPaidComponent.prototype.statusInvestor1=function(t){this.statusInvestor.emit(t)},NotPaidComponent.prototype.hideInstallmentNotPaid=function(t){jQuery("#NotPaidForm").modal("toggle"),this.onHide.emit(t)},__decorate([a.Input(),__metadata("design:type",Object)],NotPaidComponent.prototype,"dataDetailInstallment",void 0),__decorate([a.Output(),__metadata("design:type",Object)],NotPaidComponent.prototype,"statusInvestor",void 0),__decorate([a.Output(),__metadata("design:type",Object)],NotPaidComponent.prototype,"onHide",void 0),NotPaidComponent=__decorate([a.Component({selector:"not-paid",template:e(982),providers:[]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object])],NotPaidComponent);var t,n}();n.NotPaidComponent=i},877:function(t,n,e){"use strict";var a=e(0),o=e(708),s=function(){function FormVerifyComponent(t){this.verifyComponent=t,this.dataVerify=this.verifyComponent.dataVerify}return FormVerifyComponent.prototype.ngOnInit=function(){jQuery("#verifyInstallmentForm").validate({rules:{password:{required:!0},otp:{required:!0}}})},FormVerifyComponent.prototype.submitVerifyInstallment=function(t){jQuery("#verifyInstallmentForm").valid()?(this.verifyComponent.loaderVerify=0,this.verifyComponent.postPaidInstallment()):alert("Data tidak valid")},FormVerifyComponent=__decorate([a.Component({selector:"form-verify",template:e(983)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.VerifyComponent&&o.VerifyComponent)&&t||Object])],FormVerifyComponent);var t}();n.FormVerifyComponent=s},878:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(877))},879:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(708))},880:function(t,n,e){"use strict";var a=e(0),o=function(){function PartComponent(){this.dataDetailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null},this.onHide2=new a.EventEmitter,this.statusInvestor=new a.EventEmitter}return PartComponent.prototype.onHide=function(t){this.onHide2.emit(t)},PartComponent.prototype.statusInvestor1=function(t){this.statusInvestor.emit(t)},__decorate([a.Input(),__metadata("design:type",Number)],PartComponent.prototype,"dataStatusShowForm",void 0),__decorate([a.Input(),__metadata("design:type",Object)],PartComponent.prototype,"dataDetailInstallment",void 0),__decorate([a.Output(),__metadata("design:type",Object)],PartComponent.prototype,"onHide2",void 0),__decorate([a.Output(),__metadata("design:type",Object)],PartComponent.prototype,"statusInvestor",void 0),PartComponent=__decorate([a.Component({selector:"part",template:'\n\t\t<not-paid *ngIf="dataStatusShowForm == 0" [dataDetailInstallment]="dataDetailInstallment" (onHide)="onHide($event)" (statusInvestor)="statusInvestor1($event)"></not-paid>\n\t\t<be-paid *ngIf="dataStatusShowForm == 1" [dataDetailInstallment]="dataDetailInstallment" (onHide)="onHide($event)"></be-paid>\n\t'}),__metadata("design:paramtypes",[])],PartComponent)}();n.PartComponent=o},881:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(882))},882:function(t,n,e){"use strict";var a=e(0),o=e(883),s=function(){function ScoringFormComponent(t){this.scoringFormService=t,this.statusForm=new a.EventEmitter,this.dataRate={access_token:null,target_user_id:null,rate_value:null}}return ScoringFormComponent.prototype.ngOnInit=function(){var t=this.dataRate;null!==this.dataScoring&&(this.dataRate.target_user_id=this.dataScoring.id_investor,this.dataRate.access_token=this.dataScoring.access_token),jQuery("#ScoringForm").modal({backdrop:"static",keyboard:!1}),jQuery(function(){jQuery("#jRate").jRate({startColor:"#FFC300",endColor:"#FFC300",rating:0,strokeColor:"black",precision:1,minSelected:1,onChange:function(t){},onSet:function(n){t.rate_value=n}})})},ScoringFormComponent.prototype.hideForm=function(){jQuery("#ScoringForm").modal("toggle"),this.statusForm.emit(0)},ScoringFormComponent.prototype.rateUser=function(){var t=this;null!==this.dataRate.rate_value?this.scoringFormService.rateUser(this.dataRate).then(function(n){var e=JSON.stringify(n.meta.code);"2"===e.charAt(0)?(alert("Berhasil melakukan rating"),t.hideForm()):(alert("Gagal melakukan rating"),t.hideForm())}):alert("Masukan jumlah bintang")},__decorate([a.Output(),__metadata("design:type",Object)],ScoringFormComponent.prototype,"statusForm",void 0),__decorate([a.Input(),__metadata("design:type",Object)],ScoringFormComponent.prototype,"dataScoring",void 0),ScoringFormComponent=__decorate([a.Component({selector:"scoring-form",template:e(985),providers:[o.ScoringFormService]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.ScoringFormService&&o.ScoringFormService)&&t||Object])],ScoringFormComponent);var t}();n.ScoringFormComponent=s},883:function(t,n,e){"use strict";var a=e(0),o=e(87),s=function(){function ScoringFormService(t){this.http=t,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.scoringUrl="https://masscredit-api.stagingapps.net/user/rate/rate-other-user"}return ScoringFormService.prototype.rateUser=function(t){return this.http.post(this.scoringUrl,t,this.options).toPromise().then(function(t){return t.json()}).catch(this.handleError)},ScoringFormService.prototype.handleError=function(t){var n=JSON.parse(t._body);return n},ScoringFormService=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object])],ScoringFormService);var t}();n.ScoringFormService=s},980:function(t,n){t.exports='<section class="content">\n<div  *ngIf="loaderDetailInvestor == 0">\n<div class="row">\n  <div align="center"> \n    <br><br><br><br><br>\n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n</div>\n</div>\n<div  *ngIf="loaderDetailInvestor == 1">\n<div class="row">\n  <div class="col-md-4">\n    <img src="{{ dataDetailInvestor.investor_image }}" alt="Foto Peminjam">\n  </div>\n  <div class="col-md-8">\n    <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Nama Lengkap</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="full_name" id="full_name" value="{{ dataDetailInvestor.investor_name }}" disabled>\n      </div>\n    </div>\n    <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">investor</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="investor" class="form-control input-md" name="investor" id="investor" value="{{ dataDetailInvestor.investor }}" disabled>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Credit</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Credit" class="form-control input-md" name="credit" id="credit" value="{{ dataDetailInvestor.fund_history }}" disabled>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Salary</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Salary" class="form-control input-md" name="salary" id="salary" value="{{ dataDetailInvestor.user_class }}" disabled>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Review</label>\n      </div>\n      <div class="col-xs-7">\n        <div class="unit">\n            <label *ngFor="let data of imageRate100"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/100.png" style="width:30px ;height: 30px;"></label>\n            <label *ngIf="imageRate25 === 1"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/25.png" style="width:30px ;height: 30px;"></label>\n            <label *ngIf="imageRate50 === 1"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/50.png" style="width:30px ;height: 30px;"></label>\n            <label *ngIf="imageRate75 === 1"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/75.png" style="width:30px ;height: 30px;"></label>\n            <label *ngFor="let data of imageRate0"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/0.png" style="width:30px ;height: 30px;"></label>\n            <span  class="unit">({{ dataDetailInvestor.avg_reviews }}) reviews {{ dataDetailInvestor.total_reviews }} tenor </span><br>\n            <!-- <button color="red" (click)="showScoringForm()">Rate User</button> -->\n        </div>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Jumlah Investasi</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Nilai Pinjaman" class="form-control input-md" name="nilai_pinjaman" id="nilai_pinjaman" value="{{ dataInvestAmount }}" disabled>\n      </div>\n   </div> \n  </div>\n</div>\n</div>\n<div class="row">\n<div class="col-xs-12">\n <label><h2 style="font-size: 30px;color: orange;">Detail Angsuran</h2></label>\n  <div class="box-body data-tables table-responsive">\n  <table class="table table-hover" id="example2">\n    <thead>\n      <tr>\n        <th>No.</th>\n        <th>Angsuran Ke</th>\n        <th>Pokok(Rp)</th>\n        <th>Bunga</th>\n        <th>Denda(Rp)</th>\n        <th>Status</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor="let dataPayment of dataPayment, let i =\'index\'">\n      <td>{{ i + 1 }}</td>\n      <td>\n        {{ dataPayment.installment_order }}\n      </td>\n      <td>{{ dataPayment.pokok }}</td>\n      <td>{{ dataPayment.bunga }}</td>\n      <td>{{ dataPayment.denda }}</td>\n      <td>{{ dataPayment.status }}</td>\n      <td *ngIf="dataPayment.status == \'Belum Bayar\'">\n        <button class="pull-right" (click)="showNotPaidForm(dataPayment.history_payment_id)"><i aria-hidden="true" class="fa fa-search"></i></button>\n      </td>\n      <td *ngIf="dataPayment.status == \'Lunas\'">\n        <button class="pull-right" (click)="showPaidForm(dataPayment.history_payment_id)">\n          <i aria-hidden="true" class="fa fa-search"></i>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n  </div>  \n</div>\n<div class="row">\n<div class="col-xs-12">\n<part *ngIf="showDetailInstallment == 1" [dataStatusShowForm]="statusShowForm" [dataDetailInstallment]="detailInstallment" (onHide2)="onHide($event)" (statusInvestor)="statusInvestor1($event)"></part>\n<scoring-form *ngIf="scoringForm === 1" (statusForm)="hideForm($event)" [dataScoring]="dataScoring"></scoring-form>\n</div>\n</div>\n</div>\n</section>'},981:function(t,n){t.exports='<section class="content">\n<!-- Modal -->\n<div class="modal fade modal-lg" id="PaidForm" style="z-index:9000;">\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content-->\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" (click)="hideInstallmentPaid(0)">&times;</button>\n      <h4 class="modal-title">Detail Angsuran</h4>\n    </div>\n    <div class="modal-body">\n    <div  *ngIf="loaderInstallmentPaid == 0">\n    <div class="row">\n      <div align="center"> \n        <br><br><br><br><br>\n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf="loaderInstallmentPaid == 1">\n    <div class="row">\n      <div class="col-md-6">\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Angsuran ke</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Angsuran ke" class="form-control input-md" name="angsuran_ke" id="angsuran_ke" value="{{ dataDetailInstallment.dataInstallment.installment_order }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Jatuh Tempo</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tanggal Jatuh Tempo" class="form-control input-md" name="tanggal_jatuh_tempo" id="tanggal_jatuh_tempo" value="{{ dataDetailInstallment.dataInstallment.due_date }}" disabled>\n          </div>\n       </div>\n      <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Status</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Status" class="form-control input-md" name="status" id="status" value="{{ dataDetailInstallment.dataInstallment.status }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Pokok</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Pokok" class="form-control input-md" name="pokok" id="pokok" value="{{ dataDetailInstallment.dataInstallment.pokok }}" disabled>\n          </div>\n       </div>\n      </div>\n      <div class="col-md-6">\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Bunga</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Bunga" class="form-control input-md" name="bunga" id="bunga" value="{{ dataDetailInstallment.dataInstallment.bunga }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Charge</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Charge" class="form-control input-md" name="charge" id="charge" value="{{ dataDetailInstallment.dataInstallment.charge_fee }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Denda</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Denda" class="form-control input-md" name="denda" id="denda" value="{{ dataDetailInstallment.dataInstallment.denda }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Total Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Total Pembayaran" class="form-control" name="total_pembayaran" id="total_pembayaran" value="{{ dataDetailInstallment.dataInstallment.total_payment }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tangal Pembayaran" class="form-control" name="tanggal_pembayaran" id="tanggal_pembayaran" value="{{ dataDetailInstallment.dataInstallment.payment_date }}" disabled>\n          </div>\n       </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n      <div class="form-group">\n        <div class="col-md-6 col-center">\n          <button class="btn btn-red" (click)="hideInstallmentPaid(0)">Tutup</button>\n        </div>\n      </div>\n      </div>\n    </div>\n    </div>\n    </div>\n  </div>\n  </div>\n</div>\n</section>'},982:function(t,n){t.exports='<section class="content">\n<!-- Modal -->\n<div class="modal fade modal-lg" id="NotPaidForm" style="z-index:9000;">\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content-->\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" (click)="hideInstallmentNotPaid(0)">&times;</button>\n      <h4 class="modal-title">Detail Angsuran</h4>\n    </div>\n    <div class="modal-body">\n    <div  *ngIf="loaderInstallmentNotPaid == 0">\n    <div class="row">\n      <div align="center"> \n        <br><br><br><br><br>\n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf="loaderInstallmentNotPaid == 1">\n    <div class="row">\n      <div class="col-md-6">\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Angsuran ke</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Angsuran ke" class="form-control input-md" name="angsuran_ke" id="angsuran_ke" value="{{ dataDetailInstallment.dataInstallment.installment_order }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Jatuh Tempo</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tanggal Jatuh Tempo" class="form-control input-md" name="tanggal_jatuh_tempo" id="tanggal_jatuh_tempo" value="{{ dataDetailInstallment.dataInstallment.due_date }}" disabled>\n          </div>\n       </div>\n      <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Status</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Status" class="form-control input-md" name="status" id="status" value="{{ dataDetailInstallment.dataInstallment.status }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Pokok</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Pokok" class="form-control input-md" name="pokok" id="pokok" value="{{ dataDetailInstallment.dataInstallment.pokok }}" disabled>\n          </div>\n       </div>\n      </div>\n      <div class="col-md-6">\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Bunga</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Bunga" class="form-control input-md" name="bunga" id="bunga" value="{{ dataDetailInstallment.dataInstallment.bunga }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Charge</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Charge" class="form-control input-md" name="charge" id="charge" value="{{ dataDetailInstallment.dataInstallment.charge_fee }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Denda</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Denda" class="form-control input-md" name="denda" id="denda" value="{{ dataDetailInstallment.dataInstallment.denda }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Total Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Total Pembayaran" class="form-control" name="total_pembayaran" id="total_pembayaran" value="{{ dataDetailInstallment.dataInstallment.total_payment }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tangal Pembayaran" class="form-control" name="tanggal_pembayaran" id="tanggal_pembayaran" value="-" disabled>\n          </div>\n       </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n      <div class="form-group">\n        <div class="col-md-6 col-center">\n          <button class="btn btn-red" (click)="paidInstallment()">Bayar</button>\n        </div>\n      </div>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf="loaderInstallmentNotPaid == 2">\n      <div class="row">\n      <div class="col-xs-12">\n        <verify [dataDetailInstallment]="dataDetailInstallment" (onHide)="hideInstallmentNotPaid($event)" (statusInvestor1)="statusInvestor1($event)"></verify>\n      </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  </div>\n</div>\n</section>';
},983:function(t,n){t.exports='<div class="row">\n  <div class="col-md-12">\n  <div class="form-group" align="center">\n    <label>\n      <h2 style="font-size: 24px;color: orange;">Konfirmasi Pembayaran</h2>\n    </label>\n    <div class="row">\n      <div class="input-group" align="center">\n      <form name="verifyInstallmentForm" id="verifyInstallmentForm">\n        <div class="form-group">\n          <input type="text" name="otp" placeholder="Code OTP" class="form-control input-md" id="otp" [(ngModel)]="dataVerify.otp" disabled>\n        </div>\n        <div class="form-group">\n          <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="dataVerify.password">\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n  <div class="col-md-6 col-center">\n    <button class="btn btn-red" (click)="submitVerifyInstallment(dataVerify)">Konfirmasi</button>\n  </div>\n  </div>\n  </div>\n</div>'},984:function(t,n){t.exports='<div *ngIf="loaderVerify == 0">\n  <div class="row">\n    <div align="center"> \n      <br><br><br><br><br>\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n      <span class="sr-only">Loading...</span>\n    </div>\n  </div>\n</div>\n<div *ngIf="loaderVerify == 1">\n  <form-verify></form-verify>\n</div>'},985:function(t,n){t.exports='<!-- Modal -->\n<div class="modal fade" id="ScoringForm" style="z-index:9000;">\n  <div class="modal-dialog">\n    <!-- Modal content-->\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" (click)="hideForm(0)">&times;</button>\n    </div>\n    <div class="modal-body">\n      <div class="row">\n      <div class="col-md-12 col-center">\n        <div class="form-group">\n          <h2 style="font-size: 24px;color:black">Form Penilaian</h2>\n        </div>\n        <div class="form-group">\n          <div id="jRate" style="height:100px;width: 100%;"></div>\n          <br>\n          <button (click)="rateUser()">Rate</button>\n       </div>\n      </div>\n    </div> \n  </div>\n  </div>\n</div>\n</div>'}});