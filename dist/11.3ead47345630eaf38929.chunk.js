webpackJsonp([11],{701:function(t,n,e){"use strict";var a=e(0),i=e(50),o=e(786),s=function(){function VerifyComponent(t,n){this.verifyService=t,this.router=n,this.statusConfirm=1,this.dataLoan={access_token:null,invest_id:null,loan_amount:null,password:null},this.statusForm=new a.EventEmitter}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#ModalForm").modal({backdrop:"static",keyboard:!1})},VerifyComponent.prototype.hideModal=function(){this.statusForm.emit(0)},VerifyComponent.prototype.cancelConfirmLoan=function(){jQuery("#ModalForm").modal("toggle"),this.router.navigateByUrl("dashboard/other-user-action/invest")},VerifyComponent.prototype.confirmLoan=function(){var t=this;jQuery("#confirmInvestForm").valid()?(this.statusConfirm=0,this.verifyService.createLoan(this.dataLoan).then(function(n){var e=n.meta.message,a=JSON.stringify(n.meta.code);"4"==a.charAt(0)&&t.handleError(e),"2"==a.charAt(0)&&t.handleSuccess()})):alert("Harap masukan password")},VerifyComponent.prototype.handleError=function(t){try{"Jumlah yang anda masukan melebihi jumlah invest."==t?alert("Jumlah yang anda masukan melebihi jumlah invest."):t.match(/Jumlah jaminan anda tidak mencukupi./)?alert("Jumlah jaminan anda tidak mencukupi."):alert("Password anda salah")}finally{this.statusConfirm=1}},VerifyComponent.prototype.handleSuccess=function(){alert("Pinjaman berhasil dibuat, harap menunggu konfirmasi Investor"),jQuery("#ModalForm").modal("toggle"),this.router.navigateByUrl("/dashboard/other-user-action/invest")},__decorate([a.Input(),__metadata("design:type",Object)],VerifyComponent.prototype,"dataLoan",void 0),__decorate([a.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"statusForm",void 0),VerifyComponent=__decorate([a.Component({selector:"verify",template:e(951),providers:[o.VerifyService]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.VerifyService&&o.VerifyService)&&t||Object,"function"==typeof(n="undefined"!=typeof i.Router&&i.Router)&&n||Object])],VerifyComponent);var t,n}();n.VerifyComponent=s},778:function(t,n,e){"use strict";var a=e(0),i=e(87),o=e(50),s=e(779),l=function(){function DetailComponent(t,n,e,a){this.http=t,this.router=n,this.activatedRoute=e,this.detailService=a,this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataReqInvest={access_token:this.access_token,loan_id:""},this.amount={},this.restAmount={},this.dataDetailInvest=0,this.statusDataDetail=0,this.dataDetail={},this.dataCalculation={access_token:this.access_token,jumlah:null,bunga:null,tenor:null},this.listInvestUrl="#/dashboard/other-user-action/invest",this.loan={access_token:this.access_token,invest_id:null,loan_amount:null},this.simulation={nominal:null,success_fee:null,nominal_and_fee:null,pokok:null,bunga:null,tenor:null,denda:null,cicilan_perbulan:null,transaction_fee:null},this.dataIsOn=[{value:1},{value:0}],this.isOn=0}return DetailComponent.prototype.linkInvest=function(){this.router.navigateByUrl("/dashboard/other-user-action/invest")},DetailComponent.prototype.ngOnInit=function(){var t=this;jQuery("#FormSimulation").validate({rules:{jumlah:{required:!0}}});this.activatedRoute.params.subscribe(function(n){var e=n.id;t.loan.invest_id=e,t.dataReqInvest.loan_id=e});this.getDetailInvest()},DetailComponent.prototype.handleError=function(t){"unauthorized"===t&&this.router.navigate(["/dashboard/sign-out"])},DetailComponent.prototype.handleSuccess=function(t){try{var n="assets/img/default_image.jpg";null==t.images[0]&&(t.images[0]=n),this.dataCalculation.bunga=t.interest,this.dataCalculation.tenor=t.tenor,this.detailInvest=t;var e=t.amount,a=t.sisa;this.restAmount=this.delimiter(a),this.amount=this.delimiter(e)}finally{this.statusDataDetail=1}},DetailComponent.prototype.getDetailInvest=function(){var t=this;this.detailService.getDetail(this.dataReqInvest).then(function(n){var e=n.meta.message,a=JSON.stringify(n.meta.code),i=n.data;t.dataCalculation.bunga=n.data.interest,t.dataCalculation.tenor=n.data.tenor,"4"===a.charAt(0)&&t.handleError(e),"2"===a.charAt(0)&&t.handleSuccess(i)})},DetailComponent.prototype.getAmount=function(t){this.amountLoan=t},DetailComponent.prototype.delimiter=function(t){var n=!1,e=t.toString();e<0&&(n=!0),e=e.replace(".",""),e=e.replace("-","");for(var a="",i=e.length,o=0,s=i;s>0;s--)o+=1,a=o%3==1&&1!=o?e.substr(s-1,1)+"."+a:e.substr(s-1,1)+a;n&&(a="-"+a);var l="Rp.";return l.concat(a)},DetailComponent.prototype.listInvest=function(){this.router.navigateByUrl("/dashboard/other-user-action/invest")},DetailComponent.prototype.calculationInvest=function(){var t=this;jQuery("#FormSimulation").valid()?(this.loan.loan_amount=this.dataCalculation.jumlah,this.detailService.calculationLoan(this.dataCalculation).then(function(n){try{t.simulation.nominal=t.delimiter(n.data.simulation_result.nominal),t.simulation.success_fee=t.delimiter(n.data.simulation_result.sucess_fee),t.simulation.nominal_and_fee=t.delimiter(n.data.simulation_result.nominal_and_fee),t.simulation.pokok=t.delimiter(n.data.simulation_result.pokok),t.simulation.bunga=t.delimiter(n.data.simulation_result.bunga),t.simulation.tenor=t.delimiter(n.data.simulation_result.tenor),t.simulation.denda=t.delimiter(n.data.simulation_result.denda),t.simulation.cicilan_perbulan=t.delimiter(n.data.simulation_result.cicilan_perbulan),t.simulation.transaction_fee=t.delimiter(n.data.simulation_result.transaction_fee)}finally{t.statusCalculation=1}})):alert("Data tidak valid")},DetailComponent.prototype.createLoan=function(){if(jQuery("#FormSimulation").valid()){if(0===this.isOn)return;this.formVerify=1}else alert("Data tidak valid!")},DetailComponent.prototype.hideVerify=function(t){this.formVerify=t},DetailComponent.prototype.tandaPemisahTitik=function(t){var n=!1,t=t.toString();t<0&&(n=!0),t=t.replace(".",""),t=t.replace("-","");for(var e="",a=t.length,i=0,o=a;o>0;o--)i+=1,e=i%3==1&&1!=i?t.substr(o-1,1)+"."+e:t.substr(o-1,1)+e;n&&(e="-"+e);var s="Rp.";return s.concat(e)},DetailComponent.prototype.numbersonly=function(t,n){return n.keyCode},DetailComponent=__decorate([a.Component({selector:"detail",template:e(949),providers:[s.DetailService]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Http&&i.Http)&&t||Object,"function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object,"function"==typeof(l="undefined"!=typeof o.ActivatedRoute&&o.ActivatedRoute)&&l||Object,"function"==typeof(r="undefined"!=typeof s.DetailService&&s.DetailService)&&r||Object])],DetailComponent);var t,n,l,r}();n.DetailComponent=l},779:function(t,n,e){"use strict";var a=e(0),i=e(87);e(403);var o=function(){function DetailService(t){this.http=t,this.headers=new i.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.detailInvestUrl="https://masscredit-api.stagingapps.net/user/loan/detail",this.calculationUrl="https://masscredit-api.stagingapps.net/user/loan/simulate"}return DetailService.prototype.getDetail=function(t){return this.http.post(this.detailInvestUrl,t,this.options).toPromise().then(function(t){return t.json()}).catch(this.handleError)},DetailService.prototype.handleError=function(t){var n=JSON.parse(t._body);return n},DetailService.prototype.calculationLoan=function(t){return this.http.post(this.calculationUrl,t,this.options).toPromise().then(function(t){return t.json()}).catch(this.handleError)},DetailService=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Http&&i.Http)&&t||Object])],DetailService);var t}();n.DetailService=o},780:function(t,n,e){"use strict";var a=e(0),i=e(50),o=function(){function FormDetailComponent(t){this.router=t}return FormDetailComponent.prototype.ngOnInit=function(){void 0!==this.dataDetailInvest},__decorate([a.Input(),__metadata("design:type",Object)],FormDetailComponent.prototype,"dataDetailInvest",void 0),__decorate([a.Input(),__metadata("design:type",String)],FormDetailComponent.prototype,"dataAmount",void 0),__decorate([a.Input(),__metadata("design:type",String)],FormDetailComponent.prototype,"dataRestAmount",void 0),FormDetailComponent=__decorate([a.Component({selector:"form-detail",template:e(950)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object])],FormDetailComponent);var t}();n.FormDetailComponent=o},781:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(780))},782:function(t,n,e){"use strict";var a=e(0),i=e(50),o=e(87),s=e(153),l=e(62),r=e(778),d=e(781),c=e(785),u=e(784);n.routes=[{path:"",component:r.DetailComponent}];var m=function(){function DetailModule(){}return DetailModule.routes=n.routes,DetailModule=__decorate([a.NgModule({declarations:[r.DetailComponent,d.FormDetailComponent,c.VerifyComponent,u.FormVerifyComponent],imports:[o.HttpModule,s.FormsModule,l.CommonModule,i.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],DetailModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=m},783:function(t,n,e){"use strict";var a=e(0),i=e(701),o=function(){function FormVerifyComponent(t){this.verifyComponent=t,this.dataLoan=this.verifyComponent.dataLoan}return FormVerifyComponent.prototype.ngOnInit=function(){jQuery("#confirmInvestForm").validate({rules:{password:{required:!0}}})},FormVerifyComponent=__decorate([a.Component({selector:"form-verify",template:'\n\t\t<form name="confirmInvestForm" id="confirmInvestForm">\n\t\t  <div class="col-md-6">\n\t\t    <div class="form-group">\n          <span class="required">*</span>\n          <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="dataLoan.password">\n\t\t    </div>\n\t\t  </div>\n\t\t</form>\n\t'}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.VerifyComponent&&i.VerifyComponent)&&t||Object])],FormVerifyComponent);var t}();n.FormVerifyComponent=o},784:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(783))},785:function(t,n,e){"use strict";function __export(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}__export(e(701))},786:function(t,n,e){"use strict";var a=e(0),i=e(87);e(403);var o=function(){function VerifyService(t){this.http=t,this.headers=new i.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.loanUrl="https://masscredit-api.stagingapps.net/other-user/loan/new"}return VerifyService.prototype.createLoan=function(t){return this.http.post(this.loanUrl,t,this.options).toPromise().then(function(t){return t.json()}).catch(this.handleError)},VerifyService.prototype.handleError=function(t){var n=JSON.parse(t._body);return n},VerifyService=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Http&&i.Http)&&t||Object])],VerifyService);var t}();n.VerifyService=o},949:function(t,n){t.exports='<div class="col-md-4">\n  <div class="row">\n    <div class="box-header" align="center"><br>\n      <label><h2 style="font-size: 24px;color: orange;">Form Pinjaman</h2></label>\n    </div>\n    <div class="box-body">\n    <div class="col-xs-12">\n      <!-- component calculation -->\n      <form id="FormSimulation" name="FormSimulation">\n      <div class="form-group">\n        <input type="text" placeholder="Jumlah Pinjaman" class="form-control input-md" name="jumlah" id="jumlah" value="{{dataCalculation.jumlah}}" (keyup)="numbersonly(this,$event)" [(ngModel)]="dataCalculation.jumlah">\n      </div>\n      </form>\n      <div class="form-group">\n        <button class="btn-back" (click)="listInvest()">KEMBALI</button>\n        <button type="submit" class="btn-simulation-loan" (click)="calculationInvest()">KALKULASI</button>\n      </div>\n      <hr>\n      <!-- <div align="center" *ngIf="dataDetailInvest == 3"> \n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div> -->\n    </div>\n    </div>\n  </div>\n  <div class="row">\n    <br>\n    <div class="box-header" align="center">\n      <h2 class="box-title">Kalkulasi Pinjaman</h2>\n    </div>\n    <div class="box-body">\n      <div class="row">\n      <div class="col-xs-12">     \n        <!-- component form loan -->\n        <form name="FormLoan" id="FormLoan">\n          <fieldset disabled>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Nominal</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" name="nominal" placeholder="-" class="form-control input-md" id="nominal" [(ngModel)]="simulation.nominal">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Success Fee</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" placeholder="-" class="form-control input-md" name="success_fee" id="success_fee" [(ngModel)]="simulation.success_fee">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Nominal dan Fee</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" placeholder="-" class="form-control input-md" name="nominal_and_fee" id="nominal_and_fee" [(ngModel)]="simulation.nominal_and_fee">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Pokok</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" name="pokok" placeholder="-" class="form-control input-md" id="pokok" [(ngModel)]="simulation.pokok"> \n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Bunga</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" placeholder="-" class="form-control input-md" name="bunga" id="bunga" [(ngModel)]="simulation.bunga">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Tenor</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" placeholder="-" class="form-control input-md" name="tenor" id="tenor" [(ngModel)]="simulation.tenor">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Denda</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" placeholder="-" class="form-control input-md" name="denda" id="denda" [(ngModel)]="simulation.denda">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Cicilan/Bulan</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" placeholder="-" class="form-control input-md" name="cicilan_perbulan" id="cicilan_perbulan" [(ngModel)]="simulation.cicilan_perbulan">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-5">\n                <label class="unit">Transaction Fee</label>\n              </div>\n              <div class="col-md-7">\n                <input type="text" placeholder="-" class="form-control input-md" name="transaction_fee" id="transaction_fee" [(ngModel)]="simulation.transaction_fee">\n              </div>\n            </div>\n          </fieldset>\n        </form>\n        <div class="col-md-12" *ngIf="statusCalculation == 1">\n          <div class="form-group col-center">\n          <div align="center">\n            <span class="input-group-addon">\n              <input type="checkbox" [checked]="isOn === dataIsOn[0].value" (change)="$event.target.checked? (isOn = dataIsOn[0].value) : (isOn = dataIsOn[1].value)">\n              <label>Saya setuju dengan syarat dan ketentuan</label>\n            </span>\n            <button class="btn btn-simulation-loan" (click)="createLoan()" [ngClass]="{disabled:isOn === 0}" id="createLoan" style="color:#ecf0f1;">PINJAM SEKARANG!</button>\n          </div>\n          </div>\n          <!-- component password -->\n          <verify *ngIf="formVerify == 1" [dataLoan]="loan" (statusForm)="hideVerify($event)"></verify>\n        </div> <!-- end component form-loan -->\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="col-md-8">\n<div class="box-header" align="center">\n  <h2 class="box-title">Detail Pinjaman</h2>\n</div>\n<div class="box-body">\n  <div class="col-md-12">\n    <form-detail *ngIf="statusDataDetail == 1" [dataDetailInvest]="detailInvest" [dataAmount]="amount" [dataRestAmount]="restAmount"></form-detail>\n  </div>\n</div>\n</div>\n<div align="center" *ngIf="statusDataDetail == 0"> \n  <br>\n  <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n  <span class="sr-only">Loading...</span>\n</div>'},950:function(t,n){t.exports='<div class="form-group" align="center"><br>\n  <img src="{{ dataDetailInvest.images }}" alt="Foto Pinjaman" class="thumbnail" width="500px" height="250px">\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Nama Investasi</label>\n  </div>\n  <div class="col-md-7 clearfix">\n    <input type="text" placeholder="Nama Investasi" class="form-control input-md" name="invest_name" id="invest_name" value="{{ dataDetailInvest.loan_name }}" disabled>\n  </div>\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Jumlah Investasi</label>\n  </div>\n  <div class="col-md-7 clearfix">\n    <input type="text" placeholder="Jumlah Investasi" class="form-control input-md" name="amount" id="amount" value="{{ dataAmount }}" disabled>\n  </div>\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Sisa Investasi</label>\n  </div>\n  <div class="col-md-7 clearfix">\n    <input type="text" placeholder="Sisa Investasi" class="form-control input-md" name="sisa" id="sisa" value="{{ dataRestAmount }}" disabled>\n  </div>\n</div>\n<div class="form-group">\n  <!-- null -->\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Tipe Investasi</label>\n  </div>\n  <div class="col-md-7 clearfix">\n    <input type="text" placeholder="Tipe Invest" class="form-control input-md" name="invest_name" id="invest_name" value="{{ dataDetailInvest.tipe }}" disabled>\n   </div>\n</div>\n<div class="form-group">\n  <!-- null -->\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Deskipsi</label>\n  </div>\n  <div class="col-md-7 clearfix">\n    <textarea type="text" placeholder="Description" class="form-control input-md" name="description" id="description" value="{{ dataDetailInvest.collateral_value }}" disabled></textarea>\n  </div>\n</div>\n<div class="form-group">\n  <!-- null -->\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Batas Penawaran</label>\n  </div>\n  <div class="col-md-7 clearfix">\n    <input  type="text" placeholder="Batas Akhir Penawaran" name="due_date" class="form-control input-md" id="due_date" value="" value="{{ dataDetailInvest.due_date }}" disabled>\n  </div>\n</div>\n<div class="form-group">\n  <!-- null -->\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Bunga</label>\n  </div>\n  <div class="col-md-5 clearfix">\n    <input type="text" placeholder="Bunga" class="form-control input-md" name="interest" id="interest" value="{{ dataDetailInvest.interest }}" disabled>\n  </div>\n    <label class="unit">%/Bulan</label>\n</div>\n<div class="form-group">\n  <!-- null -->\n</div>\n<div class="form-group">\n  <div class="col-md-4 clearfix">\n    <label class="unit">Tenor</label>\n  </div>\n  <div class="col-md-5">\n    <input type="text" placeholder="Tenor" class="form-control input-md" name="tenor" id="tenor" value="{{ dataDetailInvest.tenor }}" disabled>\n  </div>\n  <label class="unit">Bulan</label>\n</div>\n<div class="form-group">\n  <!-- null -->\n</div>'},951:function(t,n){t.exports='<div class="modal fade" id="ModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 9000">\n<div class="modal-dialog  modal-style">\n\t<div class="modal-content">\n\t  <div class="modal-header">\n\t    <button type="button" class="close" data-dismiss="modal" aria-hidden="true" (click)="hideModal()">&times;</button>\n\t\t  <h4 class="modal-title">Masukan Password untuk verifikasi</h4>\n\t  </div>\n\t  <div class="modal-body">\n\t   <div class="row">\n\t    <div align="center" *ngIf="statusConfirm == 0"> \n\t\t    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n\t\t    <span class="sr-only">Loading...</span>\n\t\t  </div>\n\t\t  <div *ngIf="statusConfirm == 1">\n\t\t  <!-- component form -->\n\t\t  <form-verify></form-verify>\n\t\t  <div class="col-md-6">\n\t\t    <div class="form-group">\n\t        <div class="col-md-12">\n\t          <button class="btn btn-default" (click)="cancelConfirmLoan()">Batal</button>\n\t          <button class="btn btn-red" (click)="confirmLoan()">Verifikasi</button>\n\t        </div>\n\t\t    </div>\n\t\t  </div>\n\t\t  </div>\n\t   </div>\n\t  </div>\n\t</div>\n</div>\n</div>'}});