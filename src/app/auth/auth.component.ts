import { Component }       from '@angular/core';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  // //moduleId: module.id, //component for styleUrls (Masih gagal)
  selector: 'auth',  // <auth></lauth>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // providers: [
  //   Title
  // ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './auth.component.html',
  // styleUrls: ['./auth.component.css'] //component for styleUrls (Masih gagal)

})
export class AuthComponent { 

  ngOnInit(){
    // nav
      jQuery("document").ready(function($){
      var headNav = $('.navbar-head');
       $(window).scroll(function () {
           if ($(this).scrollTop() > 40) {
               headNav.addClass("fixed");
           } else {
               headNav.removeClass("fixed");
           } 
       });
      });
  }

}
