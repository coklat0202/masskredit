import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
	//moduleId: module.id,
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent implements OnInit { 
	constructor(private router:Router, private http:Http) { }
	
	private headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	});

	private options = new RequestOptions({ headers: this.headers });
	
	private access_token = {
		access_token : JSON.parse(localStorage.getItem("access_token"))
	}

	private invest = [];
	// private dataInvest = [];
	private amount = {};
	private dataListInvest = 0;
	private dataArrayNull = 0;

	private data: Observable<Array<any>>
	ngOnInit(){
		setTimeout(() => {this.getListInvest()},0.500);

	}

	listInvestasi() {
		// return this.investasiservice.Index();
	}

	getListInvest(){
		setTimeout( () => {
		// alert("Hello"); 
			this.http.post('https://masscredit-api.stagingapps.net/user/loan/getlist',
			this.access_token,
			this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					let code 		= response.meta.code;
					let message 	= response.meta.message;
					if(response.data.loans == '') {
						this.dataArrayNull = 1;
					}		
					this.invest = response.data.loans;
					for(let i = 0; i < this.invest.length; i++){
						let dataAmount = this.invest[i]
						let amount = dataAmount['amount'];
						// condition make delimiter
						var _minus = false;
						var b:any = amount.toString();
						if (b<0) _minus = true;
							b=b.replace(".","");
							b=b.replace("-","");
							let c = "";
							let panjang = b.length;
							let j = 0;
						for (let i = panjang; i > 0; i--){
							j = j + 1;
							if (((j % 3) == 1) && (j != 1)){
								c = b.substr(i-1,1) + "." + c;
								// console.log(c)
							} else {
								c = b.substr(i-1,1) + c;
							}
						}
						if (_minus) c = "-" + c ;
						let idr = "Rp.";
						dataAmount['amount'] = idr.concat(c);
					}
						this.dataListInvest = 1;
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
						if(message == "unauthorized") {
							alert("Maaf session anda telah habis silahkan login kembali")
							return this.router.navigateByUrl('/dashboard/sign-out')					
						}
				}
			) 
		},1);
	}

	linkCreateInvest(){
		this.router.navigateByUrl("/dashboard/other-user-action/invest/create");
	}
}