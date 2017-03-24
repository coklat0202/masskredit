import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } from './validationservice.component';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'detail',
	templateUrl: 'detail.component.html',
	providers: [DetailService]
})

export class DetailComponent {
	constructor(
		private http: Http, 
		private router:Router, 
		private activatedRoute:ActivatedRoute,
		private detailService:DetailService
	) { }

	// param url
	public access_token = JSON.parse(localStorage.getItem("access_token"));
	
	// objek for save data when after request detail
	public dataReqInvest = {
		access_token : this.access_token,
		loan_id : '',
	}

	public detailInvest:any;

	public amountLoan:number;
	public amount = { };
	public restAmount = { };

	public dataDetailInvest = 0;
	public statusDataDetail = 0;

	ngOnInit(){
		// validate FormSimulation 
		jQuery('#FormSimulation').validate({
		  rules: {
		    jumlah: { required:true }
		  }
		});

		// get id
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			this.loan.invest_id = id;
			this.dataReqInvest.loan_id = id;
		});
		this.getDetailInvest();
	}

	public dataDetail = { }
	getDetailInvest(){
		this.detailService.getDetail(this.dataReqInvest).then(dataResponse => {
			let imageDefault = 'assets/img/default_image.jpg';
			if(dataResponse.data.images[0] == null) {
				dataResponse.data.images[0] = imageDefault;
			}
			// set to object dataCalculation
			this.dataCalculation.bunga = dataResponse.data.interest;
			this.dataCalculation.tenor = dataResponse.data.tenor;

			this.detailInvest = dataResponse.data;
			// console.log(this.detailInvest);
			let amount = dataResponse.data.amount;
			let restAmount = dataResponse.data.sisa;
			this.delimiterAmount(amount);
			this.delimiterRestAmount(restAmount);
		})
	}

	getAmount(amount:number){
		this.amountLoan = amount;
	}

	delimiterAmount(dataAmount:any){
		var _minus = false;
		var b:any = dataAmount.toString();
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
		this.amount = idr.concat(c);
	}

	delimiterRestAmount(dataRestAmount:any){
		var _minus = false;
		var b:any = dataRestAmount.toString();
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
		this.restAmount = idr.concat(c);
		this.statusDataDetail = 1;
	}

	// controller calculation
	dataCalculation = {
		access_token:this.access_token,
  	jumlah: null,
    bunga: null,
    tenor: null
  }
  statusCalculation:number;

	listInvestUrl = '#/dashboard/other-user-action/invest';

  calculationInvest(){
		if(jQuery('#FormSimulation').valid()) {
			this.loan.loan_amount = this.dataCalculation.jumlah;
			this.detailService.calculationLoan(this.dataCalculation).then(dataResponse => {
				this.simulation = dataResponse.data.simulation_result;
				this.statusCalculation = 1;
			})
		} else {
			alert("Data tidak valid");
		}
  }

  // controller form-loan
  public loan = {
		access_token: this.access_token,
		invest_id: null,
		loan_amount : null,
	}

	simulation = {
		nominal : null,
    pokok: null,
    bunga: null,
    cicilan_perbulan: null,
    denda: null,
    sucess_fee: null
	}

	formVerify:number;

	// cancelConfirmInvest(){
	// 	this.router.navigateByUrl("/dashboard/other-user-action/invest");
	// }

	createLoan(){
		if(jQuery("#FormSimulation").valid()) {
			if(this.isOn === 0) {
				return;
			} else {
				this.formVerify = 1;
			}
		}
		else{
			alert("Data tidak valid!");
		}
	}

	dataIsOn = [
    { value: 1 },
    { value: 0 },
  ];

	isOn = 0;
	agreement(){

	}

	hideVerify(status:any){
		this.formVerify = status;
	}
}
