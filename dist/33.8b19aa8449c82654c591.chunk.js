webpackJsonp([33],{769:function(t,e,n){"use strict";var o=n(0),r=n(50),u=n(87),d=n(153),i=n(62),s=n(790);e.routes=[{path:"",component:s.InvestComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return n.e(22).then(n.bind(null,789)).then(function(t){return t.default})}},{path:"create",loadChildren:function(){return n.e(13).then(n.bind(null,771)).then(function(t){return t.default})}},{path:"detail/:id",loadChildren:function(){return n.e(11).then(n.bind(null,782)).then(function(t){return t.default})}}]}];var a=function(){function InvestModule(){}return InvestModule.routes=e.routes,InvestModule=__decorate([o.NgModule({declarations:[s.InvestComponent],imports:[u.HttpModule,d.FormsModule,i.CommonModule,r.RouterModule.forChild(e.routes),d.ReactiveFormsModule],providers:[]}),__metadata("design:paramtypes",[])],InvestModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},790:function(t,e,n){"use strict";var o=n(0),r=function(){function InvestComponent(){}return InvestComponent=__decorate([o.Component({selector:"invest",template:n(953)}),__metadata("design:paramtypes",[])],InvestComponent)}();e.InvestComponent=r},953:function(t,e){t.exports='<section class="content">\n \t<div class="row">\n   \t<div class="col-md-12">\n\t    <div class="box bg-transparent">\n\t    \t<!-- content -->\n\t    \t<router-outlet></router-outlet>\n\t    </div>\n   \t</div>\n\t</div>\n</section>\n'}});