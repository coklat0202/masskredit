webpackJsonp([15],{766:function(e,a,t){"use strict";var n=t(0),o=t(767),r=t(109),i=t(62),s=function(){function CreateComponent(e,a,t){this.service=e,this.http=a,this.router=t,this.headers=new r.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new r.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.data_access_token={access_token:this.access_token},this.data={access_token:this.access_token,date:"",no_reference:"",nama_lengkap:"",bank_name:0,no_rekening:"",amount:""},this.banks=[]}return CreateComponent.prototype.ngOnInit=function(){var e=this;this.http.post("https://masscredit-api.stagingapps.net/user/credential/profile",this.data_access_token,this.options).map(function(e){return e.json()}).subscribe(function(a){e.data.nama_lengkap=a.data.profile.name,console.log(a)},function(a){var t=JSON.parse(a._body),n=t.meta.message;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),e.router.navigateByUrl("/dashboard/sign-out")}),jQuery(".datepicker").datepicker({format:"yyyy-mm-dd"}),jQuery("#createForm").validate({rules:{nama_lengkap:{required:!0},bank_name:{required:!0},no_rekening:{required:!0},amount:{required:!0},date:{required:!0}}}),jQuery(function(e){jQuery("#amount").mask("000000000000"),jQuery("#no_rekening").mask("000000000000000")}),this.http.post("https://masscredit-api.stagingapps.net/user/fund/no-reference",this.data,this.options).map(function(e){return e.json()}).subscribe(function(a){var t=(a.meta.code,a.meta.message,a.data.no_reference);e.data.no_reference=t},function(a){var t=JSON.parse(a._body),n=t.meta.message;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),e.router.navigateByUrl("/dashboard/sign-out")}),this.http.get("https://masscredit-api.stagingapps.net/master/bank",this.options).map(function(e){return e.json()}).subscribe(function(a){var t=(a.meta.code,a.meta.message,a.data.tipe_bank);e.banks=t,console.log(a)},function(a){var t=JSON.parse(a._body),n=t.meta.message;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),e.router.navigateByUrl("/dashboard/sign-out")});var a=(jQuery("#date").datepicker("setDate",new Date),jQuery("#date").val());this.data.date=a},CreateComponent.prototype.getBankName=function(e){this.data.bank_name=e,console.log(this.data)},CreateComponent.prototype.createWithdrawal=function(e){var a=this;jQuery("#createForm").valid()?(console.log(this.data),this.http.post("https://masscredit-api.stagingapps.net/user/withdrawal/add",this.data,this.options).map(function(e){return e.json()}).subscribe(function(e){var t=e.meta.code,n=e.meta.message,o=e.data.id,r=e.data.verification_code;localStorage.setItem("id_verification",o),localStorage.setItem("verification_code",r),console.log(t,n),console.log(e),alert("Silahkan konfirmasi penarikan dana anda"),a.router.navigateByUrl("/dashboard/fund/fund-withdrawal/confirm")},function(e){var t=JSON.parse(e._body),n=t.meta.message;return"unauthorized"==n?(alert("Maaf session anda telah habis silahkan login kembali"),a.router.navigateByUrl("/dashboard/sign-out")):void("Saldo anda tidak mencukupi."==n&&alert("Maaf saldo anda tidak mencukupi"))})):alert("Data tidak valid")},CreateComponent.prototype.cancelFund=function(){return this.router.navigateByUrl("/dashboard/fund")},CreateComponent=__decorate([n.Component({selector:"create",template:t(910),providers:[o.CreateService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.CreateService&&o.CreateService)&&e||Object,"function"==typeof(a="undefined"!=typeof r.Http&&r.Http)&&a||Object,"function"==typeof(s="undefined"!=typeof i.Router&&i.Router)&&s||Object])],CreateComponent);var e,a,s}();a.CreateComponent=s},767:function(e,a,t){"use strict";var n=t(0),o=(JSON.parse(localStorage.getItem("access_token")),function(){function CreateService(){}return CreateService=__decorate([n.Injectable(),__metadata("design:paramtypes",[])],CreateService)}());a.CreateService=o},768:function(e,a,t){"use strict";var n=t(0),o=t(62),r=t(109),i=t(154),s=t(73),d=t(766);a.routes=[{path:"",component:d.CreateComponent}];var c=function(){function CreateModule(){}return CreateModule.routes=a.routes,CreateModule=__decorate([n.NgModule({declarations:[d.CreateComponent],imports:[r.HttpModule,i.FormsModule,s.CommonModule,o.RouterModule.forChild(a.routes)],providers:[]}),__metadata("design:paramtypes",[])],CreateModule)}();Object.defineProperty(a,"__esModule",{value:!0}),a.default=c},910:function(e,a){e.exports='<section class="content">\n <div class="row">\n   <div class="col-md-12">\n     <div class="box bg-transparent">\n       <div class="box-header">\n         <h2 class="box-title pull-left">Tarik Dana</h2>\n       </div>\n       <div class="box-body">\n         <div class="form-login-register">\n           <form class="form-horizontal clearfix row" name="createForm" id="createForm">\n              <div class="col-md-12">\n                   <div class="form-group">\n                     <div class="col-md-10 clearfix">\n                       <input type="text" placeholder="Nominal Referensi" class="form-control input-md" name="no_reference" id="no_reference" [(ngModel)]="data.no_reference" disabled>\n                     </div>\n                   </div>\n                  <div class="form-group">\n                   <div class="col-md-10 clearfix">\n                     <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="nama_lengkap" id="nama_lengkap" [(ngModel)]="data.nama_lengkap" disabled>\n                   </div>\n                 </div>\n                  <div class="form-group">\n                    <div class="col-md-10 clearfix">\n                     <select class="form-control input-md" name="bank_name" id="bank_name" (change)="getBankName($event.target.value)" [(ngModel)]="data.bank_name">\n                          <option value="0" disabled>Bank</option>\n                          <option *ngFor="let bank of banks" [value]="bank.id_tipe_bank">\n                            {{ bank.desc_tipe_bank }}\n                          </option>\n                       </select>\n                    </div>\n                  </div>\n                   <div class="form-group">\n                     <div class="col-md-10 clearfix">\n                       <input type="text" placeholder="Nomor Rekening" class="form-control input-md" name="no_rekening" id="no_rekening" [(ngModel)]="data.no_rekening">\n                      </div>\n                   </div>\n                   <div class="form-group">\n                     <div class="col-md-12">\n                         <input  type="text" placeholder="Tanggal" name="date" class="form-control input-md datepicker" id="date" disabled>\n                     </div>\n                   </div>\n                    <div class="form-group">\n                    <div class="col-md-10 clearfix">\n                       <input type="text" placeholder="Nominal" class="form-control input-md" name="amount" id="amount" [(ngModel)]="data.amount">\n                    </div>\n                   </div>                   \n               <div class="col-md-12">\n               </div>\n                 <div class="form-group">\n                    <div class="col-md-6 col-center">\n                      <a href="#/dashboard/fund/fund-withdrawal" class="btn btn-default">Batal</a>\n                      <button class="btn btn-red" type="submit" (click)="createWithdrawal(data)">Simpan</button>\n                    </div>\n                 </div>\n              </div>\n           </form>\n         </div>\n       </div>\n    </div>\n   </div>\n </div>\n</section>'}});