webpackJsonp([31],{855:function(e,t,n){"use strict";var o=n(0),r=n(50),s=n(87),u=n(153),d=n(62),i=n(874);t.routes=[{path:"",component:i.UserInvestComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return n.e(19).then(n.bind(null,873)).then(function(e){return e.default})}},{path:"create",loadChildren:function(){return n.e(30).then(n.bind(null,857)).then(function(e){return e.default})}},{path:"detail/:id",loadChildren:function(){return n.e(15).then(n.bind(null,858)).then(function(e){return e.default})}}]}];var a=function(){function UserInvestModule(){}return UserInvestModule.routes=t.routes,UserInvestModule=__decorate([o.NgModule({declarations:[i.UserInvestComponent],imports:[s.HttpModule,u.FormsModule,d.CommonModule,r.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],UserInvestModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},874:function(e,t,n){"use strict";var o=n(0),r=function(){function UserInvestComponent(){}return UserInvestComponent=__decorate([o.Component({selector:"user-invest",template:n(989)}),__metadata("design:paramtypes",[])],UserInvestComponent)}();t.UserInvestComponent=r},989:function(e,t){e.exports='<section class="content">\n \t<div class="row">\n   \t<div class="col-md-12">\n\t    <div class="box bg-transparent">\n\t    \t<!-- content -->\n\t    \t<router-outlet></router-outlet>\n\t    </div>\n   \t</div>\n\t</div>\n</section>'}});