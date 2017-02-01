webpackJsonp([11],{705:function(n,e,o){"use strict";var t=o(0),a=o(109),s=o(62),r=function(){function LoanNotBeenApprovedComponent(n,e,o){this.http=n,this.router=e,this.activatedRoute=o,this.headers=new a.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new a.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.data_borrower={access_token:this.access_token,borrower_id:""},this.dataDetailBorrower=0,this.data={},this.dataApprove={access_token:this.access_token,borrower_id:null,invest_id:null,approval_status:null,password:null},this.dataApproveBorrower=0}return LoanNotBeenApprovedComponent.prototype.ngOnInit=function(){var n=this;this.activatedRoute.params.subscribe(function(e){var o=e.id;n.data_borrower.borrower_id=o,n.dataApprove.borrower_id=o});this.http.post("https://masscredit-api.stagingapps.net/user/borrower/detail",this.data_borrower,this.options).map(function(n){return n.json()}).subscribe(function(e){n.data=e.data,n.dataApprove.invest_id=e.data.invest_id,n.dataDetailBorrower=1})},LoanNotBeenApprovedComponent.prototype.approveInvest=function(){this.dataApprove.approval_status=1,this.dataApproveBorrower=1},LoanNotBeenApprovedComponent.prototype.rejectInvest=function(){this.dataApprove.approval_status=0,this.dataApproveBorrower=1},LoanNotBeenApprovedComponent.prototype.sendDataApprove=function(){var n=this;console.log(this.dataApprove),this.http.post("https://masscredit-api.stagingapps.net/user/investment/approve",this.dataApprove,this.options).map(function(n){return n.json()}).subscribe(function(e){var o=e.meta.code;"200"==o&&(alert("Investasi berhasil"),n.router.navigateByUrl("/dashboard/user-action/user-invest"))},function(n){var e=JSON.parse(n._body),o=e.meta.code;"400"==o&&alert("Password anda salah")})},LoanNotBeenApprovedComponent=__decorate([t.Component({selector:"loan-not-been-approved",template:o(951)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.Http&&a.Http)&&n||Object,"function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object,"function"==typeof(r="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&r||Object])],LoanNotBeenApprovedComponent);var n,e,r}();e.LoanNotBeenApprovedComponent=r},857:function(n,e,o){"use strict";var t=o(0),a=o(62),s=o(109),r=o(154),i=o(73),d=o(705),l=o(858);e.routes=[{path:"",component:d.LoanNotBeenApprovedComponent}];var p=function(){function LoanNotBeenApprovedModule(){}return LoanNotBeenApprovedModule.routes=e.routes,LoanNotBeenApprovedModule=__decorate([t.NgModule({declarations:[d.LoanNotBeenApprovedComponent,l.VerifyComponent],imports:[s.HttpModule,r.FormsModule,i.CommonModule,a.RouterModule.forChild(e.routes)],providers:[]}),__metadata("design:paramtypes",[])],LoanNotBeenApprovedModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=p},858:function(n,e,o){"use strict";function __export(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}__export(o(859))},859:function(n,e,o){"use strict";var t=o(0),a=o(62),s=o(705),r=function(){function VerifyComponent(n,e){this.dataApprove=n,this.router=e,this.invest=this.dataApprove.dataApprove,this.approvalStatus=this.dataApprove.dataApprove.approval_status}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#confirmInvestForm").validate({rules:{password:{required:!0}}})},VerifyComponent.prototype.cancelConfirmInvest=function(){this.router.navigateByUrl("/dashboard/user-action/user-invest")},VerifyComponent.prototype.confirmInvest=function(){jQuery("#confirmInvestForm").valid()?1==this.approvalStatus?this.dataApprove.sendDataApprove():this.dataApprove.sendDataApprove():alert("Harap masukan password")},VerifyComponent=__decorate([t.Component({selector:"verify",template:'\n\t\t<form name="confirmInvestForm" id="confirmInvestForm">\n\t    <div class="form-group">\n        <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">\n\t    </div>\n  \t</form>\n\t    <div class="form-group">\n          <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>\n          <button class="btn btn-red" (click)="confirmInvest(invest)"style="background-color: #e74c3c;">\n          \t<font style="color:white">Verifikasi</font>\n          </button> \n\t    </div>\n  '}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.LoanNotBeenApprovedComponent&&s.LoanNotBeenApprovedComponent)&&n||Object,"function"==typeof(e="undefined"!=typeof a.Router&&a.Router)&&e||Object])],VerifyComponent);var n,e}();e.VerifyComponent=r},951:function(n,e){n.exports='<section class="content">\n<div *ngIf="dataDetailBorrower == 0">\n<div class="row">\n  <div align="center"> \n    <br><br><br><br><br>\n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n</div>\n</div>\n  <div *ngIf="dataApproveBorrower == 1">\n    <div class="row">\n        <div class="col-xs-12" align="center">\n          <div class="row" >\n            <label><h2 style="font-size: 24px;color: orange;">Konfirmasi Investasi</h2></label>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-xs-4">\n          </div>\n          <div class="col-xs-4" align="center">\n            <!-- component password -->\n            <verify></verify>\n          </div>\n          <div class="col-xs-4">\n          </div>\n        </div>\n    </div>\n  </div>\n<div *ngIf="dataDetailBorrower == 1">\n  <div *ngIf="dataApproveBorrower == 0">\n    <div class="col-xs-12" align="center">\n      <div class="row" >\n        <label><h2 style="font-size: 24px;color: orange;">Detail Peminjam</h2></label>\n      </div>\n    </div>\n    <div class="col-md-4">\n       <div class="row">\n          <div class="box box-solid radius-10" style="border: 2px">\n            <div class="form-group">\n                <img src="" alt="Foto Diri Peminjam" class="thumbnail" width="250px" height="250px">\n            </div>\n          </div>\n      </div>\n    </div>\n    <div class="col-md-7">\n      <div class="row">\n          <div class="box box-solid radius-10" style="border: 2px">\n            <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Nama Lengkap</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="full_name" id="full_name" value="{{ data.borrower_name }}" disabled>\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Borrower</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Borrower" class="form-control input-md" name="borrower" id="borrower" value="{{ data.borrower}}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Credit</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Credit" class="form-control input-md" name="credit" id="credit" value="{{ data.fund_history }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Salary</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Salary" class="form-control input-md" name="salary" id="salary" value="{{ data.amount }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Review</label>\n              </div>\n              <div class="col-xs-7">\n                <div class="unit">\n                    <!-- <i class="fa fa-star-half-full full" area-hidden="true"></i> -->\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px; color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <!-- <span class="bs-glyphicons-list">\n                    <span class="glyphicon glyphicon-star star-color star-full"></span>\n                    <span class="glyphicon glyphicon-star star-color font half"></span>\n                    </span> -->\n                    <span>({{ data.avg_reviews }} %)</span>\n                    <!-- <span>(12.000 user)</span> -->\n                </div>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Jumlah Pinjaman</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Nilai Pinjaman" class="form-control input-md" name="nilai_pinjaman" id="nilai_pinjaman" value="{{ data.borrower_amount }}" disabled>\n              </div>\n           </div>\n          </div>\n      </div>\n    </div>\n    <div class="col-md-12">\n       <div class="form-group">\n          <div class="col-md-6 col-center">\n            <button class="btn btn-default" (click)="rejectInvest()">Tolak</button>\n            <button class="btn btn-red" (click)="approveInvest()">Setuju</button>\n          </div>\n       </div>\n    </div>\n  </div>\n</div>\n</section>'}});