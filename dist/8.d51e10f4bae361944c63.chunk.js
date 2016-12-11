webpackJsonp([8],{691:function(e,n,t){"use strict";var o=t(0),i=t(153),a=t(86),s=function(){function LoginService(e,n){this.http=e,this.router=n,this.headers=new i.Headers({"Content-Type":"application/json"}),this.loggedinUrl="https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/login",this.logoutUrl="https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/logout"}return LoginService.prototype.loggedin=function(e,n){var t={email:e,password:n};return this.http.post(this.loggedinUrl,t,this.headers)},LoginService.prototype.logout=function(){var e=this,n=localStorage.getItem("access_token");return this.http.post("https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/logout",n).subscribe(function(n){var t=n.json();return console.log(t.meta.code,t.meta.message),"200"==t.meta.code?(localStorage.removeItem("access_token"),e.router.navigateByUrl("/")):e.router.navigateByUrl("dashboard")})},LoginService=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Http&&i.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof a.Router&&a.Router)&&n||Object])],LoginService);var e,n}();n.LoginService=s},699:function(e,n,t){"use strict";var o=t(0),i=t(86),a=t(153),s=t(154),r=t(405),c=t(700);n.routes=[{path:"",component:c.LoginComponent}];var l=function(){function LoginModule(){this.routes=n.routes}return LoginModule=__decorate([o.NgModule({declarations:[c.LoginComponent],imports:[a.HttpModule,s.FormsModule,i.RouterModule.forChild(n.routes)],providers:[r.LocalStorageService]}),__metadata("design:paramtypes",[])],LoginModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},700:function(e,n,t){"use strict";var o=t(0),i=t(691),a=t(153),s=t(86),r=function(){function LoginComponent(e,n,t){this.http=e,this.loginService=n,this.router=t,this.user={username:"",password:""}}return LoginComponent.prototype.login=function(e){var n=this,t=new a.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),o=new a.RequestOptions({headers:t});console.log("Authentication user"),this.http.post("http://masscredit-api.stagingapps.net/user/credential/login",e,o).subscribe(function(e){var e=e.json();return console.log(e),localStorage.setItem("access_token",JSON.stringify(e.data.access_token)),"200"==e.meta.code?n.router.navigateByUrl("dashboard"):n.router.navigateByUrl("/")})},LoginComponent=__decorate([o.Component({selector:"login",template:t(751),providers:[i.LoginService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.Http&&a.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof i.LoginService&&i.LoginService)&&n||Object,"function"==typeof(r="undefined"!=typeof s.Router&&s.Router)&&r||Object])],LoginComponent);var e,n,r}();n.LoginComponent=r},751:function(e,n){e.exports='<div class="container">\n  <div class="form-account form-login-register" id="login">\n  <br>\n  <br>\n    <h2>Login</h2>\n    <p>Silakan isi data berikut untuk masuk ke aplikasi</p>\n    <form class="form-horizontal clearfix row">\n      <div class="col-md-6">\n        <fieldset>\n          <div class="form-box">\n\n            <!-- Text input-->\n            <div class="form-group">\n              <div class="col-md-12">\n                <input type="text" name="username" class="form-control input-md" [(ngModel)]="user.username" placeholder="No Handphone">\n              </div>\n            </div>\n            <!-- Password input-->\n            <div class="form-group">\n              <div class="col-md-12" >\n                <input type="password" name="password" class="form-control input-md" [(ngModel)]="user.password" placeholder="Password">\n              </div>\n            </div>\n            <!-- Multiple Checkboxes (inline) -->\n            <div class="form-group no-margin-left no-margin-right clearfix white-borderbottom">\n              <div class="pull-left">\n                <label class="checkbox-inline" for="login_options-0">\n                <input type="checkbox" name="login_options" id="login_options-0" value="1">Selalu Log in</label>\n              </div>\n              <div class="pull-right">\n                <label class="checkbox-inline" for="">\n                <a href="#"><i class="fa fa-lock"></i> Lupa Password?</a>\n                </label>\n              </div>\n            </div>\n            <!-- Button -->\n            <div class="form-group">\n              <div class="col-md-12">\n                <button type="button" (click)="login(user)" id="singlebutton" name="singlebutton" class="btn btn-red btn-block">Log in</button>\n              </div>\n            </div>\n            \n          </div>\n        </fieldset>\n      </div>\n      <div class="col-md-6">\n        <div class="form-group daftar-via">\n          <div class="col-md-12">\n            <p class="text-center">\n              Anda belum memiliki akun silakan daftar terlebih dahulu\n            </p>\n          </div>\n          <div class="col-md-12">\n            <a href="#/auth/register" class="btn btn-akun">DAFTAR Akun</a>\n            <span>Or</span>\n            <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> DAFTAR VIA FACEBOOK</a>\n            <a href="#" class="btn btn-twitter"><i class="fa fa-twitter"></i>  DAFTAR VIA EMAIL</a>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>'}});