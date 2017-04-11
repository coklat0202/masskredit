webpackJsonp([26],{719:function(e,t,a){"use strict";var n=a(0),r=a(87),i=a(50),s=a(153),o=a(720);t.routes=[{path:"",component:o.StepRegisterComponent}];var d=function(){function StepRegisterModule(){}return StepRegisterModule.routes=t.routes,StepRegisterModule=__decorate([n.NgModule({declarations:[o.StepRegisterComponent],imports:[r.HttpModule,s.FormsModule,i.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],StepRegisterModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=d},720:function(e,t,a){"use strict";var n=a(0),r=a(50),i=a(87),s=a(721),o=function(){function StepRegisterComponent(e,t,a,n){this.stepregisterService=e,this.router=t,this.http=a,this.activatedRoute=n,this.register={nama_lengkap:null,alamat_email:null,phone_number:null,password:null,confirm_password:null,kode_pos:null,jenis_kelamin:0,tempat_lahir:null,tanggal_lahir:null,alamat:null,status_rumah:0},this.status_rumah=[],this.status=[],this.nomor=""}return StepRegisterComponent.prototype.ngOnInit=function(){this.regex();this.activatedRoute.params.subscribe(function(e){e.access_code});jQuery("#messagelogin").hide(),this.register.phone_number=JSON.parse(localStorage.getItem("phone-number")),jQuery(".datepicker").datepicker({format:"dd-mm-yyyy",showOn:"focus",autoclose:!0,startDate:"-100y",endDate:"-21y",onSelect:function(){this.focus()}}).on("hide",function(){this.firstHide?this.firstHide=!1:jQuery(this).is(":focus")||(this.firstHide=!0,this.focus())}).on("show",function(){this.firstHide&&jQuery(this).datepicker("hide")}),jQuery(function(e){jQuery("#tanggal_lahir").mask("99-99-9999",{placeholder:"DD-MM-YYYY"})}),jQuery("#kode_pos").mask("00000"),jQuery("#registerForm").validate({rules:{nama_lengkap:{required:!0},alamat_email:{required:!0,regex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/},password:{required:!0,minlength:8,matchConfirm:!0},confirm_password:{required:!0,minlength:8,match:!0},jenis_kelamin:{required:!0},kode_pos:{required:!0},tempat_lahir:{required:!0,maxlength:30},tanggal_lahir:{required:!0},alamat:{required:!0},status_rumah:{required:!0}},messages:{nama_lengkap:"Data dibutuhkan",alamat_email:{required:"Data dibutuhkan",regex:"Email invalid"},password:{required:"Data dibutuhkan",minlength:"Password terlalu pendek"},confirm_password:{required:"Data dibutuhkan",match:"Password tidak sama",minlength:"Password terlalu pendek"},jenis_kelamin:"Data dibutuhkan",kode_pos:"Data dibutuhkan",tempat_lahir:"Data dibutuhkan",tanggal_lahir:"Data dibutuhkan",alamat:"Data dibutuhkan",status_rumah:"Data dibutuhkan"}})},StepRegisterComponent.prototype.regex=function(){jQuery.validator.addMethod("regex",function(e,t,a){return a.constructor!=RegExp?a=new RegExp(a):a.global&&(a.lastIndex=0),this.optional(t)||a.test(e)},"Data input salah."),jQuery.validator.addMethod("match",function(e,t){var a=e,n=jQuery("#password").val();return a==n||this.optional(t)},"Data input salah."),jQuery.validator.addMethod("matchConfirm",function(e){var t=(jQuery("#confirm_password").get(),e),a=jQuery("#confirm_password").val();return a==t?[jQuery("#confirm_password").valid(),!0]:""==a||a==t||jQuery("#confirm_password").valid("false")},null),jQuery("#tempat_lahir").bind("input",function(e){for(var t="",a=this.value,n=0;n<a.length;n++)/[A-Za-z]/.test(a.charAt(n))&&(t=t.concat(a.charAt(n)));this.value=t})},StepRegisterComponent.prototype.sendRegister=function(e){var t=this;if(jQuery("#registerForm").valid()){null===this.register.phone_number,jQuery("#signup").prop("disabled",!0);var a=jQuery("#tanggal_lahir").val(),n=a.split("-"),r=n[2]+"-"+n[1]+"-"+n[0];this.register.phone_number=JSON.parse(localStorage.getItem("phone-number")),this.register.tanggal_lahir=r,this.stepregisterService.postStepRegister(e).then(function(e){var a=e.meta.message,n=JSON.stringify(e.meta.code),r=e.data;"5"===n.charAt(0)&&t.handleError(a),"2"===n.charAt(0)&&t.handleSuccess(r)})}else alert("Data tidak valid")},StepRegisterComponent.prototype.handleError=function(e){try{"No Handphone tidak terdaftar"==e?alert("No Handphone tidak terdaftar"):"Email sudah terdaftar"==e?alert("Maaf Email sudah terdaftar"):"Password dan Confirm Password tidak sama"==e?alert("Password dan Confirm Password tidak sama"):alert("No Handphone sudah terdaftar")}finally{jQuery("#signup").prop("disabled",!1)}},StepRegisterComponent.prototype.handleSuccess=function(e){this.stepregisterService.showNotif()},StepRegisterComponent.prototype.hideNotif=function(){jQuery("#myModal").modal("toggle"),this.router.navigateByUrl("/home")},StepRegisterComponent.prototype.cancelRegister=function(){localStorage.removeItem("access-code"),localStorage.removeItem("verify-handphone");this.router.navigateByUrl("/")},StepRegisterComponent=__decorate([n.Component({selector:"step-register",template:a(924),providers:[s.StepRegisterService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.StepRegisterService&&s.StepRegisterService)&&e||Object,"function"==typeof(t="undefined"!=typeof r.Router&&r.Router)&&t||Object,"function"==typeof(o="undefined"!=typeof i.Http&&i.Http)&&o||Object,"function"==typeof(d="undefined"!=typeof r.ActivatedRoute&&r.ActivatedRoute)&&d||Object])],StepRegisterComponent);var e,t,o,d}();t.StepRegisterComponent=o},721:function(e,t,a){"use strict";var n=a(0),r=a(87),i=a(50),s=function(){function StepRegisterService(e,t){this.router=e,this.http=t,this.stepregisterUrl="https://masscredit-api.stagingapps.net/user/credential/register",this.headers=new r.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new r.RequestOptions({headers:this.headers}),this.message={}}return StepRegisterService.prototype.postStepRegister=function(e){return this.http.post(this.stepregisterUrl,e,this.options).toPromise().then(function(e){return e.json()}).catch(this.handleError)},StepRegisterService.prototype.handleError=function(e){var t=JSON.parse(e._body);return t},StepRegisterService.prototype.showNotif=function(){jQuery("#myModal").modal({backdrop:"static",keyboard:!1})},StepRegisterService=__decorate([n.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Router&&i.Router)&&e||Object,"function"==typeof(t="undefined"!=typeof r.Http&&r.Http)&&t||Object])],StepRegisterService);var e,t}();t.StepRegisterService=s},924:function(e,t){e.exports='<div class="row">\n<div class="container">\n  <div class="form-account form-login-register" id="step-1">\n  <h2>Registrasi</h2>\n  <p>Silakan isi data berikut untuk mendaftarkan diri anda</p>\n    <div class="row">\n    <div class="col-xs-12">\n    <form class="form-horizontal clearfix row" name="registerForm" id="registerForm">\n        <div class="col-xs-6">\n          <div class="form-group">\n            <div class="col-xs-12">\n              <span class="required">*</span>\n              <input  type="text" placeholder="Nama Lengkap" class="form-control input-md" [(ngModel)]="register.nama_lengkap" id="nama_lengkap" name="nama_lengkap" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <input  type="text" placeholder="Email" class="form-control input-md" [(ngModel)]="register.alamat_email" id="alamat_email" name="alamat_email" required>\n            </div>\n          </div>\n          <!-- Password -->\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <input  type="password" placeholder="Password" class="form-control input-md" [(ngModel)]="register.password" id="password" name="password" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n                <input  type="password" placeholder="Confirm Password" class="form-control input-md" [(ngModel)]="register.confirm_password" name="confirm_password" id="confirm_password" required>\n             </div>\n          </div>\n          <!-- <div class="form-group">\n            <div class="col-md-12">\n            <span class="required">*</span>\n                <input  type="text" placeholder="{{ nomor }}" class="form-control input-md" name="phone_number" id="phone_number" value="{{ nomor }}" disabled>\n             </div>\n          </div> -->\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <select class="form-control input-md" name="jenis_kelamin" [(ngModel)]="register.jenis_kelamin" name="jenis_kelamin"  required>\n                <option value="0" disabled>Jenis Kelamin</option>\n                <option value="1">Laki-laki</option>\n                <option value="2">Perempuan</option>                  \n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div class="col-xs-6">\n          <div class="form-group">\n            <div class="col-xs-6">\n             <span class="required">*</span>\n                <input  type="text" placeholder="Tempat Lahir" class="form-control input-md" [(ngModel)]="register.tempat_lahir" name="tempat_lahir" id="tempat_lahir" maxlength="30" required>\n            </div>\n            <div class="col-xs-6">\n            <span class="required">*</span>\n              <input  type="text" placeholder="Tanggal Lahir " name="tanggal_lahir" class="form-control input-md datepicker" id="tanggal_lahir" [(ngModel)]="register.tanggal_lahir" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <textarea  type="text" placeholder="Alamat" class="form-control input-md" [(ngModel)]="register.alamat" name="alamat" required></textarea>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n             <span class="required">*</span>\n                <input  type="text" placeholder="Kode Pos" class="form-control input-md" [(ngModel)]="register.kode_pos" name="kode_pos" id="kode_pos" required>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-12">\n            <span class="required">*</span>\n              <select class="form-control input-md" name="status_rumah" [(ngModel)]="register.status_rumah" name="status_rumah" required>\n                <option value="0" disabled>Status Rumah</option>\n                <option value="1">Pribadi</option>\n                <option value="2">Kontrak</option>                  \n              </select>\n            </div>\n          </div>            \n        </div>\n    </form>\n    </div>\n    </div>\n    <div class="row">\n    <div class="col-xs-12">\n      <div class="form-group">\n        <div class="col-xs-6 col-center">\n          <button type="cancel" (click)="cancelRegister()" name="cancel" class="btn btn-default" id="cancel" >Batal</button>\n          <button type="submit" (click)="sendRegister(register)" name="signup" id="signup" class="btn btn-red btn-verifikasi">Daftar</button>\n        </div>\n      </div>\n    </div>\n    </div>\n  <div class="modal fade" id="myModal" style="z-index:9000;">\n    <div class="modal-dialog">\n    <div class="modal-content bg-navy">\n      <div class="modal-body">\n      <button type="button" class="close" (click)="hideNotif()" style="color: #ffffff">&times;</button>\n      <div class="row">\n      <div class="col-xs-12">\n        <div class="form-group">\n        <h1 style="color:#ffc300;">Hai, {{ register.nama_lengkap }}</h1>\n        <h2 style="color:#ffffff;">Proses registrasi berhasil, langkah selanjutnya silahkan ada melakukan Login.</h2>\n        </div>\n      </div>\n      </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  </div>\n</div>\n</div>'}});