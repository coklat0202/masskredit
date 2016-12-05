// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { LocalStorageService }   from 'angular-2-local-storage';


// debugger;
// Component
import { LoginComponent }        from './login.component';

export const routes = [
  { path:'', component: LoginComponent}
] 

@NgModule({
  declarations: [
    LoginComponent, // declarations LoginComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    LocalStorageService,
    // LoginComponent,
  ]
})

export default class LoginModule { 
  public routes = routes;
}
