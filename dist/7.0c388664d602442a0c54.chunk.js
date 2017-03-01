webpackJsonp([7],{706:function(t,n,a){"use strict";var e=a(0),o=a(87),s=function(){function LoanApprovedService(t){this.http=t,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.detailInvestorUrl="https://masscredit-api.stagingapps.net/user/investor/detail"}return LoanApprovedService.prototype.getDetailInvestor=function(t){return this.http.post(this.detailInvestorUrl,t,this.options).toPromise().then(function(t){return t.json().data}).catch(this.handleError)},LoanApprovedService.prototype.mapData=function(t){t.json();console.log(t)},LoanApprovedService.prototype.handleError=function(t){var n=JSON.parse(t._body);n.meta.code,n.meta.message;console.log(n)},LoanApprovedService=__decorate([e.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object])],LoanApprovedService);var t}();n.LoanApprovedService=s},707:function(t,n,a){"use strict";var e=a(0),o=a(50),s=a(87),i=function(){function VerifyComponent(t,n){this.router=t,this.http=n,this.headers=new s.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new s.RequestOptions({headers:this.headers}),this.loaderVerify=0,this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataVerify={access_token:this.access_token,loan_id:null,investor_id:null,history_payment_id:null,otp:null,password:null},this.dataDetailInstallment={dataLoan:null,dataInvestor:null,dataInstallment:{history_payment_id:null}},this.onHide=new e.EventEmitter,this.showLoader=new e.EventEmitter,this.paidInstallmentUrl="https://masscredit-api.stagingapps.net/user/loan/payment",this.otpUrl="https://masscredit-api.stagingapps.net/user/loan/payment-otp",this.dataConfirm=0,this.otp={access_token:this.access_token}}return VerifyComponent.prototype.ngOnInit=function(){this.getOtp(),null!=this.dataDetailInstallment&&(this.dataVerify.history_payment_id=this.dataDetailInstallment.dataInstallment.history_payment_id,this.dataVerify.investor_id=this.dataDetailInstallment.dataInvestor,this.dataVerify.loan_id=this.dataDetailInstallment.dataLoan)},VerifyComponent.prototype.hideInstallmentNotPaid=function(t){this.onHide.emit(t)},VerifyComponent.prototype.submitVerifyInstallment=function(t){jQuery("#verifyInstallmentForm").valid()?this.postPaidInstallment():alert("Data tidak valid")},VerifyComponent.prototype.postPaidInstallment=function(){var t=this;this.http.post(this.paidInstallmentUrl,this.dataVerify,this.options).map(function(t){return t.json()}).subscribe(function(n){var a=n.meta.message;alert(a),t.hideInstallmentNotPaid(0)},function(n){var a=JSON.parse(n._body),e=a.meta.message;a.meta.code;return"unauthorized"==e?(alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")):void("Password salah!"==e&&(alert("Password salah!"),t.loaderVerify=1))})},VerifyComponent.prototype.getOtp=function(){var t=this;this.http.post(this.otpUrl,this.otp,this.options).map(function(t){return t.json()}).subscribe(function(n){t.loaderVerify=1,t.dataVerify.otp=n.data.otp},function(t){var n=JSON.parse(t._body);n.meta.code,n.meta.message})},__decorate([e.Input(),__metadata("design:type",Object)],VerifyComponent.prototype,"dataDetailInstallment",void 0),__decorate([e.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"onHide",void 0),__decorate([e.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"showLoader",void 0),VerifyComponent=__decorate([e.Component({selector:"verify",template:a(974)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Router&&o.Router)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Http&&s.Http)&&n||Object])],VerifyComponent);var t,n}();n.VerifyComponent=i},869:function(t,n,a){"use strict";var e=a(0),o=a(50),s=a(87),i=a(153),l=a(72),d=a(870),r=a(873),p=a(872),c=a(874),m=a(878),v=a(877),u=a(706);n.routes=[{path:"",component:d.LoanApprovedComponent}];var f=function(){function LoanApprovedModule(){}return LoanApprovedModule.routes=n.routes,LoanApprovedModule=__decorate([e.NgModule({declarations:[d.LoanApprovedComponent,r.PartComponent,p.BePaidComponent,c.NotPaidComponent,m.VerifyComponent,v.FormVerifyComponent],imports:[s.HttpModule,i.FormsModule,l.CommonModule,o.RouterModule.forChild(n.routes)],providers:[u.LoanApprovedService]}),__metadata("design:paramtypes",[])],LoanApprovedModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=f},870:function(t,n,a){"use strict";var e=a(0),o=a(87),s=a(50),i=a(706),l=function(){function LoanApprovedComponent(t,n,a,e){this.http=t,this.router=n,this.activatedRoute=a,this.loanApprovedService=e,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.data_investor={access_token:this.access_token,investor_id:null,loan_id:null},this.data_list_installment={access_token:this.access_token,investor_id:null,loan_id:null},this.dataDetailInvestor={},this.loaderDetailInvestor=0,this.dataPayment=[],this.detailInvestorUrl="https://masscredit-api.stagingapps.net/user/investor/detail",this.listInstallmentUrl="https://masscredit-api.stagingapps.net/user/loan/payment-history/get-list",this.detailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null}}return LoanApprovedComponent.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(n){var a=n.id,e=n.investorId;null!=a&&null!=e&&(t.data_list_installment.loan_id=a,t.data_list_installment.investor_id=e,t.data_investor.investor_id=e,t.data_investor.loan_id=a,t.detailInstallment.dataLoan=a,t.detailInstallment.dataInvestor=e,null!=t.data_investor.investor_id&&null!=t.data_investor.loan_id&&t.getDetailInvestor())})},LoanApprovedComponent.prototype.getDetailInvestor=function(){var t=this;try{this.http.post(this.detailInvestorUrl,this.data_investor,this.options).map(function(t){return t.json()}).subscribe(function(n){var a="assets/img/default_profile.png";""==n.data.investor_image&&(n.data.investor_image=a),t.dataDetailInvestor=n.data,t.loaderDetailInvestor=1;var e=n.data.amount;t.delimiterSalary(e)},function(t){var n=JSON.parse(t._body);n.meta.code,n.meta.message;console.log(n)})}finally{this.getListInstallment()}},LoanApprovedComponent.prototype.delimiterSalary=function(t){try{var n=!1,a=t.toString();a<0&&(n=!0),a=a.replace(".",""),a=a.replace("-","");for(var e="",o=a.length,s=0,i=o;i>0;i--)s+=1,e=s%3==1&&1!=s?a.substr(i-1,1)+"."+e:a.substr(i-1,1)+e;n&&(e="-"+e);var l="Rp.";this.dataInvestAmount=l.concat(e)}finally{this.getListInstallment()}},LoanApprovedComponent.prototype.getListInstallment=function(){var t=this;this.http.post(this.listInstallmentUrl,this.data_list_installment,this.options).map(function(t){return t.json()}).subscribe(function(n){t.dataPayment=n.data.history_payment;for(var a=0;a<t.dataPayment.length;a++){var e=t.dataPayment[a],o=e.pokok,s=!1,i=o.toString();i<0&&(s=!0),i=i.replace(".",""),i=i.replace("-","");for(var l="",d=i.length,r=0,p=d;p>0;p--)r+=1,l=r%3==1&&1!=r?i.substr(p-1,1)+"."+l:i.substr(p-1,1)+l;s&&(l="-"+l);var c="Rp.";e.pokok=c.concat(l),t.loaderDetailInvestor=1}},function(t){var n=JSON.parse(t._body);n.meta.code,n.meta.message;console.log(n)})},LoanApprovedComponent.prototype.showNotPaidForm=function(t){for(var n=0,a=this.dataPayment;n<a.length;n++){var e=a[n];e.history_payment_id==t&&(this.detailInstallment.dataInstallment=e)}this.statusShowForm=0,this.showDetailInstallment=1},LoanApprovedComponent.prototype.showPaidForm=function(t){for(var n=0,a=this.dataPayment;n<a.length;n++){var e=a[n];e.history_payment_id==t&&(this.detailInstallment.dataInstallment=e)}this.statusShowForm=1,this.showDetailInstallment=1},LoanApprovedComponent.prototype.onHide=function(t){this.showDetailInstallment=t},LoanApprovedComponent=__decorate([e.Component({selector:"loan-approved",template:a(970)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object,"function"==typeof(l="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&l||Object,"function"==typeof(d="undefined"!=typeof i.LoanApprovedService&&i.LoanApprovedService)&&d||Object])],LoanApprovedComponent);var t,n,l,d}();n.LoanApprovedComponent=l},871:function(t,n,a){"use strict";var e=a(0),o=a(87),s=a(50),i=function(){function BePaidComponent(t,n){this.http=t,this.router=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataInvestor={access_token:this.access_token,investor_id:null,loan_id:null},this.dataDetailInvestor={},this.loaderInstallmentPaid=0,this.loaderDetailInvestor=0,this.dataDetailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null},this.onHide=new e.EventEmitter}return BePaidComponent.prototype.ngOnInit=function(){jQuery("#PaidForm").modal({backdrop:"static",keyboard:!1}),null!=this.dataDetailInstallment&&(this.loaderInstallmentPaid=1)},BePaidComponent.prototype.hideInstallmentPaid=function(t){jQuery("#PaidForm").modal("toggle"),this.onHide.emit(t)},__decorate([e.Input(),__metadata("design:type",Object)],BePaidComponent.prototype,"dataDetailInstallment",void 0),__decorate([e.Output(),__metadata("design:type",Object)],BePaidComponent.prototype,"onHide",void 0),BePaidComponent=__decorate([e.Component({selector:"be-paid",template:a(971),providers:[]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object])],BePaidComponent);var t,n}();n.BePaidComponent=i},872:function(t,n,a){"use strict";function __export(t){for(var a in t)n.hasOwnProperty(a)||(n[a]=t[a])}__export(a(871))},873:function(t,n,a){"use strict";function __export(t){for(var a in t)n.hasOwnProperty(a)||(n[a]=t[a])}__export(a(879))},874:function(t,n,a){"use strict";function __export(t){for(var a in t)n.hasOwnProperty(a)||(n[a]=t[a])}__export(a(875))},875:function(t,n,a){"use strict";var e=a(0),o=a(87),s=a(50),i=function(){function NotPaidComponent(t,n){this.http=t,this.router=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataInvestor={access_token:this.access_token,investor_id:null,loan_id:null},this.loaderInstallmentNotPaid=0,this.dataDetailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null},this.dataInvestorAmount={},this.onHide=new e.EventEmitter}return NotPaidComponent.prototype.ngOnInit=function(){jQuery("#NotPaidForm").modal({backdrop:"static",keyboard:!1}),null!=this.dataDetailInstallment&&(this.loaderInstallmentNotPaid=1)},NotPaidComponent.prototype.paidInstallment=function(){this.loaderInstallmentNotPaid=2},NotPaidComponent.prototype.hideInstallmentNotPaid=function(t){jQuery("#NotPaidForm").modal("toggle"),this.onHide.emit(t)},__decorate([e.Input(),__metadata("design:type",Object)],NotPaidComponent.prototype,"dataDetailInstallment",void 0),__decorate([e.Output(),__metadata("design:type",Object)],NotPaidComponent.prototype,"onHide",void 0),NotPaidComponent=__decorate([e.Component({selector:"not-paid",template:a(972),providers:[]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object])],NotPaidComponent);var t,n}();n.NotPaidComponent=i},876:function(t,n,a){"use strict";var e=a(0),o=a(707),s=function(){function FormVerifyComponent(t){this.verifyComponent=t,this.dataVerify=this.verifyComponent.dataVerify}return FormVerifyComponent.prototype.ngOnInit=function(){jQuery("#verifyInstallmentForm").validate({rules:{password:{required:!0},otp:{required:!0}}})},FormVerifyComponent.prototype.submitVerifyInstallment=function(t){jQuery("#verifyInstallmentForm").valid()?(this.verifyComponent.loaderVerify=0,this.verifyComponent.postPaidInstallment()):alert("Data tidak valid")},FormVerifyComponent=__decorate([e.Component({selector:"form-verify",template:a(973)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.VerifyComponent&&o.VerifyComponent)&&t||Object])],FormVerifyComponent);var t}();n.FormVerifyComponent=s},877:function(t,n,a){"use strict";function __export(t){for(var a in t)n.hasOwnProperty(a)||(n[a]=t[a])}__export(a(876))},878:function(t,n,a){"use strict";function __export(t){for(var a in t)n.hasOwnProperty(a)||(n[a]=t[a])}__export(a(707))},879:function(t,n,a){"use strict";var e=a(0),o=function(){function PartComponent(){this.dataDetailInstallment={dataInstallment:{},dataLoan:null,dataInvestor:null},this.onHide2=new e.EventEmitter}return PartComponent.prototype.onHide=function(t){this.onHide2.emit(t)},__decorate([e.Input(),__metadata("design:type",Number)],PartComponent.prototype,"dataStatusShowForm",void 0),__decorate([e.Input(),__metadata("design:type",Object)],PartComponent.prototype,"dataDetailInstallment",void 0),__decorate([e.Output(),__metadata("design:type",Object)],PartComponent.prototype,"onHide2",void 0),PartComponent=__decorate([e.Component({selector:"part",template:'\n\t\t<not-paid *ngIf="dataStatusShowForm == 0" [dataDetailInstallment]="dataDetailInstallment" (onHide)="onHide($event)"></not-paid>\n\t\t<be-paid *ngIf="dataStatusShowForm == 1" [dataDetailInstallment]="dataDetailInstallment" (onHide)="onHide($event)"></be-paid>\n\t'}),__metadata("design:paramtypes",[])],PartComponent)}();n.PartComponent=o},970:function(t,n){t.exports='<section class="content">\n<div  *ngIf="loaderDetailInvestor == 0">\n<div class="row">\n  <div align="center"> \n    <br><br><br><br><br>\n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n</div>\n</div>\n<div  *ngIf="loaderDetailInvestor == 1">\n<div class="row">\n  <div class="col-md-4">\n    <img src="{{ dataDetailInvestor.investor_image }}" alt="Foto Peminjam">\n  </div>\n  <div class="col-md-8">\n    <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Nama Lengkap</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="full_name" id="full_name" value="{{ dataDetailInvestor.investor_name }}" disabled>\n      </div>\n    </div>\n    <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">investor</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="investor" class="form-control input-md" name="investor" id="investor" value="{{ dataDetailInvestor.investor }}" disabled>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Credit</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Credit" class="form-control input-md" name="credit" id="credit" value="{{ dataDetailInvestor.fund_history }}" disabled>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Salary</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Salary" class="form-control input-md" name="salary" id="salary" value="{{ dataDetailInvestor.user_class }}" disabled>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Review</label>\n      </div>\n      <div class="col-xs-7">\n        <div class="unit">\n            <!-- <i class="fa fa-star-half-full full" area-hidden="true"></i> -->\n            <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n            <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n            <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n            <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px; color: orange"></i>\n            <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n            <!-- <span class="bs-glyphicons-list">\n            <span class="glyphicon glyphicon-star star-color star-full"></span>\n            <span class="glyphicon glyphicon-star star-color font half"></span>\n            </span> -->\n            <!-- <span>({{ avg_reviews }} %)</span> -->\n            <span>({{ dataDetailInvestor.avg_reviews }} %)</span>\n        </div>\n      </div>\n   </div>\n   <div class="form-group">\n      <div class="col-xs-4">\n        <label class="unit">Jumlah Investasi</label>\n      </div>\n      <div class="col-xs-7">\n        <input type="text" placeholder="Nilai Pinjaman" class="form-control input-md" name="nilai_pinjaman" id="nilai_pinjaman" value="{{ dataInvestAmount }}" disabled>\n      </div>\n   </div> \n  </div>\n</div>\n</div>\n<div class="row">\n<div class="col-xs-12">\n <label><h2 style="font-size: 30px;color: orange;">Detail Angsuran</h2></label>\n  <div class="box-body data-tables table-responsive">\n  <table class="table table-hover" id="example2">\n    <thead>\n      <tr>\n        <th>No.</th>\n        <th>Angsuran Ke</th>\n        <th>Pokok(Rp)</th>\n        <th>Bunga</th>\n        <th>Denda(Rp)</th>\n        <th>Status</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor="let dataPayment of dataPayment, let i =\'index\'">\n      <td>{{ i + 1 }}</td>\n      <td>\n        {{ dataPayment.installment_order }}\n      </td>\n      <td>{{ dataPayment.pokok }}</td>\n      <td>{{ dataPayment.bunga }}</td>\n      <td>{{ dataPayment.denda }}</td>\n      <td>{{ dataPayment.status }}</td>\n      <td *ngIf="dataPayment.status == \'Belum Bayar\'">\n        <button class="pull-right" (click)="showNotPaidForm(dataPayment.history_payment_id)"><i aria-hidden="true" class="fa fa-search"></i></button>\n      </td>\n      <td *ngIf="dataPayment.status == \'Lunas\'">\n        <button class="pull-right" (click)="showPaidForm(dataPayment.history_payment_id)">\n          <i aria-hidden="true" class="fa fa-search"></i>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n  </div>  \n</div>\n<div class="row">\n<div class="col-xs-12">\n<part *ngIf="showDetailInstallment == 1" [dataStatusShowForm]="statusShowForm" [dataDetailInstallment]="detailInstallment" (onHide2)="onHide($event)"></part>\n</div>\n</div>\n</div>\n</section>'},971:function(t,n){t.exports='<section class="content">\n<!-- Modal -->\n<div class="modal fade modal-lg" id="PaidForm" style="z-index:9000;">\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content-->\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" (click)="hideInstallmentPaid(0)">&times;</button>\n      <h4 class="modal-title">Detail Angsuran</h4>\n    </div>\n    <div class="modal-body">\n    <div  *ngIf="loaderInstallmentPaid == 0">\n    <div class="row">\n      <div align="center"> \n        <br><br><br><br><br>\n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf="loaderInstallmentPaid == 1">\n    <div class="row">\n      <div class="col-md-6">\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Angsuran ke</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Angsuran ke" class="form-control input-md" name="angsuran_ke" id="angsuran_ke" value="{{ dataDetailInstallment.dataInstallment.installment_order }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Jatuh Tempo</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tanggal Jatuh Tempo" class="form-control input-md" name="tanggal_jatuh_tempo" id="tanggal_jatuh_tempo" value="{{ dataDetailInstallment.dataInstallment.due_date }}" disabled>\n          </div>\n       </div>\n      <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Status</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Status" class="form-control input-md" name="status" id="status" value="{{ dataDetailInstallment.dataInstallment.status }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Pokok</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Pokok" class="form-control input-md" name="pokok" id="pokok" value="{{ dataDetailInstallment.dataInstallment.pokok }}" disabled>\n          </div>\n       </div>\n      </div>\n      <div class="col-md-6">\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Bunga</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Bunga" class="form-control input-md" name="bunga" id="bunga" value="{{ dataDetailInstallment.dataInstallment.bunga }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Charge</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Charge" class="form-control input-md" name="charge" id="charge" value="{{ dataDetailInstallment.dataInstallment.charge_fee }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Denda</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Denda" class="form-control input-md" name="denda" id="denda" value="{{ dataDetailInstallment.dataInstallment.denda }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Total Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Total Pembayaran" class="form-control" name="total_pembayaran" id="total_pembayaran" value="{{ dataDetailInstallment.dataInstallment.total_payment }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tangal Pembayaran" class="form-control" name="tanggal_pembayaran" id="tanggal_pembayaran" value="{{ dataDetailInstallment.dataInstallment.payment_date }}" disabled>\n          </div>\n       </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n      <div class="form-group">\n        <div class="col-md-6 col-center">\n          <button class="btn btn-red" (click)="hideInstallmentPaid(0)">Tutup</button>\n        </div>\n      </div>\n      </div>\n    </div>\n    </div>\n    </div>\n  </div>\n  </div>\n</div>\n</section>'},972:function(t,n){t.exports='<section class="content">\n<!-- Modal -->\n<div class="modal fade modal-lg" id="NotPaidForm" style="z-index:9000;">\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content-->\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" (click)="hideInstallmentNotPaid(0)">&times;</button>\n      <h4 class="modal-title">Detail Angsuran</h4>\n    </div>\n    <div class="modal-body">\n    <div  *ngIf="loaderInstallmentNotPaid == 0">\n    <div class="row">\n      <div align="center"> \n        <br><br><br><br><br>\n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf="loaderInstallmentNotPaid == 1">\n    <div class="row">\n      <div class="col-md-6">\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Angsuran ke</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Angsuran ke" class="form-control input-md" name="angsuran_ke" id="angsuran_ke" value="{{ dataDetailInstallment.dataInstallment.installment_order }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Jatuh Tempo</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tanggal Jatuh Tempo" class="form-control input-md" name="tanggal_jatuh_tempo" id="tanggal_jatuh_tempo" value="{{ dataDetailInstallment.dataInstallment.due_date }}" disabled>\n          </div>\n       </div>\n      <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Status</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Status" class="form-control input-md" name="status" id="status" value="{{ dataDetailInstallment.dataInstallment.status }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Pokok</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Pokok" class="form-control input-md" name="pokok" id="pokok" value="{{ dataDetailInstallment.dataInstallment.pokok }}" disabled>\n          </div>\n       </div>\n      </div>\n      <div class="col-md-6">\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Bunga</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Bunga" class="form-control input-md" name="bunga" id="bunga" value="{{ dataDetailInstallment.dataInstallment.bunga }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Charge</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Charge" class="form-control input-md" name="charge" id="charge" value="{{ dataDetailInstallment.dataInstallment.charge_fee }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Denda</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Denda" class="form-control input-md" name="denda" id="denda" value="{{ dataDetailInstallment.dataInstallment.denda }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Total Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Total Pembayaran" class="form-control" name="total_pembayaran" id="total_pembayaran" value="{{ dataDetailInstallment.dataInstallment.total_payment }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-5">\n            <label class="unit">Tanggal Pembayaran</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Tangal Pembayaran" class="form-control" name="tanggal_pembayaran" id="tanggal_pembayaran" value="-" disabled>\n          </div>\n       </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n      <div class="form-group">\n        <div class="col-md-6 col-center">\n          <button class="btn btn-red" (click)="paidInstallment()">Bayar</button>\n        </div>\n      </div>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf="loaderInstallmentNotPaid == 2">\n      <div class="row">\n      <div class="col-xs-12">\n        <verify [dataDetailInstallment]="dataDetailInstallment" (onHide)="hideInstallmentNotPaid($event)"></verify>\n      </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  </div>\n</div>\n</section>'},973:function(t,n){t.exports='<div class="row">\n  <div class="col-md-12">\n  <div class="form-group" align="center">\n    <label>\n      <h2 style="font-size: 24px;color: orange;">Konfirmasi Pembayaran</h2>\n    </label>\n    <div class="row">\n      <div class="input-group" align="center">\n      <form name="verifyInstallmentForm" id="verifyInstallmentForm">\n        <div class="form-group">\n          <input type="text" name="otp" placeholder="Code OTP" class="form-control input-md" id="otp" [(ngModel)]="dataVerify.otp" disabled>\n        </div>\n        <div class="form-group">\n          <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="dataVerify.password">\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n  <div class="col-md-6 col-center">\n    <button class="btn btn-red" (click)="submitVerifyInstallment(dataVerify)">Konfirmasi</button>\n  </div>\n  </div>\n  </div>\n</div>'},974:function(t,n){t.exports='<div *ngIf="loaderVerify == 0">\n  <div class="row">\n    <div align="center"> \n      <br><br><br><br><br>\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n      <span class="sr-only">Loading...</span>\n    </div>\n  </div>\n</div>\n<div *ngIf="loaderVerify == 1">\n  <form-verify></form-verify>\n</div>'}});