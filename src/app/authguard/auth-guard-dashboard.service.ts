import { Injectable }			from '@angular/core';
import { CanActivate,Router } 	from '@angular/router'; 
// import { LoginComponent }      from './../auth/login';

@Injectable()
export class AuthGuardDashboard implements CanActivate  {
	constructor (private router : Router) { }

	// private activate = this.loginService.loggedin();
	canActivate (){
		var token = localStorage.getItem("access_token");
			if(!token){
				return true;
			}
			else {
				this.router.navigateByUrl('dashboard');
				return false;
			}

	}

	// canActivate (){
	// 		if(this.activate){
	// 			// debugger;
	// 			// this.router.navigateByUrl('dashboard');
	// 			// debugger;
	// 			this.router.navigateByUrl('dashboard');
	// 			return false;
	// 		}
	// 		else{
	// 			// this.router.navigateByUrl('');
	// 			// return true;
	// 		}
	// }

}