webpackJsonp([27],{862:function(e,n,t){"use strict";var o=t(0),r=t(50),u=t(87),a=t(153),d=t(72),l=t(863);n.routes=[{path:"",component:l.UserLoanComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return t.e(25).then(t.bind(null,884)).then(function(e){return e.default})}},{path:"create",loadChildren:function(){return t.e(26).then(t.bind(null,865)).then(function(e){return e.default})}},{path:"detail/:id",loadChildren:function(){return t.e(9).then(t.bind(null,866)).then(function(e){return e.default})}}]}];var i=function(){function UserLoanModule(){}return UserLoanModule.routes=n.routes,UserLoanModule=__decorate([o.NgModule({declarations:[l.UserLoanComponent],imports:[u.HttpModule,a.FormsModule,d.CommonModule,r.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],UserLoanModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},863:function(e,n,t){"use strict";var o=t(0),r=function(){function UserLoanComponent(){}return UserLoanComponent=__decorate([o.Component({selector:"user-loan",template:t(965)}),__metadata("design:paramtypes",[])],UserLoanComponent)}();n.UserLoanComponent=r},965:function(e,n){e.exports="<router-outlet></router-outlet>\n"}});