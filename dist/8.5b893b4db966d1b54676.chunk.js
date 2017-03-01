webpackJsonp([8],{698:function(e,n,t){"use strict";var a=t(0),o=t(87),i=t(50),r=function(){function CreateComponent(e,n){this.router=e,this.http=n,this.dataFundWithdrawal=0,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.data_access_token={access_token:this.access_token},this.data={access_token:this.access_token,no_reference:null,nama_lengkap:null,bank_id:null,no_rekening:null,amount:null},this.banks=[],this.formConfirm=0,this.listData=0,this.lastBank=null,this.bank=null,this.bankUrl="https://masscredit-api.stagingapps.net/master/bank",this.profileUrl="https://masscredit-api.stagingapps.net/user/credential/profile",this.noreferenceUrl="https://masscredit-api.stagingapps.net/user/fund/no-reference"}return CreateComponent.prototype.ngOnInit=function(){this.getProfile(),this.getNoReference()},CreateComponent.prototype.getNoReference=function(){var e=this;this.http.post(this.noreferenceUrl,this.data,this.options).map(function(e){return e.json()}).subscribe(function(n){var t=(n.meta.code,n.meta.message,n.data.no_reference);e.data.no_reference=t,e.listData=3,3==e.listData&&(e.dataFundWithdrawal=1)},function(n){var t=JSON.parse(n._body),a=t.meta.message;"unauthorized"==a&&(alert("Maaf session anda telah habis silahkan login kembali"),e.router.navigateByUrl("/dashboard/sign-out"))})},CreateComponent.prototype.getProfile=function(){var e=this;this.http.post(this.profileUrl,this.data_access_token,this.options).map(function(e){return e.json()}).subscribe(function(n){e.data.nama_lengkap=n.data.profile.name;var t=n.data.profile.complement_user.bank,a=n.data.profile.complement_user.no_rekening;e.data.bank_id=t,0==t&&(e.bank="Belum diisi",e.data.no_rekening="Belum diisi"),1==t&&(e.bank="BCA"),2==t&&(e.bank="Mandiri"),3==t&&(e.bank="Danamon"),4==t&&(e.bank="Sinarmas"),5==t&&(e.bank="BNI"),6==t&&(e.bank="Niaga"),""==a?e.data.no_rekening="Belum diisi":e.data.no_rekening=a},function(n){var t=JSON.parse(n._body),a=t.meta.message;"unauthorized"==a&&(alert("Maaf session anda telah habis silahkan login kembali"),e.router.navigateByUrl("/dashboard/sign-out"))})},CreateComponent=__decorate([a.Component({selector:"create",template:t(924)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Router&&i.Router)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Http&&o.Http)&&n||Object])],CreateComponent);var e,n}();n.CreateComponent=r},699:function(e,n){"use strict";var t=function(){function DataConfirm(){}return DataConfirm}();n.DataConfirm=t},769:function(e,n,t){"use strict";var a=t(0),o=t(87),i=t(50),r=t(699),s=function(){function CreateService(e,n,t){this.http=e,this.router=n,this.dataConfirm=t,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.postFundUrl="https://masscredit-api.stagingapps.net/user/withdrawal/add"}return CreateService.prototype.postFundWithdrawal=function(e){var n=this;this.http.post(this.postFundUrl,e,this.options).map(function(e){return e.json()}).subscribe(function(e){e.meta.code,e.meta.message;n.dataConfirm.id=e.data.id,n.dataConfirm.verification_code=e.data.verification_code},function(e){var t=JSON.parse(e._body),a=t.meta.message;"unauthorized"==a&&(alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out"))})},CreateService=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof i.Router&&i.Router)&&n||Object,"function"==typeof(t="undefined"!=typeof r.DataConfirm&&r.DataConfirm)&&t||Object])],CreateService);var e,n,t}();n.CreateService=s},770:function(e,n,t){"use strict";var a=t(0),o=t(50),i=t(87),r=function(){function FormConfirmComponent(e,n){this.router=e,this.http=n,this.headers=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.data={access_token:this.access_token,id:this.incomingDataId,verification_code:this.incomingDataVerificationCode,password:null},this.dataConfirm=1,this.confirmwithdrawalUrl="https://masscredit-api.stagingapps.net/user/withdrawal/confirm"}return FormConfirmComponent.prototype.ngOnInit=function(){jQuery("#modalFormConfirm").modal({backdrop:"static",keyboard:!1})},FormConfirmComponent.prototype.confirmWithdrawal=function(e){var n=this;jQuery("#confirmForm").valid()?(this.dataConfirm=0,this.data.id=this.incomingDataId,this.data.verification_code=this.incomingDataVerificationCode,this.http.post(this.confirmwithdrawalUrl,this.data,this.options).map(function(e){return e.json()}).subscribe(function(e){jQuery("#modalFormConfirm").modal("toggle"),alert("Penarikan dana berhasil"),n.router.navigateByUrl("/dashboard/fund/fund-withdrawal")},function(e){var t=JSON.parse(e._body),a=t.meta.message;t.meta.code;return"unauthorized"==a?(alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out")):void("Password salah"==a&&(n.dataConfirm=1,alert("Password salah")))})):alert("Data tidak valid")},FormConfirmComponent.prototype.cancelWithdrawal=function(){return localStorage.removeItem("id_verification"),localStorage.removeItem("verification_code"),jQuery("#modalFormConfirm").modal("toggle"),this.router.navigateByUrl("/dashboard/fund/fund-withdrawal")},__decorate([a.Input("dataId"),__metadata("design:type",Object)],FormConfirmComponent.prototype,"incomingDataId",void 0),__decorate([a.Input("dataVerificationCode"),__metadata("design:type",Object)],FormConfirmComponent.prototype,"incomingDataVerificationCode",void 0),FormConfirmComponent=__decorate([a.Component({selector:"form-confirm",template:t(925)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Router&&o.Router)&&e||Object,"function"==typeof(n="undefined"!=typeof i.Http&&i.Http)&&n||Object])],FormConfirmComponent);var e,n}();n.FormConfirmComponent=r},771:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(770))},772:function(e,n,t){"use strict";var a=t(0),o=t(87),i=t(50),r=t(769),s=t(698),d=function(){function FormComponent(e,n,t,a){this.router=e,this.http=n,this.createService=t,this.createComponent=a,this.data=this.createComponent.data,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.postFundUrl="https://masscredit-api.stagingapps.net/user/withdrawal/add",this.dataBank=null,this.dataNoRekening=null,this.formConfirm=0,this.id=null,this.verification_code=null}return FormComponent.prototype.ngOnInit=function(){jQuery("#createForm").validate({rules:{amount:{required:!0}}}),jQuery("#amount").mask("000000000000")},FormComponent.prototype.cancelWithdrawal=function(){this.router.navigateByUrl("/dashboard/fund")},FormComponent.prototype.createWithdrawal=function(e){if(jQuery("#createForm").valid()){var n=jQuery("#load");n.button("loading"),this.postFundWithdrawal(e)}else alert("Data tidak valid")},FormComponent.prototype.postFundWithdrawal=function(e){var n=this;this.http.post(this.postFundUrl,e,this.options).map(function(e){return e.json()}).subscribe(function(e){n.id=e.data.id,n.verification_code=JSON.parse(e.data.verification_code),n.formConfirm=1},function(e){var t=jQuery("#load"),a=JSON.parse(e._body),o=a.meta.message;"unauthorized"==o&&(t.button("reset"),alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out")),"Saldo anda tidak mencukupi."==o&&(t.button("reset"),alert("Saldo anda tidak mencukupi."))})},__decorate([a.Input("dataBank"),__metadata("design:type",String)],FormComponent.prototype,"bank",void 0),FormComponent=__decorate([a.Component({selector:"form-add-withdrawal",template:t(926),providers:[r.CreateService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Router&&i.Router)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Http&&o.Http)&&n||Object,"function"==typeof(d="undefined"!=typeof r.CreateService&&r.CreateService)&&d||Object,"function"==typeof(l="undefined"!=typeof s.CreateComponent&&s.CreateComponent)&&l||Object])],FormComponent);var e,n,d,l}();n.FormComponent=d},773:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(772))},774:function(e,n,t){"use strict";var a=t(0),o=t(50),i=t(87),r=t(153),s=t(72),d=t(698),l=t(773),c=t(775),p=t(771),m=t(699);n.routes=[{path:"",component:d.CreateComponent}];var f=function(){function CreateModule(){}return CreateModule.routes=n.routes,CreateModule=__decorate([a.NgModule({declarations:[d.CreateComponent,l.FormComponent,c.MessageComponent,p.FormConfirmComponent],imports:[i.HttpModule,r.FormsModule,s.CommonModule,o.RouterModule.forChild(n.routes)],providers:[m.DataConfirm]}),__metadata("design:paramtypes",[])],CreateModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=f},775:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(776))},776:function(e,n,t){"use strict";var a=t(0),o=t(50),i=function(){function MessageComponent(e){this.router=e}return MessageComponent.prototype.ngOnInit=function(){jQuery("#myModal").modal({backdrop:"static",keyboard:!1})},MessageComponent.prototype.cancelComplement=function(){jQuery("#myModal").modal("toggle"),this.router.navigateByUrl("/dashboard/fund")},MessageComponent.prototype.submitComplement=function(){jQuery("#myModal").modal("toggle"),this.router.navigateByUrl("/dashboard")},MessageComponent=__decorate([a.Component({selector:"message",template:t(927)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Router&&o.Router)&&e||Object])],MessageComponent);var e}();n.MessageComponent=i},924:function(e,n){e.exports='<section class="content">\n<div class="row">\n  <div class="col-md-12">\n    <div class="row">\n      <div align="center" *ngIf="dataFundWithdrawal == 0"> \n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n      <br>\n    </div>\n    <div class="row" *ngIf="dataFundWithdrawal == 1">\n      <form-add-withdrawal [dataBank]="bank"></form-add-withdrawal>\n    </div>\n  </div>\n</div>\n</section>'},925:function(e,n){e.exports='<div class="modal fade" id="modalFormConfirm" style="z-index:9000;">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-body">\n      <button type="button" class="close" (click)="cancelComplement()" style="color: #ffffff">&times;</button>\n        <div class="row">\n        \n        </div>\n        <div class="row">\n          <div class="col-md-12">\n            <div class="form-group" align="center">\n              <label><h1>Verifikasi Penarikan</h1></label>\n              <div align="center" *ngIf="dataConfirm == 0"> \n                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n                <span class="sr-only">Loading...</span>\n              </div>\n              <div *ngIf="dataConfirm == 1">\n              <form  name="confirmForm" id="confirmForm">\n                <div class="form-group" align="center">\n                <div class="input-group">\n                <fieldset disabled>\n                  <input  type="text" placeholder="Verifikasi Code" class="form-control input-md" name="verification_code" id="verification_code"value="{{incomingDataVerificationCode}}">\n                </fieldset>\n                </div> \n                <div class="input-group">\n                  <br>\n                  <input  type="password" placeholder="Password" class="form-control input-md password" name="password" id="password" [(ngModel)]="data.password">\n                </div>\n                </div>\n              </form>\n              </div>\n            </div>\n            <div class="form-group">\n            <div class="col-md-6 col-center">\n              <a href="#/dashboard/fund/fund-withdrawal" class="btn btn-default" (click)="cancelWithdrawal()">Batal</a>\n              <button class="btn btn-red" (click)="confirmWithdrawal(data)">Konfirmasi</button>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},926:function(e,n){e.exports='<div class="box bg-transparent">\n  <div class="box-header" align="center">\n     <h2 class="box-title">Tarik Dana</h2>\n  </div>\n  <div class="box-body">\n  <div class="form-login-register">\n      <form class="form-horizontal clearfix row" name="createForm" id="createForm">\n        <div class="col-md-12">\n          <fieldset disabled>\n            <div class="form-group">\n              <div class="col-md-10 clearfix">\n                <label>Nominal Referensi :</label>\n                <input type="text" placeholder="Nominal Referensi" class="form-control input-md" name="no_reference" id="no_reference" [(ngModel)]="data.no_reference">\n              </div>\n             </div>\n            <div class="form-group">\n              <div class="col-md-10 clearfix">\n                <label>Nama Lengkap :</label>\n                <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="nama_lengkap" id="nama_lengkap" [(ngModel)]="data.nama_lengkap">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-md-10 clearfix">\n                <label>Nama Bank :</label>\n                <input type="text" placeholder="Nama Bank" class="form-control input-md" name="other_bank" id="other_bank" [(ngModel)]="bank">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-md-10 clearfix">\n                <label>Nomor Rekening :</label>\n                <input type="text" placeholder="Nomor Rekening" class="form-control input-md" name="no_rekening" id="no_rekening" [(ngModel)]="data.no_rekening">\n              </div>\n            </div>\n            </fieldset>\n            <!-- <div class="form-group">\n              <div class="col-md-12">\n                <label>Tanggal Penambahan Dana :</label>\n                <input  type="text" placeholder="Tanggal" name="date" class="form-control input-md datepicker" id="date" disabled>\n              </div>\n            </div> -->\n            <div class="form-group">\n              <div class="col-md-10 clearfix">\n              <span class="required">*</span>\n                <label>Nominal :</label>\n                <input type="text" placeholder="Nominal" class="form-control input-md" name="amount" id="amount" [(ngModel)]="data.amount" required>\n              </div>\n            </div>\n            <div class="form-group">\n        </div>\n      </div>\n      </form>\n      <div class="col-md-12 col-center">\n        <button class="btn btn-default" (click)="cancelWithdrawal()">Batal</button>\n        <button class="btn btn-red" id="load" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i>  Loading.." name="singlebutton" type="submit" (click)="createWithdrawal(data)">Simpan</button>\n      </div>\n      <form-confirm *ngIf="formConfirm == 1" [dataVerificationCode]="verification_code" [dataId]="id" ></form-confirm>\n      <message *ngIf="data.bank == \'Belum diisi\' || data.no_rekening == \'Belum diisi\'"></message>\n\n  </div>\n  </div>\n</div>'},927:function(e,n){e.exports='<div class="modal fade" id="myModal" style="z-index:9000;">\n  <div class="modal-dialog">\n    <div class="modal-content bg-navy">\n      <div class="modal-body">\n      <button type="button" class="close" (click)="cancelComplement()" style="color: #ffffff">&times;</button>\n        <div class="row">\n          <div class="col-md-12">\n            <div class="form-group">\n            <h1 style="color:#ffc300;">Data Bank Anda belum lengkap.</h1>\n            <h2 style="color:#ffffff;">silahkan lakukan pengisian Data Bank Anda di pengaturan profil.</h2>\n            </div>\n            <button type="submit" class="btn btn-default" (click)="submitComplement()" style="color: #ffffff; align-content: center;">Kembali</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'}});