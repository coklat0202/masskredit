import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   				from '@angular/http';
import { Router }        					   from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor(private router:Router, private http:Http) { }
	
	private headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	});

	private options = new RequestOptions({ headers: this.headers });
	
	private access_token = {
		access_token : JSON.parse(localStorage.getItem("access_token"))
	}

	private loans = [];
	private dataListMyInvest = 0;
	private dataArrayNull = 0;

	ngOnInit(){
		this.getListInvest();
	}

	getListInvest(){
		this.http.post('https://masscredit-api.stagingapps.net/user/myloan/getlist',
		this.access_token,
		this.options)
		.map(response => response.json())
		.subscribe(
			(response : any) => {
				console.log(response);
				this.dataListMyInvest = 1
				if(response.data.investments == '') {
					this.dataArrayNull = 1;
				}
				let code 		= response.meta.code;
				let message 	= response.meta.message;					
				this.loans = response.data.loans;
				// for(let i = 0; i < this.invest.length; i++){
				// let dataAmount = this.invest[i]
				// let amount = dataAmount['amount'];
				// // condition make delimiter
				// var _minus = false;
				// var b:any = amount.toString();
				// if (b<0) _minus = true;
				// 	b=b.replace(".","");
				// 	b=b.replace("-","");
				// 	let c = "";
				// 	let panjang = b.length;
				// 	let j = 0;
				// for (let i = panjang; i > 0; i--){
				// 	j = j + 1;
				// 	if (((j % 3) == 1) && (j != 1)){
				// 		c = b.substr(i-1,1) + "." + c;
				// 		// console.log(c)
				// 	} else {
				// 		c = b.substr(i-1,1) + c;
				// 	}
				// }
				// if (_minus) c = "-" + c ;
				// let idr = "Rp.";
				// dataAmount['amount'] = idr.concat(c);
				// }
				// this.dataListMyInvest = 1;
			},
			(err:any) => {
				var error   = JSON.parse(err._body)
				var message = error.meta.message
					if(message == "unauthorized") {
						alert("Maaf session anda telah habis silahkan login kembali")
						return this.router.navigateByUrl('/dashboard/sign-out')					
					}
			}
		);
	}

}