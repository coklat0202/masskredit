webpackJsonp([9],{704:function(t,e,n){"use strict";var a=n(0),o=n(87),s=n(50),i=n(705),r=function(){function DetailComponent(t,e,n,a){var s=this;this.http=t,this.router=e,this.activatedRoute=n,this.detailService=a,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.data_history_payment={access_token:this.access_token,invest_id:null,borrower_id:null,page:1,limit:10},this.data={},this.dataSalary={},this.dataBorrowerAmount={},this.dataPayment=[],this.listInvestorUrl="https://masscredit-api.stagingapps.net/user/investor/getlist",this.data_list_investor={access_token:this.access_token,loan_id:""},this.dataInvestor=[],this.dataArrayNull=0,this.detailLoanUrl="https://masscredit-api.stagingapps.net/user/investment/detail",this.data_detail_invest={access_token:this.access_token,invest_id:""},this.dataDetailListMyInvest=0,this.dataAmount={},this.loaderBorrowerApproved=0,this.getDetailBorrower={access_token:this.access_token,borrower_id:null,invest_id:null},this.dataDetailBorrower={},this.showPart="false",a.Part$.subscribe(function(t){s.showPart="false"})}return DetailComponent.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(e){var n=e.id;t.data_detail_invest.invest_id=n,t.data_list_investor.loan_id=n,t.data_history_payment.invest_id=n});this.getListInvestor(),this.getDetailMyLoan()},DetailComponent.prototype.ngDoCheck=function(){1==this.statusChanges&&this.getListInvestor()},DetailComponent.prototype.statusInvestor=function(t){this.statusChanges=t},DetailComponent.prototype.getListInvestor=function(){var t=this;this.http.post(this.listInvestorUrl,this.data_list_investor,this.options).map(function(t){return t.json()}).subscribe(function(e){""==e.data.investor&&(t.dataArrayNull=1),1==t.statusChanges&&(t.statusChanges=null),t.dataInvestor=e.data.investor;var n=e.meta.code;if(200==n)for(var a=0;a<t.dataInvestor.length;a++){var o=t.dataInvestor[a],s=o.invest_amount,i=!1,r=s.toString();r<0&&(i=!0),r=r.replace(".",""),r=r.replace("-","");for(var d="",l=r.length,p=0,c=l;c>0;c--)p+=1,d=p%3==1&&1!=p?r.substr(c-1,1)+"."+d:r.substr(c-1,1)+d;i&&(d="-"+d);var v="Rp.";o.loan_amount=v.concat(d)}else alert("Gagal get list Investor")},function(e){var n=JSON.parse(e._body),a=n.meta.message;n.meta.code;if("unauthorized"==a)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.getDetailMyLoan=function(){var t=this;this.http.post(this.detailLoanUrl,this.data_detail_invest,this.options).map(function(t){return t.json()}).subscribe(function(e){var n="assets/img/default_image.jpg";""==e.data.images&&(e.data.images=n),t.data=e.data;var a=(e.meta.code,e.data.amount),o=!1,s=a.toString();s<0&&(o=!0),s=s.replace(".",""),s=s.replace("-","");for(var i="",r=s.length,d=0,l=r;l>0;l--)d+=1,i=d%3==1&&1!=d?s.substr(l-1,1)+"."+i:s.substr(l-1,1)+i;o&&(i="-"+i);var p="Rp.";t.dataAmount=p.concat(i),t.dataDetailListMyInvest=1},function(e){var n=JSON.parse(e._body),a=n.meta.message;n.meta.code;if("unauthorized"==a)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.cancelDetailInvest=function(){this.router.navigateByUrl("/dashboard/user-action/user-invest")},DetailComponent.prototype.showDetailInvestorApproved=function(t,e){this.router.navigate(["/dashboard/user-action/user-loan/detail/",t,"loan-approved",e])},DetailComponent.prototype.showDetailInvestorNotApproved=function(t,e){var n="true";this.statusPart="true",this.showPart=n,this.loanId=t,this.investId=e},DetailComponent.prototype.onHide2=function(t){this.showPart=t},DetailComponent=__decorate([a.Component({selector:"detail",template:n(967),providers:[i.DetailService]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object,"function"==typeof(r="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&r||Object,"function"==typeof(d="undefined"!=typeof i.DetailService&&i.DetailService)&&d||Object])],DetailComponent);var t,e,r,d}();e.DetailComponent=r},705:function(t,e,n){"use strict";var a=n(0),o=n(73),s=function(){function DetailService(){this.PartFormParentSource=new o.Subject,this.PartFormChildSource=new o.Subject,this.Part$=this.PartFormParentSource.asObservable(),this.Part2$=this.PartFormChildSource.asObservable()}return DetailService.prototype.sendChild=function(t){this.PartFormParentSource.next(t)},DetailService.prototype.sendParent=function(t){this.PartFormChildSource.next(t)},DetailService=__decorate([a.Injectable(),__metadata("design:paramtypes",[])],DetailService)}();e.DetailService=s},708:function(t,e,n){"use strict";function __export(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}__export(n(874))},861:function(t,e,n){"use strict";var a=n(0),o=n(50),s=n(87),i=n(153),r=n(72),d=n(704),l=n(873),p=n(708),c=n(876);e.routes=[{path:"",component:d.DetailComponent},{path:"loan-approved/:investorId",loadChildren:function(){return n.e(6).then(n.bind(null,862)).then(function(t){return t.default})}}];var v=function(){function DetailModule(){}return DetailModule.routes=e.routes,DetailModule=__decorate([a.NgModule({declarations:[d.DetailComponent,l.PartComponent,p.LoanNotApprovedComponent,c.VerifyComponent],imports:[s.HttpModule,i.FormsModule,o.RouterModule.forChild(e.routes),r.CommonModule],providers:[]}),__metadata("design:paramtypes",[])],DetailModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=v},873:function(t,e,n){"use strict";function __export(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}__export(n(875))},874:function(t,e,n){"use strict";var a=n(0),o=n(87),s=n(50),i=n(704),r=n(705),d=function(){function LoanNotApprovedComponent(t,e,n,s,i){this.http=t,this.router=e,this.activatedRoute=n,this.detail=s,this.detailService=i,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataInvestor={access_token:this.access_token,investor_id:null,loan_id:null},this.dataDetailInvestor={},this.loaderDetailInvestor=0,this.statusInvestor1=new a.EventEmitter,this.onHide=new a.EventEmitter,this.detailInvestorUrl="https://masscredit-api.stagingapps.net/user/investor/detail",this.dataInvestorAmount={},this.formConfirm=0,this.otpUrl="https://masscredit-api.stagingapps.net/user/loan/approval-otp",this.dataConfirm=0,this.otp={access_token:this.access_token},this.postApproveUrl="https://masscredit-api.stagingapps.net/user/investor/approval",this.dataApprove={access_token:this.access_token,investor_id:null,loan_id:null,approval_status:null,password:null,otp:null}}return LoanNotApprovedComponent.prototype.ngOnInit=function(){jQuery("#FormApprove").modal({backdrop:"static",keyboard:!1}),void 0!=this.loanId&&void 0!=this.investId&&(this.dataApprove.loan_id=this.investId,this.dataApprove.investor_id=this.loanId,this.dataInvestor.loan_id=this.investId,this.dataInvestor.investor_id=this.loanId,null!=this.dataInvestor.investor_id&&null!=this.dataInvestor.loan_id&&this.getDetailInvestor())},LoanNotApprovedComponent.prototype.hideDetailInvestor=function(t){jQuery("#FormApprove").modal("toggle"),this.onHide.emit(t)},LoanNotApprovedComponent.prototype.showLoader=function(t){this.loaderDetailInvestor=t},LoanNotApprovedComponent.prototype.getDetailInvestor=function(){var t=this;this.http.post(this.detailInvestorUrl,this.dataInvestor,this.options).map(function(t){return t.json()}).subscribe(function(e){var n=(e.meta.code,e.data.amount);t.dataDetailInvestor=e.data,t.delimiterAmount(n)},function(e){var n=JSON.parse(e._body),a=n.meta.message;n.meta.code;if("unauthorized"==a)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},LoanNotApprovedComponent.prototype.delimiterAmount=function(t){try{var e=!1,n=t.toString();n<0&&(e=!0),n=n.replace(".",""),n=n.replace("-","");for(var a="",o=n.length,s=0,i=o;i>0;i--)s+=1,a=s%3==1&&1!=s?n.substr(i-1,1)+"."+a:n.substr(i-1,1)+a;e&&(a="-"+a);var r="Rp.";this.dataInvestorAmount=r.concat(a)}finally{this.loaderDetailInvestor=1}},LoanNotApprovedComponent.prototype.approveInvest=function(){this.dataApprove.approval_status=1,this.loaderDetailInvestor=0,this.getOtp()},LoanNotApprovedComponent.prototype.rejectInvest=function(){this.dataApprove.approval_status=0,this.loaderDetailInvestor=0,this.getOtp()},LoanNotApprovedComponent.prototype.getOtp=function(){var t=this;this.http.post(this.otpUrl,this.otp,this.options).map(function(t){return t.json()}).subscribe(function(e){t.dataApprove.otp=e.data.otp,t.loaderDetailInvestor=2},function(t){var e=JSON.parse(t._body);e.meta.code,e.meta.message})},LoanNotApprovedComponent.prototype.sendDataApprove=function(){var t=this;this.http.post(this.postApproveUrl,this.dataApprove,this.options).map(function(t){return t.json()}).subscribe(function(e){e.meta.code;alert("Investasi berhasil"),jQuery("#FormApprove").modal("toggle"),t.onHide.emit("false"),t.statusInvestor1.emit(1)},function(e){var n=JSON.parse(e._body),a=(n.meta.code,n.meta.message);"Password salah!"==a&&(alert("Password salah!"),t.loaderDetailInvestor=2),"Verifikasi salah."==a&&(alert("Verifikasi salah."),t.loaderDetailInvestor=2)})},__decorate([a.Input(),__metadata("design:type",String)],LoanNotApprovedComponent.prototype,"statusPart",void 0),__decorate([a.Input(),__metadata("design:type",String)],LoanNotApprovedComponent.prototype,"loanId",void 0),__decorate([a.Input(),__metadata("design:type",String)],LoanNotApprovedComponent.prototype,"investId",void 0),__decorate([a.Output(),__metadata("design:type",Object)],LoanNotApprovedComponent.prototype,"statusInvestor1",void 0),__decorate([a.Output(),__metadata("design:type",Object)],LoanNotApprovedComponent.prototype,"onHide",void 0),LoanNotApprovedComponent=__decorate([a.Component({selector:"loan-not-approved",template:n(973),providers:[r.DetailService]}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object,"function"==typeof(d="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&d||Object,"function"==typeof(l="undefined"!=typeof i.DetailComponent&&i.DetailComponent)&&l||Object,"function"==typeof(p="undefined"!=typeof r.DetailService&&r.DetailService)&&p||Object])],LoanNotApprovedComponent);var t,e,d,l,p}();e.LoanNotApprovedComponent=d},875:function(t,e,n){"use strict";var a=n(0),o=function(){function PartComponent(){this.onHide2=new a.EventEmitter,this.statusInvestor=new a.EventEmitter}return PartComponent.prototype.onHide=function(t){this.onHide2.emit(t)},PartComponent.prototype.statusInvestor1=function(t){this.statusInvestor.emit(t)},__decorate([a.Input(),__metadata("design:type",String)],PartComponent.prototype,"statusPart",void 0),__decorate([a.Input(),__metadata("design:type",String)],PartComponent.prototype,"loanId",void 0),__decorate([a.Input(),__metadata("design:type",String)],PartComponent.prototype,"investId",void 0),__decorate([a.Output(),__metadata("design:type",Object)],PartComponent.prototype,"onHide2",void 0),__decorate([a.Output(),__metadata("design:type",Object)],PartComponent.prototype,"statusInvestor",void 0),PartComponent=__decorate([a.Component({selector:"part",template:'<loan-not-approved  [statusPart]="statusPart" [loanId]="loanId" [investId]="investId" (onHide)="onHide($event)" (statusInvestor1)="statusInvestor1($event)"></loan-not-approved>'}),__metadata("design:paramtypes",[])],PartComponent)}();e.PartComponent=o},876:function(t,e,n){"use strict";function __export(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}__export(n(877))},877:function(t,e,n){"use strict";var a=n(0),o=n(50),s=n(708),i=function(){function VerifyComponent(t,e){this.dataApprove=t,this.router=e,this.invest=this.dataApprove.dataApprove,this.approvalStatus=this.dataApprove.dataApprove.approval_status,this.hideDetailInvestor=new a.EventEmitter,this.showLoader=new a.EventEmitter}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#modalFormConfirm").modal({backdrop:"static",keyboard:!1}),jQuery("#confirmInvestForm").validate({rules:{password:{required:!0},otp:{required:!0}}})},VerifyComponent.prototype.cancelConfirmInvest=function(t){this.hideDetailInvestor.emit(t)},VerifyComponent.prototype.submitConfirmInvest=function(t){jQuery("#confirmInvestForm").valid()?(this.showLoader.emit(0),1==this.approvalStatus?this.dataApprove.sendDataApprove():this.dataApprove.sendDataApprove()):alert("Data tidak valid")},__decorate([a.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"hideDetailInvestor",void 0),__decorate([a.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"showLoader",void 0),VerifyComponent=__decorate([a.Component({selector:"verify",template:n(974)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof s.LoanNotApprovedComponent&&s.LoanNotApprovedComponent)&&t||Object,"function"==typeof(e="undefined"!=typeof o.Router&&o.Router)&&e||Object])],VerifyComponent);var t,e}();e.VerifyComponent=i},967:function(t,e){t.exports='<div class="box-header" align="center">\n  <h2 class="box-title">Detail Pinjaman</h2>\n</div>\n<div class="box-body">\n  <div  *ngIf="dataDetailListMyInvest == 0">\n  <div class="row">\n    <div align="center"> \n      <br><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n      <span class="sr-only">Loading...</span>\n    </div>\n  </div>\n  </div>\n  <div  *ngIf="dataDetailListMyInvest == 1">\n    <div class="row">\n      <div class="col-md-4">\n      <div class="box box-solid radius-10" style="border: 100px">\n        <div align="center">\n          <label><h2 style="font-size: 24px;color: orange;">Pinjaman</h2></label>\n        </div>\n        <div class="form-group">\n          <br><img src="{{ data.images }}" alt="Foto Pinjaman" class="thumbnail" width="250px" height="250px">\n        </div>\n        <div class="form-group">\n          <button class="btn btn-default" (click)="cancelDetailInvest()">Kembali</button>\n        </div>\n      </div>\n      </div>\n      <div class="col-md-7">\n      <div class="box box-solid radius-10">\n        <div class="box-body">\n          <div align="center">\n           <label><h2 style="font-size: 24px;color: orange;">Detail Pinjaman</h2></label>\n          </div>\n          <br>\n          <div class="col-md-12 clearfix">\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Nama Pinjaman</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <input type="text" placeholder="Nama Pinjaman" class="form-control input-md" name="invest_name" id="invest_name" value="{{ data.invest_name }}" disabled>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Jumlah Pinjaman</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <input type="text" placeholder="Jumlah Pinjaman" class="form-control input-md" name="amount" id="amount" value="{{ dataAmount }}" disabled>\n            </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Tipe Pinjaman</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <input type="text" placeholder="Tipe Pinjaman" class="form-control input-md" name="tipe" id="tipe" value="{{ data.tipe }}" disabled>\n            </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Deskipsi</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <textarea type="text" placeholder="Description" class="form-control input-md" name="description" id="description" value="{{ data.collateral_value }}" disabled></textarea>\n            </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Batas Penawaran</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <input  type="text" placeholder="Batas Akhir Penawaran" name="due_date" class="form-control input-md" id="due_date" value="{{ data.due_date }}" disabled>\n            </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Bunga</label>\n            </div>\n            <div class="col-md-5 clearfix">\n              <input type="text" placeholder="Bunga" class="form-control input-md" name="interest" id="interest" value="{{ data.interest }}" disabled>\n            </div>\n            <label class="unit">%/Bulan</label>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Tenor</label>\n            </div>\n            <div class="col-md-5">\n              <input type="text" placeholder="Tenor" class="form-control input-md" name="tenor" id="tenor" value="{{ data.tenor }}" disabled>\n            </div>\n            <label class="unit">Bulan</label>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-12">\n      <label><h2 style="font-size: 30px;color: orange;">Daftar Investor</h2></label>\n      <div class="box-body data-tables table-responsive">\n      <table class="table table-hover" id="example2">\n        <thead>\n          <tr>\n            <th>No.</th>\n            <th>Nama Investor</th>\n            <th>Nominal Investor (Rp)</th>\n            <th>Status</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngIf="dataArrayNull == 1">\n            <td colspan="5" align="center">Data belum tersedia</td>\n          </tr>\n          <tr *ngFor="let dataInvestor of dataInvestor, let i =\'index\'">\n            <td>{{ i + 1 }}</td>\n            <td>{{ dataInvestor.investor_name }}</td>\n            <td>{{ dataInvestor.loan_amount }}</td>\n            <td>{{ dataInvestor.status }}</td>\n            <td *ngIf="dataInvestor.status == \'Tunda\'">\n              <button class="pull-right" (click)="showDetailInvestorNotApproved(dataInvestor.id, data.id)"><i aria-hidden="true" class="fa fa-search"></i></button>\n            </td>\n            <td *ngIf="dataInvestor.status == \'Setuju\' || dataInvestor.status == \'Tolak\'">\n              <button class="pull-right" (click)="showDetailInvestorApproved(data.id,dataInvestor.id)"><i aria-hidden="true" class="fa fa-search"></i></button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      </div>  \n      </div>\n      <!-- component show detail investor not approved -->\n      <part *ngIf="showPart == \'true\'" [statusPart]="statusPart" [loanId]="loanId" [investId]="investId" (onHide2)="onHide2($event)" (statusInvestor)="statusInvestor($event)"></part>\n    </div>\n  </div>\n</div>'},973:function(t,e){t.exports='<section class="content">\n<!-- Modal -->\n<div class="modal fade modal-lg" id="FormApprove" style="z-index:9000;">\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content-->\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" (click)="hideDetailInvestor(false)">&times;</button>\n      <h4 class="modal-title">Detail Investor</h4>\n    </div>\n    <div class="modal-body">\n    <div  *ngIf="loaderDetailInvestor == 0">\n    <div class="row">\n      <div align="center"> \n        <br><br><br><br><br>\n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf="loaderDetailInvestor == 1">\n    <div class="row">\n      <div class="col-md-4">\n        <img src="{{ dataDetailInvestor.investor_image }}" alt="Foto Investor">\n      </div>\n      <div class="col-md-8">\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Nama Lengkap</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="full_name" id="full_name" value="{{ dataDetailInvestor.investor_name }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">investor</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="investor" class="form-control input-md" name="investor" id="investor" value="{{ dataDetailInvestor.investor }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Credit</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Credit" class="form-control input-md" name="credit" id="credit" value="{{ dataDetailInvestor.fund_history }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Salary</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Salary" class="form-control input-md" name="salary" id="salary" value="{{ dataDetailInvestor.user_class }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Review</label>\n          </div>\n          <div class="col-xs-7">\n            <div class="unit">\n              <!-- <i class="fa fa-star-half-full full" area-hidden="true"></i> -->\n              <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n              <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n              <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n              <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px; color: orange"></i>\n              <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n              <!-- <span class="bs-glyphicons-list">\n              <span class="glyphicon glyphicon-star star-color star-full"></span>\n              <span class="glyphicon glyphicon-star star-color font half"></span>\n              </span> -->\n              <!-- <span>({{ avg_reviews }} %)</span> -->\n              <span>({{ dataDetailInvestor.avg_reviews }} %)</span>\n            </div>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Jumlah Investasi</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Jumlah Investasi" class="form-control input-md" name="nilai_pinjaman" id="nilai_pinjaman" value="{{ dataInvestorAmount }}" disabled>\n          </div>\n       </div> \n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n      <div class="form-group">\n        <div class="col-md-6 col-center">\n          <button class="btn btn-default" (click)="rejectInvest()">Tolak</button>\n          <button class="btn btn-red" (click)="approveInvest()">Setuju</button>\n        </div>\n      </div>\n      </div>\n    </div>\n    </div>\n    <verify *ngIf="loaderDetailInvestor == 2" (hideDetailInvestor)="hideDetailInvestor($event)" (showLoader)="showLoader($event)"></verify> \n    </div>\n  </div>\n  </div>\n</div>\n</section>'},974:function(t,e){t.exports='<div class="row">\n  <div class="col-md-12">\n  <div class="form-group" align="center">\n    <label>\n      <h2 style="font-size: 24px;color: orange;">Konfirmasi Investasi</h2>\n    </label>\n    <div class="row">\n      <div class="input-group" align="center">\n      <form name="confirmInvestForm" id="confirmInvestForm">\n        <div class="form-group">\n          <input type="text" name="otp" placeholder="Code OTP" class="form-control input-md" id="otp" [(ngModel)]="invest.otp" disabled>\n        </div>\n        <div class="form-group">\n          <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n  <div class="col-md-6 col-center">\n    <button class="btn btn-default" (click)="cancelConfirmInvest(false)">Batal</button>\n    <button class="btn btn-red" (click)="submitConfirmInvest(invest)">Konfirmasi</button>\n  </div>\n  </div>\n  </div>\n</div>'}});