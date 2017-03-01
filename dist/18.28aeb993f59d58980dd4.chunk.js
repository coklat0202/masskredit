webpackJsonp([18],{700:function(n,t,a){"use strict";var e=a(0),i=a(87),s=a(50),o=function(){function DetailComponent(n,t,a){this.http=n,this.router=t,this.activatedRoute=a,this.headers=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.invest_id="",this.data_detail_invest={access_token:this.access_token,loan_id:""},this.data={},this.loan={access_token:this.access_token,invest_id:null,loan_amount:null,password:null},this.dataAmount={},this.dataRestAmount={},this.dataDetailInvest=0,this.dataDetailListInvest=0,this.detailInvestUrl="https://masscredit-api.stagingapps.net/user/loan/detail"}return DetailComponent.prototype.ngOnInit=function(){var n=this;this.activatedRoute.params.subscribe(function(t){var a=t.id;n.loan.invest_id=a,n.data_detail_invest.loan_id=a});this.getDetailInvest(),jQuery("#loan_amount").mask("000000000000")},DetailComponent.prototype.cancelDetailInvest=function(){this.router.navigateByUrl("/dashboard/other-user-action/invest")},DetailComponent.prototype.getDetailInvest=function(){var n=this;this.http.post(this.detailInvestUrl,this.data_detail_invest,this.options).map(function(n){return n.json()}).subscribe(function(t){n.data=t.data,n.dataAmount=t.data.amount,n.dataRestAmount=t.data.sisa,n.delimiterAmount(n.dataAmount)})},DetailComponent.prototype.makeLoan=function(n){this.dataDetailInvest=1},DetailComponent.prototype.postLoan=function(){var n=this;this.http.post("https://masscredit-api.stagingapps.net/other-user/loan/new",this.loan,this.options).map(function(n){return n.json()}).subscribe(function(t){n.data=t.data,n.dataDetailInvest=0,alert("Peminjaman berhasil, harap menunggu konfirmasi investor"),n.router.navigateByUrl("/dashboard/other-user-action/invest")},function(t){var a=JSON.parse(t._body),e=a.meta.message;a.meta.code;return"unauthorized"==e?(alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out")):("Anda harus mempunyai jaminan untuk melakukan pinjaman."==e&&(alert("Anda harus mempunyai jaminan untuk melakukan pinjaman"),n.dataDetailInvest=1),"Jumlah yang anda masukan melebihi jumlah invest."==e&&(alert("Jumlah pinjaman melebihi jumlah investasi"),n.dataDetailInvest=1),void("Password salah!"==e&&(n.dataDetailInvest=1,alert("Password salah!"))))})},DetailComponent.prototype.delimiterAmount=function(n){try{var t=!1,a=n.toString();a<0&&(t=!0),a=a.replace(".",""),a=a.replace("-","");for(var e="",i=a.length,s=0,o=i;o>0;o--)s+=1,e=s%3==1&&1!=s?a.substr(o-1,1)+"."+e:a.substr(o-1,1)+e;t&&(e="-"+e);var l="Rp.";this.dataAmount=l.concat(e)}finally{this.delimiterRestAmount(this.dataRestAmount)}},DetailComponent.prototype.delimiterRestAmount=function(n){try{var t=!1,a=n.toString();a<0&&(t=!0),a=a.replace(".",""),a=a.replace("-","");for(var e="",i=a.length,s=0,o=i;o>0;o--)s+=1,e=s%3==1&&1!=s?a.substr(o-1,1)+"."+e:a.substr(o-1,1)+e;t&&(e="-"+e);var l="Rp.";this.dataRestAmount=l.concat(e)}finally{return this.dataDetailListInvest=1,!0}},DetailComponent=__decorate([e.Component({selector:"detail",template:a(938)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.Http&&i.Http)&&n||Object,"function"==typeof(t="undefined"!=typeof s.Router&&s.Router)&&t||Object,"function"==typeof(o="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&o||Object])],DetailComponent);var n,t,o}();t.DetailComponent=o},797:function(n,t,a){"use strict";var e=a(0),i=a(50),s=a(87),o=a(153),l=a(72),d=a(700),r=a(798);t.routes=[{path:"",component:d.DetailComponent}];var c=function(){function DetailModule(){}return DetailModule.routes=t.routes,DetailModule=__decorate([e.NgModule({declarations:[d.DetailComponent,r.VerifyComponent],imports:[s.HttpModule,o.FormsModule,l.CommonModule,i.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],DetailModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=c},798:function(n,t,a){"use strict";function __export(n){for(var a in n)t.hasOwnProperty(a)||(t[a]=n[a])}__export(a(799))},799:function(n,t,a){"use strict";var e=a(0),i=a(50),s=a(700),o=function(){function VerifyComponent(n,t){this.detail=n,this.router=t,this.invest=this.detail.loan}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#confirmInvestForm").validate({rules:{password:{required:!0}}})},VerifyComponent.prototype.cancelConfirmInvest=function(){this.router.navigateByUrl("/dashboard/other-user-action/invest")},VerifyComponent.prototype.confirmInvest=function(){jQuery("#confirmInvestForm").valid()?(this.detail.dataDetailInvest=3,this.detail.postLoan()):alert("Harap masukan password")},VerifyComponent=__decorate([e.Component({selector:"verify",template:' \n\t\t<form name="confirmInvestForm" id="confirmInvestForm">\n\t    <div class="form-group">\n        <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">\n\t    </div>\n  \t</form>\n\t    <div class="form-group">\n          <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>\n          <button class="btn btn-red" (click)="confirmInvest(invest)"style="background-color: #e74c3c;">\n          \t<font style="color:white">Verifikasi</font>\n          </button> \n\t    </div>\n  '}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.DetailComponent&&s.DetailComponent)&&n||Object,"function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object])],VerifyComponent);var n,t}();t.VerifyComponent=o},938:function(n,t){n.exports='<section class="content">\n<div class="row" *ngIf="dataDetailListInvest == 1">\n<div class="col-md-4">\n  <div class="box box-solid radius-10" style="border: 2px">\n    <div align="center">\n      <label><h2 style="font-size: 24px;color: orange;">Investasi</h2></label>\n    </div>\n    <div class="form-group">\n    <br>\n    <img src="{{ data.images }}" alt="Foto Investasi" class="thumbnail" width="250px" height="250px">\n    </div>\n  </div>\n  <div class="box box-solid radius-10">\n    <div align="center">\n      <label><h2 style="font-size: 24px;color: orange;">Form Pinjaman</h2></label>\n    </div>\n<!--         <div class="form-group">\n    <br>\n     <select class="form-control input-md" name="type" id="type">\n        <option value="0" disabled>Pilih Jaminan</option>\n     </select>\n   </div> -->\n    <div *ngIf="dataDetailInvest == 0">\n    <div class="form-group">\n      <input type="text" placeholder="Jumlah Pinjaman" class="form-control input-md" name="loan_amount" id="loan_amount" value="" [(ngModel)]="loan.loan_amount">\n    </div>\n    <div class="form-group">\n      <button class="btn btn-default" (click)="cancelDetailInvest()">Kembali</button>\n      <button class="btn btn-red" (click)="makeLoan(loan)" style="background-color: #e74c3c;"><font style="color:white">Pinjam Sekarang!</font></button>\n    </div>\n    </div>\n    <!-- component password -->\n    <verify *ngIf="dataDetailInvest == 1"></verify>\n    <div align="center" *ngIf="dataDetailInvest == 3"> \n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n      <span class="sr-only">Loading...</span>\n    </div>\n  </div>\n</div>\n<div class="col-md-7">\n  <div class="box box-solid radius-10">\n  <div class="box-body">\n  <div align="center">\n   <label><h2 style="font-size: 24px;color: orange;">Detail Investasi</h2></label>\n  </div>\n  <br>\n  <div class="col-md-12 clearfix"> \n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Nama Investasi</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Nama Investasi" class="form-control input-md" name="invest_name" id="invest_name" value="{{ data.loan_name }}" disabled>\n    </div>\n </div>\n <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Jumlah Investasi</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Jumlah Investasi" class="form-control input-md" name="amount" id="amount" value="{{ dataAmount }}" disabled>\n    </div>\n </div>\n <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Sisa Investasi</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Sisa Investasi" class="form-control input-md" name="sisa" id="sisa" value="{{ dataRestAmount }}" disabled>\n    </div>\n </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n  <div class="form-group">\n     <div class="col-md-4 clearfix">\n       <label class="unit">Tipe Investasi</label>\n     </div>\n     <div class="col-md-7 clearfix">\n      <input type="text" placeholder="Tipe Invest" class="form-control input-md" name="invest_name" id="invest_name" value="{{ data.tipe }}" disabled>\n     </div>\n  </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n <div class="form-group">\n   <div class="col-md-4 clearfix">\n     <label class="unit">Deskipsi</label>\n   </div>\n   <div class="col-md-7 clearfix">\n     <textarea type="text" placeholder="Description" class="form-control input-md" name="description" id="description" value="{{ data.collateral_value }}" disabled></textarea>\n    </div>\n </div>\n  <div class="form-group">\n  <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Batas Penawaran</label>\n    </div>\n    <div class="col-md-7 clearfix">\n      <input  type="text" placeholder="Batas Akhir Penawaran" name="due_date" class="form-control input-md" id="due_date" value="" value="{{ data.due_date }}" disabled>\n    </div>\n  </div>\n  <div class="form-group">\n  <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n     <label class="unit">Bunga</label>\n    </div>\n    <div class="col-md-5 clearfix">\n     <input type="text" placeholder="Bunga" class="form-control input-md" name="interest" id="interest" value="{{ data.interest }}" disabled>\n    </div>\n     <label class="unit">%/Bulan</label>\n  </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n  <div class="form-group">\n    <div class="col-md-4 clearfix">\n      <label class="unit">Tenor</label>\n    </div>\n    <div class="col-md-5">\n     <!-- <div class="col-md-10 clearfix"> -->\n       <input type="text" placeholder="Tenor" class="form-control input-md" name="tenor" id="tenor" value="{{ data.tenor }}" disabled>\n     <!-- </div> -->\n    </div>\n    <label class="unit">Bulan</label>\n  </div>\n  <div class="form-group">\n    <!-- null -->\n  </div>\n </div>\n  </div>\n  </div>\n</div>\n</div>\n<div align="center" *ngIf="dataDetailListInvest == 0"> \n  <br><br><br><br><br>\n  <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n  <span class="sr-only">Loading...</span>\n</div>\n</section>\n           <!-- </form>\n         </div>\n       </div>\n       <div class="form-group">\n          <div class="col-md-6 col-center">\n            <button class="btn btn-red" (click)="backFund()">Kembali</button>\n          </div>\n       </div> -->'}});