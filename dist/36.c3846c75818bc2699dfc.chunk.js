webpackJsonp([36],{781:function(t,n,e){"use strict";var o=e(0),r=function(){function FundWithdrawalComponent(){}return FundWithdrawalComponent=__decorate([o.Component({selector:"fund-withdrawal",template:e(932)}),__metadata("design:paramtypes",[])],FundWithdrawalComponent)}();n.FundWithdrawalComponent=r},782:function(t,n,e){"use strict";var o=e(0),r=e(50),u=e(87),d=e(153),a=e(72),l=e(781);n.routes=[{path:"",component:l.FundWithdrawalComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return e.e(37).then(e.bind(null,780)).then(function(t){return t.default})}},{path:"create",loadChildren:function(){return e.e(8).then(e.bind(null,774)).then(function(t){return t.default})}},{path:"detail/:id",loadChildren:function(){return e.e(38).then(e.bind(null,778)).then(function(t){return t.default})}},{path:"confirm",loadChildren:function(){return e.e(39).then(e.bind(null,768)).then(function(t){return t.default})}}]}];var i=function(){function FundWithdrawalModule(){}return FundWithdrawalModule.routes=n.routes,FundWithdrawalModule=__decorate([o.NgModule({declarations:[l.FundWithdrawalComponent],imports:[u.HttpModule,d.FormsModule,a.CommonModule,r.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],FundWithdrawalModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},932:function(t,n){t.exports="<!-- content route -->\n<router-outlet></router-outlet>"}});