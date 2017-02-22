webpackJsonp([26],{858:function(a,t,e){"use strict";var n=e(0),o=e(87),i=e(50),r=function(){function DetailComponent(a,t,e){this.http=a,this.router=t,this.activatedRoute=e,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.invest_id="",this.data_detail_invest={access_token:this.access_token,invest_id:""},this.data_history_payment={access_token:this.access_token,invest_id:"",borrower_id:"",page:1,limit:10},this.data={},this.dataSalary={},this.dataBorrowerAmount={},this.dataBorrower=[],this.dataDetailListMyInvest=0,this.dataAmount={},this.dataPayment=[],this.dataArrayNull=0,this.loaderBorrowerApproved=0,this.getDetailBorrower={access_token:this.access_token,borrower_id:null},this.dataDetailBorrower={},this.dataApprove={access_token:this.access_token,borrower_id:null,invest_id:null,approval_status:null,password:null,otp:null},this.formConfirm=0}return DetailComponent.prototype.ngOnInit=function(){var a=this;this.activatedRoute.params.subscribe(function(t){var e=t.id;a.data_detail_invest.invest_id=e,a.data_history_payment.invest_id=e});this.getListBorrower(),this.getDetailMyInvest()},DetailComponent.prototype.backFund=function(){this.router.navigateByUrl("/dashboard/fund")},DetailComponent.prototype.getListBorrower=function(){var a=this;this.http.post("https://masscredit-api.stagingapps.net/user/borrower/getlist",this.data_detail_invest,this.options).map(function(a){return a.json()}).subscribe(function(t){""==t.data.borrower&&(a.dataArrayNull=1),a.dataBorrower=t.data.borrower;var e=t.meta.code;if(200==e)for(var n=0;n<a.dataBorrower.length;n++){var o=a.dataBorrower[n],i=o.loan_amount,r=!1,s=i.toString();s<0&&(r=!0),s=s.replace(".",""),s=s.replace("-","");for(var l="",d=s.length,c=0,u=d;u>0;u--)c+=1,l=c%3==1&&1!=c?s.substr(u-1,1)+"."+l:s.substr(u-1,1)+l;r&&(l="-"+l);var p="Rp.";o.loan_amount=p.concat(l)}else alert("Gagal get list Borrower")},function(t){var e=JSON.parse(t._body),n=e.meta.message;e.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),a.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.getDetailMyInvest=function(){var a=this;this.http.post("https://masscredit-api.stagingapps.net/user/myinvestment/detail",this.data_detail_invest,this.options).map(function(a){return a.json()}).subscribe(function(t){console.log(t),a.data=t.data;var e=t.meta.code;if(200==e){var n=t.data.amount,o=!1,i=n.toString();i<0&&(o=!0),i=i.replace(".",""),i=i.replace("-","");for(var r="",s=i.length,l=0,d=s;d>0;d--)l+=1,r=l%3==1&&1!=l?i.substr(d-1,1)+"."+r:i.substr(d-1,1)+r;o&&(r="-"+r);var c="Rp.";a.dataAmount=c.concat(r),a.dataDetailListMyInvest=1}},function(t){var e=JSON.parse(t._body),n=e.meta.message;e.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),a.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.cancelDetailInvest=function(){this.router.navigateByUrl("/dashboard/user-action/user-invest")},DetailComponent.prototype.showForm=function(){jQuery("#formDetail").show()},DetailComponent.prototype.showDetailBorrowerApproved=function(a){var t=this;this.getDetailBorrower.borrower_id=a,this.getHistoryPayment(a),jQuery("#myModal").modal({backdrop:"static",keyboard:!1}),this.http.post("https://masscredit-api.stagingapps.net/user/borrower/detail",this.getDetailBorrower,this.options).map(function(a){return a.json()}).subscribe(function(a){var e=a.meta.code;200==e?(t.dataDetailBorrower=a.data,t.dataSalary=a.data.amount,t.dataBorrowerAmount=a.data.borrower_amount,t.delimiterSalary(t.dataSalary)):alert("Data Detail Borrower gagal diambil")},function(a){var e=JSON.parse(a._body),n=e.meta.message;e.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.hideDetailBorrowerApproved=function(){jQuery("#myModal").modal("toggle"),this.loaderBorrowerApproved=0},DetailComponent.prototype.showDetailBorrowerNotApproved=function(a){var t=this;this.getDetailBorrower.borrower_id=a,this.getHistoryPayment(a),jQuery("#FormApproved").modal({backdrop:"static",keyboard:!1}),this.http.post("https://masscredit-api.stagingapps.net/user/borrower/detail",this.getDetailBorrower,this.options).map(function(a){return a.json()}).subscribe(function(a){var e=a.meta.code;200==e?(t.dataDetailBorrower=a.data,t.dataSalary=a.data.amount,t.dataBorrowerAmount=a.data.borrower_amount,t.delimiterSalary(t.dataSalary)):alert("Data Detail Borrower gagal diambil")},function(a){var e=JSON.parse(a._body),n=e.meta.message;e.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.sendDataApprove=function(){var a=this;this.http.post("https://masscredit-api.stagingapps.net/user/myinvestment/approve",this.dataApprove,this.options).map(function(a){return a.json()}).subscribe(function(t){var e=t.meta.code;"200"==e&&(alert("Investasi berhasil"),jQuery("#modalFormConfirm").modal("toggle"),a.router.navigateByUrl("/dashboard/user-action/user-invest"))},function(a){var t=JSON.parse(a._body),e=(t.meta.code,t.meta.message);"Password salah!"==e&&alert("Password salah!"),"Verifikasi salah."==e&&alert("Verifikasi salah.")})},DetailComponent.prototype.delimiterSalary=function(a){try{var t=!1,e=a.toString();e<0&&(t=!0),e=e.replace(".",""),e=e.replace("-","");for(var n="",o=e.length,i=0,r=o;r>0;r--)i+=1,n=i%3==1&&1!=i?e.substr(r-1,1)+"."+n:e.substr(r-1,1)+n;t&&(n="-"+n);var s="Rp.";this.dataSalary=s.concat(n)}finally{this.delimiterBorrowerAmount(this.dataBorrowerAmount)}},DetailComponent.prototype.delimiterBorrowerAmount=function(a){try{var t=!1,e=a.toString();e<0&&(t=!0),e=e.replace(".",""),e=e.replace("-","");for(var n="",o=e.length,i=0,r=o;r>0;r--)i+=1,n=i%3==1&&1!=i?e.substr(r-1,1)+"."+n:e.substr(r-1,1)+n;t&&(n="-"+n);var s="Rp.";this.dataBorrowerAmount=s.concat(n)}finally{return this.loaderBorrowerApproved=1,!0}},DetailComponent.prototype.getHistoryPayment=function(a){var t=this;this.data_history_payment.borrower_id=a,this.http.post("https://masscredit-api.stagingapps.net/user/payment-history/get-list",this.data_history_payment,this.options).map(function(a){return a.json()}).subscribe(function(a){var e=a.meta.code;200==e?t.dataPayment=a.data.history_payment:alert("Data gagal diambil")},function(a){var e=JSON.parse(a._body),n=e.meta.message;e.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent=__decorate([n.Component({selector:"detail",template:e(949)}),__metadata("design:paramtypes",["function"==typeof(a="undefined"!=typeof o.Http&&o.Http)&&a||Object,"function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object,"function"==typeof(r="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&r||Object])],DetailComponent);var a,t,r}();t.DetailComponent=r},859:function(a,t,e){"use strict";var n=e(0),o=e(50),i=e(87),r=e(153),s=e(72),l=e(858);t.routes=[{path:"",component:l.DetailComponent},{path:"loan-approved/:id",loadChildren:function(){return e.e(25).then(e.bind(null,860)).then(function(a){return a.default})}},{path:"loan-not-been-approved/:id",loadChildren:function(){return e.e(11).then(e.bind(null,862)).then(function(a){return a.default})}}];var d=function(){function DetailModule(){}return DetailModule.routes=t.routes,DetailModule=__decorate([n.NgModule({declarations:[l.DetailComponent],imports:[i.HttpModule,r.FormsModule,o.RouterModule.forChild(t.routes),s.CommonModule],providers:[]}),__metadata("design:paramtypes",[])],DetailModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=d},949:function(a,t){a.exports='<section class="content">\n<div  *ngIf="dataDetailListMyInvest == 0">\n<div class="row">\n  <div align="center"> \n    <br><br><br><br><br>\n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n</div>\n</div>\n<div  *ngIf="dataDetailListMyInvest == 1">\n<div class="row">\n  <div class="col-md-4">\n    <div class="box box-solid radius-10" style="border: 100px">\n      <div align="center">\n        <label><h2 style="font-size: 24px;color: orange;">Investasi</h2></label>\n      </div>\n      <div class="form-group">\n      <br>\n          <img src="{{ data.images[0] }}" alt="Foto Diri Investor" class="thumbnail" width="250px" height="250px">\n      </div>\n      <div class="form-group">\n        <button class="btn btn-default" (click)="cancelDetailInvest()">Kembali</button>\n    </div>\n    </div>\n  </div>\n  <div class="col-md-7">\n    <div class="box box-solid radius-10">\n    <div class="box-body">\n    <div align="center">\n     <label><h2 style="font-size: 24px;color: orange;">Detail Investasi</h2></label>\n    </div>\n    <br>\n   <div class="col-md-12 clearfix"> \n    <!--  <div class="form-group">\n       <div class="col-md-4 clearfix">\n         <label class="unit">ID Investasi</label>\n       </div>\n       <div class="col-md-7 clearfix">\n         <input type="text" placeholder="ID Investasi" class="form-control input-md" name="id" id="id" value="{{ data.id }}" disabled>\n       </div>\n     </div> -->\n     <div class="form-group">\n       <div class="col-md-4 clearfix">\n         <label class="unit">Nama Investasi</label>\n       </div>\n       <div class="col-md-7 clearfix">\n         <input type="text" placeholder="Nama Investasi" class="form-control input-md" name="invest_name" id="invest_name" value="{{ data.invest_name }}" disabled>\n       </div>\n     </div>\n    <div class="form-group">\n      <div class="col-md-4 clearfix">\n        <label class="unit">Jumlah Investasi</label>\n      </div>\n      <div class="col-md-7 clearfix">\n        <input type="text" placeholder="Jumlah Investasi" class="form-control input-md" name="amount" id="amount" value="{{ dataAmount }}" disabled>\n      </div>\n    </div>\n    <div class="form-group">\n      <!-- null -->\n    </div>\n    <div class="form-group">\n       <div class="col-md-4 clearfix">\n         <label class="unit">Tipe Investasi</label>\n       </div>\n       <div class="col-md-7 clearfix">\n         <input type="text" placeholder="Tipe Investasi" class="form-control input-md" name="tipe" id="tipe" value="{{ data.tipe }}" disabled>\n       </div>\n    </div>\n    <div class="form-group">\n      <!-- null -->\n    </div>\n   <div class="form-group">\n     <div class="col-md-4 clearfix">\n       <label class="unit">Deskipsi</label>\n     </div>\n     <div class="col-md-7 clearfix">\n       <textarea type="text" placeholder="Description" class="form-control input-md" name="description" id="description" value="{{ data.collateral_value }}" disabled></textarea>\n      </div>\n   </div>\n   <div class="form-group">\n      <!-- null -->\n    </div>\n     <div class="form-group">\n     <div class="col-md-4 clearfix">\n       <label class="unit">Batas Penawaran</label>\n     </div>\n       <div class="col-md-7 clearfix">\n         <input  type="text" placeholder="Batas Akhir Penawaran" name="due_date" class="form-control input-md" id="due_date" value="{{ data.due_date }}" disabled>\n       </div>\n     </div>\n     <div class="form-group">\n      <!-- null -->\n    </div>\n      <div class="form-group">\n      <div class="col-md-4 clearfix">\n       <label class="unit">Bunga</label>\n      </div>\n      <div class="col-md-5 clearfix">\n       <input type="text" placeholder="Bunga" class="form-control input-md" name="interest" id="interest" value="{{ data.interest }}" disabled>\n      </div>\n       <label class="unit">%/Bulan</label>\n     </div>\n     <div class="form-group">\n      <!-- null -->\n    </div>\n    <div class="form-group">\n      <div class="col-md-4 clearfix">\n        <label class="unit">Tenor</label>\n      </div>\n      <div class="col-md-5">\n       <!-- <div class="col-md-10 clearfix"> -->\n         <input type="text" placeholder="Tenor" class="form-control input-md" name="tenor" id="tenor" value="{{ data.tenor }}" disabled>\n       <!-- </div> -->\n      </div>\n       <label class="unit">Bulan</label>\n     </div>\n     <div class="form-group">\n      <!-- null -->\n    </div>\n     </div>\n    </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-xs-12">\n <label><h2 style="font-size: 30px;color: orange;">Daftar Peminjam</h2></label>\n  <div class="box-body data-tables table-responsive">\n  <table class="table table-hover" id="example2">\n    <thead>\n      <tr>\n        <th>No.</th>\n        <th>Nama Peminjam</th>\n        <th>Nominal Pinjaman (Rp)</th>\n        <th>Status</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngIf="dataArrayNull == 1">\n        <td colspan="5" align="center">Data belum tersedia</td>\n      </tr>\n      <tr *ngFor="let dataBorrower of dataBorrower, let i =\'index\'">\n        <td>{{ i + 1 }}</td>\n        <td>\n          {{ dataBorrower.borrower_name }}\n        </td>\n        <td>{{ dataBorrower.loan_amount }}</td>\n        <td>{{ dataBorrower.status }}</td>\n        <td *ngIf="dataBorrower.status == \'Tunda\'">\n          <button class="pull-right" (click)="showDetailBorrowerNotApproved(dataBorrower.id)">\n            <i aria-hidden="true" class="fa fa-search"></i>\n          </button>\n        </td>\n        <td *ngIf="dataBorrower.status == \'Setuju\' || dataBorrower.status == \'Tolak\'">\n          <button class="pull-right" (click)="showDetailBorrowerApproved(dataBorrower.id)">\n            <i aria-hidden="true" class="fa fa-search"></i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>  \n  </div>\n</div>\n</div>\n  <!-- Trigger the modal with a button -->\n  <!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" (click)="showDetailBorrowerApproved(dataBorrower.id)">Open Modal</button> -->\n\n  <!-- Modal -->\n  <div class="modal fade modal-lg" id="FormApprove" style="z-index:9000;">\n    <div class="modal-dialog modal-lg">\n      <!-- Modal content-->\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" (click)="hideDetailBorrowerApproved(dataBorrower.id)">&times;</button>\n          <h4 class="modal-title">Detail Peminjam</h4>\n        </div>\n        <div class="modal-body">\n        <div  *ngIf="loaderBorrowerApproved == 0">\n          <div class="row">\n            <div align="center"> \n              <br><br><br><br><br>\n              <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n              <span class="sr-only">Loading...</span>\n            </div>\n          </div>\n        </div>\n        <div  *ngIf="loaderBorrowerApproved == 1">\n          <div class="row">\n            <div class="col-md-4">\n             <img src="{{ dataDetailBorrower.borrower_image }}" alt="Foto Peminjam">\n            </div>\n            <div class="col-md-8">\n              <div class="form-group">\n                <div class="col-xs-4">\n                  <label class="unit">Nama Lengkap</label>\n                </div>\n                <div class="col-xs-7">\n                  <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="full_name" id="full_name" value="{{ dataDetailBorrower.borrower_name }}" disabled>\n                </div>\n              </div>\n              <div class="form-group">\n                <div class="col-xs-4">\n                  <label class="unit">Borrower</label>\n                </div>\n                <div class="col-xs-7">\n                  <input type="text" placeholder="Borrower" class="form-control input-md" name="borrower" id="borrower" value="{{ dataDetailBorrower.borrower }}" disabled>\n                </div>\n             </div>\n             <div class="form-group">\n                <div class="col-xs-4">\n                  <label class="unit">Credit</label>\n                </div>\n                <div class="col-xs-7">\n                  <input type="text" placeholder="Credit" class="form-control input-md" name="credit" id="credit" value="{{ dataDetailBorrower.fund_history }}" disabled>\n                </div>\n             </div>\n             <div class="form-group">\n                <div class="col-xs-4">\n                  <label class="unit">Salary</label>\n                </div>\n                <div class="col-xs-7">\n                  <input type="text" placeholder="Salary" class="form-control input-md" name="salary" id="salary" value="{{ dataDetailBorrower.user_class }}" disabled>\n                </div>\n             </div>\n             <div class="form-group">\n                <div class="col-xs-4">\n                  <label class="unit">Review</label>\n                </div>\n                <div class="col-xs-7">\n                  <div class="unit">\n                      <!-- <i class="fa fa-star-half-full full" area-hidden="true"></i> -->\n                      <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                      <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                      <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                      <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px; color: orange"></i>\n                      <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                      <!-- <span class="bs-glyphicons-list">\n                      <span class="glyphicon glyphicon-star star-color star-full"></span>\n                      <span class="glyphicon glyphicon-star star-color font half"></span>\n                      </span> -->\n                      <!-- <span>({{ avg_reviews }} %)</span> -->\n                      <span>({{ dataDetailBorrower.avg_reviews }} %)</span>\n                  </div>\n                </div>\n             </div>\n             <div class="form-group">\n                <div class="col-xs-4">\n                  <label class="unit">Jumlah Pinjaman</label>\n                </div>\n                <div class="col-xs-7">\n                  <input type="text" placeholder="Nilai Pinjaman" class="form-control input-md" name="nilai_pinjaman" id="nilai_pinjaman" value="{{ dataBorrowerAmount }}" disabled>\n                </div>\n             </div> \n            </div>\n          </div>\n          <div class="row">\n            <div class="col-xs-12">\n           <label><h2 style="font-size: 30px;color: orange;">Riwayat Pembayaran</h2></label>\n            <div class="box-body data-tables table-responsive">\n            <table class="table table-hover" id="example2">\n              <thead>\n                <tr>\n                  <th>No.</th>\n                  <th>Angsuran Ke</th>\n                  <th>Tanggal Jatuh Tempo</th>\n                  <th>Tanggal Pembayaran</th>\n                  <th>Status</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let dataPayment of dataPayment, let i =\'index\'">\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    {{ dataPayment.installment_order }}\n                  </td>\n                  <td>{{ dataPayment.due_date }}</td>\n                  <td>{{ dataPayment.payment_date }}</td>\n                  <td>{{ dataPayment.status }}</td>\n                  <!-- <td *ngIf="dataBorrower.status == \'Tunda\'">\n                    <button class="pull-right" [routerLink]="[\'/dashboard/user-action/user-invest/detail\', data.id ,\'loan-not-been-approved\', dataBorrower.id]"><i aria-hidden="true" class="fa fa-search"></i></button>\n                  </td>\n                  <td *ngIf="dataBorrower.status == \'Setuju\' || dataBorrower.status == \'Tolak\'">\n                    <button class="pull-right" (click)="showDetailBorrowerApproved(dataBorrower.id)">\n                      <i aria-hidden="true" class="fa fa-search"></i>\n                    </button>\n                  </td> -->\n                </tr>\n              </tbody>\n            </table>\n            </div>  \n            </div>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>'}});