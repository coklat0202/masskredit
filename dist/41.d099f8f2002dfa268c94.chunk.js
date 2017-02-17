webpackJsonp([41],{751:function(e,t,n){"use strict";var a=n(0),i=n(109),o=n(61),d=function(){function DetailComponent(e,t,n){this.http=e,this.router=t,this.activatedRoute=n,this.headers=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.fund_id="",this.detail={},this.bank={},this.data_get_detail_fund={access_token:this.access_token,fund_id:""},this.dataAmount={}}return DetailComponent.prototype.ngOnInit=function(){var e=this;this.activatedRoute.params.subscribe(function(t){var n=t.id;e.data_get_detail_fund.fund_id=n});this.http.post("https://masscredit-api.stagingapps.net/user/fund/get-detail",this.data_get_detail_fund,this.options).map(function(e){return e.json()}).subscribe(function(t){var n=t.data,a=t.data.bank;1==a&&(e.bank="BCA"),2==a&&(e.bank="Mandiri"),3==a&&(e.bank="Danamon"),4==a&&(e.bank="Sinarmas"),5==a&&(e.bank="BNI"),6==a&&(e.bank="Niaga"),"undefined"==a&&(e.bank=""),e.detail=n,e.dataAmount=t.data.amount,e.delimiterAmount(e.dataAmount)})},DetailComponent.prototype.delimiterAmount=function(e){try{var t=!1,n=e.toString();n<0&&(t=!0),n=n.replace(".",""),n=n.replace("-","");for(var a="",i=n.length,o=0,d=i;d>0;d--)o+=1,a=o%3==1&&1!=o?n.substr(d-1,1)+"."+a:n.substr(d-1,1)+a;t&&(a="-"+a);var s="Rp.";this.dataAmount=s.concat(a)}finally{return!0}},DetailComponent.prototype.backFund=function(){this.router.navigateByUrl("/dashboard/fund")},DetailComponent=__decorate([a.Component({selector:"detail",template:n(888)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Http&&i.Http)&&e||Object,"function"==typeof(t="undefined"!=typeof o.Router&&o.Router)&&t||Object,"function"==typeof(d="undefined"!=typeof o.ActivatedRoute&&o.ActivatedRoute)&&d||Object])],DetailComponent);var e,t,d}();t.DetailComponent=d},752:function(e,t,n){"use strict";var a=n(0),i=n(61),o=n(109),d=n(153),s=n(751);t.routes=[{path:"",component:s.DetailComponent}];var l=function(){function DetailModule(){}return DetailModule.routes=t.routes,DetailModule=__decorate([a.NgModule({declarations:[s.DetailComponent],imports:[o.HttpModule,d.FormsModule,i.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],DetailModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},888:function(e,t){e.exports='<section class="content">\n <div class="row">\n   <div class="col-md-12">\n     <div class="box bg-transparent">\n       <div class="box-header">\n         <h2 class="box-title pull-left">Detail Dana</h2>\n       </div>\n       <div class="box-body">\n         <div class="form-login-register">\n           <form class="form-horizontal clearfix row" name="detailForm" id="detailForm">\n              <div class="col-md-12">\n                   <div class="form-group">\n                     <div class="col-md-10 clearfix">\n                       <input type="text" placeholder="No Referensi" class="form-control input-md" name="no_reference" id="no_reference" value="{{ detail.no_reference }}" disabled>\n                     </div>\n                   </div>\n                  <div class="form-group">\n                   <div class="col-md-10 clearfix">\n                     <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="nama_lengkap" id="nama_lengkap" value="{{ detail.nama_lengkap }}" disabled>\n                   </div>\n                 </div>\n                  <div class="form-group">\n                    <div class="col-md-10 clearfix">\n                      <input type="text" placeholder="Nama Bank" class="form-control input-md"  name="bank_name" id="bank_name" value="{{ bank }}" disabled>\n                    </div>\n                  </div>\n                   <div class="form-group">\n                     <div class="col-md-10 clearfix">\n                       <input type="text" placeholder="Nomor Rekening" class="form-control input-md" name="no_rekening" id="no_rekening" value="{{ detail.no_rekening }}" disabled>\n                      </div>\n                   </div>\n                   <div class="form-group">\n                     <div class="col-md-12">\n                         <input  type="text" placeholder="Tanggal" name="date" class="form-control input-md datepicker" id="date" value="{{ detail.date }}" disabled>\n                     </div>\n                   </div>\n                    <div class="form-group">\n                    <div class="col-md-10 clearfix">\n                       <input type="text" placeholder="Nominal" class="form-control input-md" name="amount" id="amount" value="{{ dataAmount }}" disabled>\n                    </div>\n                   </div>\n                  <div class="form-group">\n                    <div class="col-md-10 clearfix">\n                       <input type="text" placeholder="Tanggal Transfer" class="form-control input-md" name="tanggal_transfer" id="tanggal_transfer" value="{{ detail.date }}" disabled>\n                    </div>\n                   </div>\n                    <div class="form-group">\n                    <div class="col-md-10 clearfix">\n                        <label class="unit">Bukti Transfer</label>\n                        <img src="{{ detail.images }}" alt="Bukti Transfer" class="thumbnail" width="250px" height="250px">\n                    </div>\n                   </div>\n              </div>\n           </form>\n         </div>\n       </div>\n       <div class="form-group">\n          <div class="col-md-6 col-center">\n            <button class="btn btn-red" (click)="backFund()">Kembali</button>\n          </div>\n       </div>\n    </div>\n   </div>\n </div>\n</section>'}});