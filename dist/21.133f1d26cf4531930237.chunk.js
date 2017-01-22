webpackJsonp([21],{717:function(e,n,o){"use strict";var t=o(0),r=o(62),i=o(109),a=o(154),s=o(73),d=o(718);n.routes=[{path:"",component:d.VerifyComponent}];var l=function(){function VerifyModule(){}return VerifyModule.routes=n.routes,VerifyModule=__decorate([t.NgModule({declarations:[d.VerifyComponent],imports:[i.HttpModule,a.FormsModule,a.ReactiveFormsModule,s.CommonModule,r.RouterModule.forChild(n.routes)],providers:[a.FormBuilder]}),__metadata("design:paramtypes",[])],VerifyModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},718:function(e,n,o){"use strict";var t=o(0),r=o(62),i=o(109),a=o(154),s=function(){function VerifyComponent(e,n,o){this.router=e,this.http=n,this.formBuilder=o,this.nomor={phone_number:""},this.code={nomor_handphone:""},this.verifyForm=this.formBuilder.group({phone_number:[null,a.Validators.compose([a.Validators.required])]})}return VerifyComponent.prototype.ngAfterViewInit=function(){jQuery(function(e){jQuery("#phone").mask("000-000-000000")}),jQuery("#verifyForm").validate({rules:{phone:{required:!0}}})},VerifyComponent.prototype.sendHandphone=function(e){var n=this;if(jQuery("#verifyForm").valid()){console.log("Data valid");var e;jQuery(e).unmask(),jQuery(function(e){});var o=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),t=new i.RequestOptions({headers:o});console.log("Sedang mengirim data...."),null==e?console.log("Gagal Verify"):this.http.post("http://masscredit-api.stagingapps.net/user/credential/getverificationcode",e,t).map(function(e){return e.json()}).subscribe(function(o){var t=JSON.stringify(e.phone_number),r=o.data.verification_code;console.log("Verify code :",r),alert(r),localStorage.setItem("verify_handphone",t),n.router.navigateByUrl("/auth/register/verify-code")},function(e){var n=JSON.parse(e._body),o=n.meta.message;"No Handphone sudah terdaftar"==o&&alert("Maaf no handphone telah terdaftar")}),console.log("This valid")}else console.log("Data doesn't valid")},VerifyComponent.prototype.sendVerify=function(e){},VerifyComponent=__decorate([t.Component({selector:"verify",template:o(841)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Router&&r.Router)&&e||Object,"function"==typeof(n="undefined"!=typeof i.Http&&i.Http)&&n||Object,"function"==typeof(s="undefined"!=typeof a.FormBuilder&&a.FormBuilder)&&s||Object])],VerifyComponent);var e,n,s}();n.VerifyComponent=s},841:function(e,n){e.exports='<div class="form-account form-login-register" id="register">\n  <br>\n  <br>\n      <h2>Registrasi</h2>\n  <p>Silakan masukan nomor handphone untuk tahap pertama pendaftaran</p>\n  <br>\n  <form class="form-horizontal clearfix row" id="verifyForm">\n     <div class="col-xs-12">\n        <div class="row">\n          <div align="center">\n              <div class="form-group" style="width:60%">\n                <div class="col-xs-2">\n                </div>\n                <div class="col-xs-6">\n                  <input  type="text" placeholder="087-872-98XX" class="form-control input-md" maxlength="15" minlength="9" id="phone" name="phone" [(ngModel)]="nomor.phone_number">\n                </div>\n                <div class="col-xs-2">\n                  <button  class="btn btn-red" (click)="sendHandphone(nomor)">\n                    Kirim\n                  </button>\n                </div>\n                <div class="col-xs-2">\n                </div>\n              </div>\n          </div>\n        </div>\n     </div>\n  </form>\n</div>\n\n'}});