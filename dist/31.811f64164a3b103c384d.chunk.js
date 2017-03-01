webpackJsonp([31],{814:function(t,n,a){"use strict";var e=a(0),o=a(87),i=a(50),r=function(){function IndexComponent(t,n){this.router=t,this.http=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.invest=[],this.amount={},this.dataListLoan=0,this.dataArrayNull=0,this.listLoanUrl="https://masscredit-api.stagingapps.net/user/investment/getlist"}return IndexComponent.prototype.ngOnInit=function(){var t=this;setTimeout(function(){t.getListLoan()},1e3)},IndexComponent.prototype.listInvestasi=function(){},IndexComponent.prototype.getListLoan=function(){var t=this;setTimeout(function(){t.http.post(t.listLoanUrl,t.access_token,t.options).map(function(t){return t.json()}).subscribe(function(n){t.invest=n.data.investments;for(var a=0;a<t.invest.length;a++){var e=t.invest[a],o=e.amount,i="assets/img/default_profile.png";""==e.image_profile&&(e.image_profile=i);var r=!1,s=o.toString();s<0&&(r=!0),s=s.replace(".",""),s=s.replace("-","");for(var d="",l=s.length,u=0,c=l;c>0;c--)u+=1,d=u%3==1&&1!=u?s.substr(c-1,1)+"."+d:s.substr(c-1,1)+d;r&&(d="-"+d);var p="Rp.";e.amount=p.concat(d)}t.dataListLoan=1},function(n){var a=JSON.parse(n._body),e=a.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},1)},IndexComponent.prototype.linkCreateLoan=function(){this.router.navigateByUrl("/dashboard/other-user-action/loan/create")},IndexComponent=__decorate([e.Component({selector:"index",template:a(943)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object,"function"==typeof(n="undefined"!=typeof o.Http&&o.Http)&&n||Object])],IndexComponent);var t,n}();n.IndexComponent=r},815:function(t,n,a){"use strict";var e=a(0),o=a(50),i=a(87),r=a(153),s=a(72),d=a(814);n.routes=[{path:"",component:d.IndexComponent}];var l=function(){function IndexModule(){}return IndexModule.routes=n.routes,IndexModule=__decorate([e.NgModule({declarations:[d.IndexComponent],imports:[i.HttpModule,r.FormsModule,s.CommonModule,r.ReactiveFormsModule,o.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],IndexModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},943:function(t,n){t.exports='<!-- Main content -->\n<br>\n<div  *ngIf="dataListLoan == 1">\n<div class="col-xs-12" align="right">\n  <button class="add-advance-search" (click)="linkCreateLoan()">\n    Tambah\n  </button>\n  <!-- <button class="add-advance-search" onclick="alert(\'Belum tersedia\')">\n    Tambah\n  </button> -->\n</div>\n<br>\n<div class="col-xs-12">\n<!-- Tab panes -->\n<div class="tab-content ">\n    <div role="tabpanel" class="tab-pane active" id="investasi">\n    <br>\n    <div class="box-body data-tables table-responsive">\n      <table class="table table-hover" id="example2">\n        <thead>\n          <tr>\n            <th>No.</th>\n            <th>Borrower</th>\n            <th>Nama Borrower</th>\n            <th>Nilai</th>\n            <th>Kategori</th>\n            <th>Nominal (Rp)</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngIf="dataArrayNull == 1">\n            <td colspan="6" align="center">Data belum tersedia</td>\n          </tr>\n          <tr *ngFor="let data of invest; let i = \'index\'">\n            <td>{{ i + 1 }}</td>\n            <td align="left"><img src="{{ data.image_profile }}" alt="Profile Borrower" style="border-radius: 80px;width:55px;height:55px"></td>\n            <td>{{ data.nama_borrower }}</td>\n            <td>\n              Borrower: {{ data.user_score_borrower }} <br>\n              Salary: {{ data.user_class }} <br>\n              Credit: {{ data.user_score_credit }} \n            </td>\n            <td>{{ data.loan_category }}</td>\n            <td>{{ data.amount }}</td>\n            <td>\n              <button class="pull-right" [routerLink]="[\'/dashboard/other-user-action/loan/detail\', data.id]"><i aria-hidden="true" class="fa fa-search"></i></button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      </div>  \n    <nav aria-label="Page navigation" *ngIf="total_pagination > 1">\n      <ul class="pagination">\n       <!--  <li>\n          <a href="#" aria-label="Previous">\n            <span aria-hidden="true">&laquo;</span>\n          </a>\n        </li> -->\n        <!-- <li *ngFor="let a of array_total"><a href="#/dashboard/fund" id="a" (click)="linkTo(a)">{{ a }}</a></li> -->\n        <!-- <li>\n          <a href="#" aria-label="Next">\n            <span aria-hidden="true">&raquo;</span>\n          </a>\n        </li> -->\n      </ul>\n    </nav>      \n    </div>\n    <br>\n  </div>\n</div>\n</div>\n<div align="center" *ngIf="dataListLoan == 0"> \n  <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n  <span class="sr-only">Loading...</span>\n</div>\n<br>\n<!-- /.content -->'}});