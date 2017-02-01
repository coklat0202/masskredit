webpackJsonp([43],{714:function(e,t,n){"use strict";var a=n(0),r=n(73),s=n(109),i=n(62),o=n(154),d=n(715);t.routes=[{path:"",component:d.RegisterStepComponent}];var p=function(){function RegisterStepModule(){}return RegisterStepModule.routes=t.routes,RegisterStepModule=__decorate([a.NgModule({declarations:[d.RegisterStepComponent],imports:[s.HttpModule,o.FormsModule,i.RouterModule.forChild(t.routes),r.CommonModule,o.ReactiveFormsModule],providers:[o.FormBuilder]}),__metadata("design:paramtypes",[])],RegisterStepModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=p},715:function(e,t,n){"use strict";var a=n(0),r=n(154),s=n(700),i=n(62),o=n(109),d=function(){function RegisterStepComponent(e,t,n,a){this.registerService=e,this.router=t,this.http=n,this.formBuilder=a,this.agama=[],this.province=[],this.status_rumah=[],this.tipe_identitas=[],this.status=[],this.tipe_bank=[],this.nomor="",this.register=this.registerService.dataRegister(),this.kota=[],this.id_provinsi=""}return RegisterStepComponent.prototype.ngOnInit=function(){jQuery(".datepicker").datepicker({format:"yyyy-mm-dd"}),jQuery(function(e){jQuery("#kode_pos").mask("00000")}),jQuery("#registerForm").validate({rules:{nama_lengkap:{required:!0},alamat_email:{required:!0,email:!0},password:{required:!0},confirm_password:{required:!0},jenis_kelamin:{required:!0},kode_pos:{required:!0},tempat_lahir:{required:!0},tanggal_lahir:{required:!0},alamat:{required:!0},status_rumah:{required:!0}}}),this.nomor=JSON.parse(localStorage.getItem("verify_handphone"));var e=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"});new o.RequestOptions({headers:e})},RegisterStepComponent.prototype.sendRegister=function(e){var t=this;if(jQuery("#registerForm").valid()){var n=document.getElementById("phone_number"),a=n.value,r=jQuery("#tanggal_lahir").val();this.register.tanggal_lahir=r,this.register.phone_number=a;var s=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),i=new o.RequestOptions({headers:s});this.register,this.http.post("https://masscredit-api.stagingapps.net/user/credential/register",e,i).map(function(e){return e.json()}).subscribe(function(e){var n=e.meta.code;return"200"==n?(localStorage.removeItem("access_code"),localStorage.removeItem("verify_handphone"),t.router.navigateByUrl("/auth/register/finish")):(alert("Register gagal"),t.router.navigateByUrl("/auth/register/step-1"))},function(e){var t=JSON.parse(e._body),n=t.meta.message;"Email sudah terdaftar"==n&&alert("Maaf Email sudah terdaftar"),"Password dan Confirm Password tidak sama"==n&&alert("Password dan Confirm Password tidak sama"),"No Handphone sudah terdaftar"==n&&alert("No Handphone sudah terdaftar")})}else alert("Data tidak valid")},RegisterStepComponent.prototype.cancelRegister=function(){localStorage.removeItem("access_code"),localStorage.removeItem("verify_handphone"),this.router.navigateByUrl("/auth/register")},RegisterStepComponent.prototype.ngAfterViewInit=function(){jQuery(".datepicker").datepicker({format:"yyyy/mm/dd"})},RegisterStepComponent.prototype.getProvinsi=function(e){var t=this;this.id_provinsi=e;var n=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),a=JSON.parse(e),r={id_provinsi:a},s=new o.RequestOptions({headers:n});return this.http.post("https://masscredit-api.stagingapps.net/master/kota",r,s).map(function(e){return e.json()}).subscribe(function(e){t.kota=e.data.kota}),a},RegisterStepComponent=__decorate([a.Component({selector:"register-step",template:n(884),providers:[s.RegisterService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.RegisterService&&s.RegisterService)&&e||Object,"function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object,"function"==typeof(d="undefined"!=typeof o.Http&&o.Http)&&d||Object,"function"==typeof(p="undefined"!=typeof r.FormBuilder&&r.FormBuilder)&&p||Object])],RegisterStepComponent);var e,t,d,p}();t.RegisterStepComponent=d},884:function(e,t){e.exports='<div class="form-account form-login-register" id="step-1">\n<br><br>\n      <h2>Registrasi</h2>\n      <p>Silakan isi data berikut untuk mendaftarkan diri anda</p>\n\n      <form class="form-horizontal clearfix row" name="registerForm" id="registerForm">\n         <div class="col-xs-6">\n            <div class="form-group">\n               <div class="col-xs-12">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="Nama Lengkap" class="form-control input-md" [(ngModel)]="register.nama_lengkap" name="nama_lengkap">\n               </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-12">\n               <span class="required">*</span>\n                    <input  type="email" placeholder="Email" class="form-control input-md" [(ngModel)]="register.alamat_email" name="alamat_email">\n              </div>\n            </div>\n            <!-- Password -->\n            <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                    <input  type="password" placeholder="Password" class="form-control input-md" [(ngModel)]="register.password" name="password">\n               </div>\n            </div>\n            <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                    <input  type="password" placeholder="Confirm Password" class="form-control input-md" [(ngModel)]="register.confirm_password" name="confirm_password">\n               </div>\n            </div>\n          <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="{{ nomor }}" class="form-control input-md" name="phone_number" id="phone_number" value="{{ nomor }}" disabled>\n               </div>\n            </div>\n          <div class="form-group">\n              <div class="col-md-12">\n              <span class="required">*</span>\n                  <select class="form-control input-md" name="jenis_kelamin" [(ngModel)]="register.jenis_kelamin" name="jenis_kelamin">\n                     <option value="0" disabled>Jenis Kelamin</option>\n                     <option value="1">Laki-laki</option>\n                     <option value="2">Perempuan</option>                  \n                  </select>\n              </div>\n          </div>\n          </div>\n\n          <div class="col-xs-6">\n\n            <div class="form-group">\n              <div class="col-xs-4">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="Tempat Lahir" class="form-control input-md" [(ngModel)]="register.tempat_lahir" name="tempat_lahir">\n              </div>\n              <div class="col-xs-8">\n               <span class="required">*</span>\n                  <input  type="text" placeholder="Tanggal Lahir " name="tanggal_lahir" class="form-control input-md datepicker" id="tanggal_lahir" [(ngModel)]="register.tanggal_lahir">\n               </div>\n            </div>\n\n            <div class="form-group">\n               <div class="col-xs-12">\n               <span class="required">*</span>\n                    <textarea  type="text" placeholder="Alamat" class="form-control input-md" [(ngModel)]="register.alamat" name="alamat">\n                    </textarea>\n               </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-12">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="Kode Pos" class="form-control input-md" [(ngModel)]="register.kode_pos" name="kode_pos" id="kode_pos">\n              </div>\n            </div>\n             <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                  <select class="form-control input-md" name="status_rumah" [(ngModel)]="register.status_rumah" name="status_rumah">\n                     <option value="0" disabled>Status Rumah</option>\n                     <option value="1">Pribadi</option>\n                     <option value="2">Kontrak</option>                  \n                  </select>\n               </div>\n            </div>            \n          </div>\n\n\n      </form>\n         <div class="col-xs-12">\n            <!-- Button -->\n            <div class="form-group">\n               <div class="col-md-6 col-center">\n                  <button class="btn btn-default" (click)="cancelRegister()">Batal</button>\n                  <button type="submit" class="btn btn-red" (click)="sendRegister(register)">Daftar</button>\n               </div>\n            </div>\n         </div>\n</div>\n\n\n'}});