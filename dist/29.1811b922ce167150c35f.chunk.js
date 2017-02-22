webpackJsonp([29],{852:function(t,n,a){"use strict";var e=a(0),s=a(87),i=a(50),o=function(){function IndexComponent(t,n){this.router=t,this.http=n,this.headers=new s.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new s.RequestOptions({headers:this.headers}),this.access_token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.invest=[],this.dataListMyInvest=0,this.dataArrayNull=0}return IndexComponent.prototype.ngOnInit=function(){this.getListInvest()},IndexComponent.prototype.getListInvest=function(){var t=this;this.http.post("https://masscredit-api.stagingapps.net/user/myinvestment/getlist",this.access_token,this.options).map(function(t){return t.json()}).subscribe(function(n){""==n.data.investments&&(t.dataArrayNull=1);n.meta.code,n.meta.message;t.invest=n.data.investments;for(var a=0;a<t.invest.length;a++){var e=t.invest[a],s=e.amount,i=!1,o=s.toString();o<0&&(i=!0),o=o.replace(".",""),o=o.replace("-","");for(var r="",d=o.length,l=0,u=d;u>0;u--)l+=1,r=l%3==1&&1!=l?o.substr(u-1,1)+"."+r:o.substr(u-1,1)+r;i&&(r="-"+r);var p="Rp.";e.amount=p.concat(r)}t.dataListMyInvest=1},function(n){var a=JSON.parse(n._body),e=a.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},IndexComponent=__decorate([e.Component({selector:"index",template:a(946)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Http&&s.Http)&&n||Object])],IndexComponent);var t,n}();n.IndexComponent=o},853:function(t,n,a){"use strict";var e=a(0),s=a(50),i=a(87),o=a(153),r=a(72),d=a(852);n.routes=[{path:"",component:d.IndexComponent}];var l=function(){function IndexModule(){}return IndexModule.routes=n.routes,IndexModule=__decorate([e.NgModule({declarations:[d.IndexComponent],imports:[i.HttpModule,o.FormsModule,r.CommonModule,o.ReactiveFormsModule,s.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],IndexModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},946:function(t,n){t.exports='<div class="row">\n  <div align="center" *ngIf="dataListMyInvest == 0"> \n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n  <br>\n</div>\n<!-- Main content -->\n<div class="row">\n  <div class="col-xs-12" *ngIf="dataListMyInvest == 1">\n  <div class="tab-content ">\n      <div role="tabpanel" class="tab-pane active" id="investasi">\n      <div class="box-body data-tables table-responsive">\n        <table class="table table-hover" id="example2">\n          <thead>\n            <tr>\n              <th>No.</th>\n              <th>Nama Investasi</th>\n              <th>Investasi</th>\n              <th>Tipe</th>\n              <th>Nominal Investasi</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngIf="dataArrayNull == 1">\n              <td colspan="5" align="center">Data belum tersedia</td>\n            </tr>\n            <tr *ngFor="let data of invest, let i = \'index\';">\n              <td>{{ i + 1 }}</td>\n              <td align="left">{{ data.invest_name }}</td>\n              <td><img src="{{ data.image_invest }}" alt="Investasi" style="border-radius: 5px;width:70px;height:70px"></td>\n              <td><span class="warranty">{{ data.type_invest }}</span></td>\n              <td>{{ data.amount }}</td>\n              <td>\n                <!-- <a class="pull-right" [routerLink]="[\'/dashboard/user-action/user-invest/detail\', data.id]"><i aria-hidden="true" class="fa fa-trash"></i></a> -->\n                <a class="pull-right" [routerLink]="[\'/dashboard/user-action/user-invest/detail\', data.id]"><i aria-hidden="true" class="fa fa-search"></i></a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        </div>  \n      <nav aria-label="Page navigation" *ngIf="total_pagination > 1">\n        <ul class="pagination">\n         <!--  <li>\n            <a href="#" aria-label="Previous">\n              <span aria-hidden="true">&laquo;</span>\n            </a>\n          </li> -->\n          <!-- <li *ngFor="let a of array_total"><a href="#/dashboard/fund" id="a" (click)="linkTo(a)">{{ a }}</a></li> -->\n          <!-- <li>\n            <a href="#" aria-label="Next">\n              <span aria-hidden="true">&raquo;</span>\n            </a>\n          </li> -->\n        </ul>\n      </nav>      \n      </div>\n      <br><br>\n    </div>\n  </div>\n</div>'}});