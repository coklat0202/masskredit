webpackJsonp([12],{704:function(n,e,t){"use strict";var a=t(0),i=t(109),o=t(62),s=function(){function DetailComponent(n,e,t){this.http=n,this.router=e,this.activatedRoute=t,this.headers=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.invest_id="",this.data_detail_invest={access_token:this.access_token,loan_id:""},this.data={},this.loan={access_token:this.access_token,invest_id:null,loan_amount:null,password:null},this.dataDetailInvest=0,this.dataDetailListInvest=0}return DetailComponent.prototype.ngOnInit=function(){var n=this;this.activatedRoute.params.subscribe(function(e){var t=e.id;n.loan.invest_id=t,n.data_detail_invest.loan_id=t});this.getDetailInvest()},DetailComponent.prototype.cancelDetailInvest=function(){this.router.navigateByUrl("/dashboard/other-user-action/invest")},DetailComponent.prototype.getDetailInvest=function(){var n=this;this.http.post("http://masscredit-api.stagingapps.net/user/loan/detail",this.data_detail_invest,this.options).map(function(n){return n.json()}).subscribe(function(e){n.data=e.data,n.dataDetailListInvest=1})},DetailComponent.prototype.makeLoan=function(n){this.dataDetailInvest=1},DetailComponent.prototype.postLoan=function(){var n=this;this.http.post("http://masscredit-api.stagingapps.net/other-user/loan/new",this.loan,this.options).map(function(n){return n.json()}).subscribe(function(e){n.data=e.data,alert("Peminjaman berhasil, harap menunggu konfirmasi investor"),n.router.navigateByUrl("/dashboard/action/invest")},function(e){var t=JSON.parse(e._body),a=t.meta.message,i=t.meta.code;return"400"==i?(alert("Maaf saldo anda tidak mencukupi"),n.router.navigateByUrl("/dashboard/action/invest")):"unauthorized"==a?(alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out")):void 0})},DetailComponent=__decorate([a.Component({selector:"detail",template:t(916)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.Http&&i.Http)&&n||Object,"function"==typeof(e="undefined"!=typeof o.Router&&o.Router)&&e||Object,"function"==typeof(s="undefined"!=typeof o.ActivatedRoute&&o.ActivatedRoute)&&s||Object])],DetailComponent);var n,e,s}();e.DetailComponent=s},785:function(n,e,t){"use strict";var a=t(0),i=t(62),o=t(109),s=t(154),l=t(73),d=t(704),r=t(786);e.routes=[{path:"",component:d.DetailComponent}];var c=function(){function DetailModule(){}return DetailModule.routes=e.routes,DetailModule=__decorate([a.NgModule({declarations:[d.DetailComponent,r.VerifyComponent],imports:[o.HttpModule,s.FormsModule,l.CommonModule,i.RouterModule.forChild(e.routes)],providers:[]}),__metadata("design:paramtypes",[])],DetailModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=c},786:function(n,e,t){"use strict";function __export(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}__export(t(787))},787:function(n,e,t){"use strict";var a=t(0),i=t(62),o=t(704),s=function(){function VerifyComponent(n,e){this.detail=n,this.router=e,this.invest=this.detail.data_detail_invest}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#confirmInvestForm").validate({rules:{password:{required:!0}}})},VerifyComponent.prototype.cancelConfirmInvest=function(){this.router.navigateByUrl("/dashboard/other-user-action/invest")},VerifyComponent.prototype.confirmInvest=function(){jQuery("#confirmInvestForm").valid()?this.detail.postLoan():alert("Harap masukan password")},VerifyComponent=__decorate([a.Component({selector:"verify",template:' \n\t\t<form name="confirmInvestForm" id="confirmInvestForm">\n\t    <div class="form-group">\n        <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">\n\t    </div>\n  \t</form>\n\t    <div class="form-group">\n          <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>\n          <button class="btn btn-red" (click)="confirmInvest(invest)"style="background-color: #e74c3c;">\n          \t<font style="color:white">Verifikasi</font>\n          </button> \n\t    </div>\n  '}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.DetailComponent&&o.DetailComponent)&&n||Object,"function"==typeof(e="undefined"!=typeof i.Router&&i.Router)&&e||Object])],VerifyComponent);var n,e}();e.VerifyComponent=s},916:function(n,e){n.exports='<section class="content">\n<div class="row" *ngIf="dataDetailListInvest == 1">\n<div class="col-md-4">\n  <div class="box box-solid radius-10" style="border: 2px">\n    <div align="center">\n      <label><h2 style="font-size: 24px;color: orange;">Investor</h2></label>\n    </div>\n    <div class="form-group">\n    <br>\n    <img src="" alt="Foto Diri Investor" class="thumbnail" width="250px" height="250px">\n    </div>\n  </div>\n  <div class="box box-solid radius-10">\n    <div align="center">\n      <label><h2 style="font-size: 24px;color: orange;">Form Pinjaman</h2></label>\n    </div>\n<!--         <div class="form-group">\n    <br>\n     <select class="form-control input-md" name="type" id="type">\n        <option value="0" disabled>Pilih Jaminan</option>\n     </select>\n   </div> -->\n    <div *ngIf="dataDetailInvest == 0">\n    <div class="form-group">\n      <input type="text" placeholder="Jumlah Pinjaman" class="form-control input-md" name="loan_amount" id="loan_amount" value="" [(ngModel)]="loan.loan_amount">\n    </div>\n    <div class="form-group">\n      <button class="btn btn-default" (click)="cancelDetailInvest()">Kembali</button>\n      <button class="btn btn-red" (click)="makeLoan(loan)" style="background-color: #e74c3c;"><font style="color:white">Pinjam Sekarang!</font></button>\n    </div>\n    </div>\n    <!-- component password -->\n    <verify *ngIf="dataDetailInvest == 1"></verify>\n    \n  </div>\n</div>\n<div class="col-md-7">\n  <div class="box box-solid radius-10">\n  <div class="box-body">\n  <div align="center">\n   <label><h2 style="font-size: 24px;color: orange;">Detail Investasi</h2></label>\n  </div>\n  <br>\n  <div class="col-md-12 clearfix"> \n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Nama Investasi</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Nama Investasi" class="form-control input-md" name="invest_name" id="invest_name" value="{{ data.loan_name }}" disabled>\n    </div>\n </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n  <div class="form-group">\n     <div class="col-md-4 clearfix">\n       <label class="unit">Tipe Investasi</label>\n     </div>\n     <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Tipe Invest" class="form-control input-md" name="invest_name" id="invest_name" value="{{ data.tipe }}" disabled>\n     </div>\n  </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n <div class="form-group">\n   <div class="col-md-4 clearfix">\n     <label class="unit">Deskipsi</label>\n   </div>\n   <div class="col-md-7 clearfix">\n     <textarea type="text" placeholder="Description" class="form-control input-md" name="description" id="description" value="{{ data.collateral_value }}" disabled></textarea>\n    </div>\n </div>\n  <div class="form-group">\n  <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Batas Penawaran</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input  type="text" placeholder="Batas Akhir Penawaran" name="due_date" class="form-control input-md" id="due_date" value="" disabled>\n    </div>\n  </div>\n  <div class="form-group">\n  <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Bunga</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Bunga" class="form-control input-md" name="interest" id="interest" value="{{ data.interest }}" disabled>\n    </div>\n  </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Tenor</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Tenor" class="form-control input-md" name="tenor" id="tenor" value="{{ data.tenor }}" disabled>\n    </div>\n  </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Charge Fee</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Charge Fee" class="form-control input-md" name="charge_fee" id="charge_fee" value="{{ data.charge_fee }}" disabled>\n    </div>\n  </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Success Fee</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Success Fee" class="form-control input-md" name="success_fee" id="success_fee" value="{{ data.success_fee }}" disabled>\n    </div>\n  </div>\n </div>\n  <div class="col-md-12">\n    <div class="form-group">\n      <div align="center">\n        <label class="unit"><b>Foto Investasi</b></label>\n          <img src="{{ data.images }}" alt="Bukti Transfer" class="thumbnail" width="250px" height="250px">\n      </div>\n    </div>\n  </div>\n  </div>\n  </div>\n</div>\n</div>\n<div align="center" *ngIf="dataDetailListInvest == 0"> \n  <br><br><br><br><br>\n  <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n  <span class="sr-only">Loading...</span>\n</div>\n</section>\n           <!-- </form>\n         </div>\n       </div>\n       <div class="form-group">\n          <div class="col-md-6 col-center">\n            <button class="btn btn-red" (click)="backFund()">Kembali</button>\n          </div>\n       </div> -->'}});