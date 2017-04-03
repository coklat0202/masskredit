webpackJsonp([24],{717:function(e,t,n){"use strict";var r=n(0),a=n(87),s=n(50),i=n(153),o=n(718);t.routes=[{path:"",component:o.StepRegisterComponent}];var d=function(){function StepRegisterModule(){}return StepRegisterModule.routes=t.routes,StepRegisterModule=__decorate([r.NgModule({declarations:[o.StepRegisterComponent],imports:[a.HttpModule,i.FormsModule,s.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],StepRegisterModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=d},718:function(e,t,n){"use strict";var r=n(0),a=n(50),s=n(87),i=n(719),o=function(){function StepRegisterComponent(e,t,n,r){this.stepregisterService=e,this.router=t,this.http=n,this.activatedRoute=r,this.register={nama_lengkap:null,alamat_email:null,phone_number:null,password:null,confirm_password:null,kode_pos:null,jenis_kelamin:0,tempat_lahir:null,tanggal_lahir:null,alamat:null,status_rumah:0},this.status_rumah=[],this.status=[],this.nomor=""}return StepRegisterComponent.prototype.ngOnInit=function(){this.regex();this.activatedRoute.params.subscribe(function(e){e.access_code});jQuery("#messagelogin").hide(),this.register.phone_number=JSON.parse(localStorage.getItem("phone-number")),jQuery(".datepicker").datepicker({format:"yyyy-mm-dd",showOn:"focus",autoclose:!0,startDate:"-100y",endDate:"-21y"}),jQuery("#kode_pos").mask("00000"),jQuery("#registerForm").validate({rules:{nama_lengkap:{required:!0},alamat_email:{required:!0,regx:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/},password:{required:!0},confirm_password:{required:!0},jenis_kelamin:{required:!0},kode_pos:{required:!0},tempat_lahir:{required:!0},tanggal_lahir:{required:!0},alamat:{required:!0},status_rumah:{required:!0}},messages:{}})},StepRegisterComponent.prototype.regex=function(){jQuery.validator.addMethod("regx",function(e,t,n){return n.test(e)},"Email invalid")},StepRegisterComponent.prototype.sendRegister=function(e){var t=this;console.log(this.register.phone_number),jQuery("#registerForm").valid()?(jQuery("#signup").prop("disabled",!0),this.register.phone_number=JSON.parse(localStorage.getItem("phone-number")),this.register.tanggal_lahir=jQuery("#tanggal_lahir").val(),this.stepregisterService.postStepRegister(e).then(function(e){var n=e.meta.message,r=JSON.stringify(e.meta.code),a=e.data;"5"===r.charAt(0)&&t.handleError(n),"2"===r.charAt(0)&&t.handleSuccess(a)})):alert("Data tidak valid")},StepRegisterComponent.prototype.handleError=function(e){try{"No Handphone tidak terdaftar"==e?alert("No Handphone tidak terdaftar"):"Email sudah terdaftar"==e?alert("Maaf Email sudah terdaftar"):"Password dan Confirm Password tidak sama"==e?alert("Password dan Confirm Password tidak sama"):alert("No Handphone sudah terdaftar")}finally{jQuery("#signup").prop("disabled",!1)}},StepRegisterComponent.prototype.handleSuccess=function(e){this.stepregisterService.showNotif()},StepRegisterComponent.prototype.hideNotif=function(){jQuery("#myModal").modal("toggle"),this.router.navigateByUrl("/home")},StepRegisterComponent.prototype.cancelRegister=function(){localStorage.removeItem("access-code"),localStorage.removeItem("verify-handphone");this.router.navigateByUrl("/")},StepRegisterComponent=__decorate([r.Component({selector:"step-register",template:n(918),providers:[i.StepRegisterService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.StepRegisterService&&i.StepRegisterService)&&e||Object,"function"==typeof(t="undefined"!=typeof a.Router&&a.Router)&&t||Object,"function"==typeof(o="undefined"!=typeof s.Http&&s.Http)&&o||Object,"function"==typeof(d="undefined"!=typeof a.ActivatedRoute&&a.ActivatedRoute)&&d||Object])],StepRegisterComponent);var e,t,o,d}();t.StepRegisterComponent=o},719:function(e,t,n){"use strict";var r=n(0),a=n(87),s=n(50),i=function(){function StepRegisterService(e,t){this.router=e,this.http=t,this.stepregisterUrl="https://masscredit-api.stagingapps.net/user/credential/register",this.headers=new a.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new a.RequestOptions({headers:this.headers}),this.message={}}return StepRegisterService.prototype.postStepRegister=function(e){return this.http.post(this.stepregisterUrl,e,this.options).toPromise().then(function(e){return e.json()}).catch(this.handleError)},StepRegisterService.prototype.handleError=function(e){var t=JSON.parse(e._body);return t},StepRegisterService.prototype.showNotif=function(){jQuery("#myModal").modal({backdrop:"static",keyboard:!1})},StepRegisterService=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object,"function"==typeof(t="undefined"!=typeof a.Http&&a.Http)&&t||Object])],StepRegisterService);var e,t}();t.StepRegisterService=i},918:function(e,t){e.exports='<div class="row">\n<div class="container">\n  <div class="form-account form-login-register" id="step-1">\n  <h2>Registrasi</h2>\n  <p>Silakan isi data berikut untuk mendaftarkan diri anda</p>\n    <div class="row">\n    <div class="col-xs-12">\n    <form class="form-horizontal clearfix row" name="registerForm" id="registerForm">\n        <div class="col-xs-6">\n          <div class="form-group">\n            <div class="col-xs-12">\n              <span class="required">*</span>\n              <input  type="text" placeholder="Nama Lengkap" class="form-control input-md" [(ngModel)]="register.nama_lengkap" id="nama_lengkap" name="nama_lengkap" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <input  type="text" placeholder="Email" class="form-control input-md" [(ngModel)]="register.alamat_email" id="alamat_email" name="alamat_email" required>\n            </div>\n          </div>\n          <!-- Password -->\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <input  type="password" placeholder="Password" class="form-control input-md" [(ngModel)]="register.password" name="password" minlength="6" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n                <input  type="password" placeholder="Confirm Password" class="form-control input-md" [(ngModel)]="register.confirm_password" minlength="6" name="confirm_password" required>\n             </div>\n          </div>\n          <!-- <div class="form-group">\n            <div class="col-md-12">\n            <span class="required">*</span>\n                <input  type="text" placeholder="{{ nomor }}" class="form-control input-md" name="phone_number" id="phone_number" value="{{ nomor }}" disabled>\n             </div>\n          </div> -->\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <select class="form-control input-md" name="jenis_kelamin" [(ngModel)]="register.jenis_kelamin" name="jenis_kelamin"  required>\n                <option value="0" disabled>Jenis Kelamin</option>\n                <option value="1">Laki-laki</option>\n                <option value="2">Perempuan</option>                  \n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div class="col-xs-6">\n          <div class="form-group">\n            <div class="col-xs-4">\n             <span class="required">*</span>\n                <input  type="text" placeholder="Tempat Lahir" class="form-control input-md" [(ngModel)]="register.tempat_lahir" name="tempat_lahir" required>\n            </div>\n            <div class="col-xs-8">\n            <span class="required">*</span>\n              <input  type="text" placeholder="Tanggal Lahir " name="tanggal_lahir" class="form-control input-md datepicker" id="tanggal_lahir" [(ngModel)]="register.tanggal_lahir" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <textarea  type="text" placeholder="Alamat" class="form-control input-md" [(ngModel)]="register.alamat" name="alamat" required></textarea>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n             <span class="required">*</span>\n                <input  type="text" placeholder="Kode Pos" class="form-control input-md" [(ngModel)]="register.kode_pos" name="kode_pos" id="kode_pos" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <select class="form-control input-md" name="status_rumah" [(ngModel)]="register.status_rumah" name="status_rumah" required>\n                <option value="0" disabled>Status Rumah</option>\n                <option value="1">Pribadi</option>\n                <option value="2">Kontrak</option>                  \n              </select>\n            </div>\n          </div>            \n        </div>\n    </form>\n    </div>\n    </div>\n    <div class="row">\n    <div class="col-xs-12">\n      <div class="form-group">\n        <div class="col-xs-6 col-center">\n          <button type="cancel" (click)="cancelRegister()" name="cancel" class="btn btn-default" id="cancel" >Batal</button>\n          <button type="submit" (click)="sendRegister(register)" name="signup" id="signup" class="btn btn-red btn-verifikasi">Daftar</button>\n        </div>\n      </div>\n    </div>\n    </div>\n  <div class="modal fade" id="myModal" style="z-index:9000;">\n    <div class="modal-dialog">\n    <div class="modal-content bg-navy">\n      <div class="modal-body">\n      <button type="button" class="close" (click)="hideNotif()" style="color: #ffffff">&times;</button>\n      <div class="row">\n      <div class="col-xs-12">\n        <div class="form-group">\n        <h1 style="color:#ffc300;">Hai, {{ register.nama_lengkap }}</h1>\n        <h2 style="color:#ffffff;">Proses registrasi berhasil, langkah selanjutnya silahkan ada melakukan Login.</h2>\n        </div>\n      </div>\n      </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  </div>\n</div>\n</div>'}});