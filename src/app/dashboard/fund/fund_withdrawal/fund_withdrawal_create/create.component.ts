import { Component, OnInit }								from '@angular/core';
import { CreateService }									from './create.service';
import { FormGroup, FormBuilder, Validators, FormControl } 	from '@angular/forms';
import { ValidationServiceInvestasi } 					   	from './validationservice.component';
import { Headers, Http, RequestOptions }	   				from '@angular/http';
import { Router }        					   				from '@angular/router';


declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
	providers: [CreateService]
})

export class CreateComponent {
	constructor(private service : CreateService, private http : Http, private router : Router) { }

	ngOnInit() {

		// Request for get profile
		this.http.post('http://masscredit-api.stagingapps.net/user/credential/profile',this.data_access_token,this.options)
	        .map(response => response.json())
	        .subscribe(
	          (response : any) => {
	            // console.log(response);
	            this.data.nama_lengkap	= response.data.profile.name;
	            // this.data.bank_name		= response.data.profile.complement_user.no_rekening;
	            // this.data.no_rekening
	            console.log(response);
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

		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });

	    jQuery( "#createForm" ).validate({
		  rules: {
		    nama_lengkap: {
		      required: true
		    },
		    bank_name: {
		      required: true,
		      // email	  : true
		    },
		    no_rekening: {
		      required: true
		    },
		    amount: {
		      required: true
		    },
		    date: {
		      required: true
		    },
		  }
		});

		// Mask
		jQuery(function($){
			jQuery('#amount').mask('000000000000');
			jQuery('#no_rekening').mask('000000000000000');

			
		});

		// Request for get no reference
		this.http.post('http://masscredit-api.stagingapps.net/user/fund/no-reference',this.data,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					var no_reference= response.data.no_reference;
					this.data.no_reference = no_reference;
					console.log(code,message);
					// this.router.navigateByUrl('/dashboard/fund');
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

		// Request for get data bank
		this.http.get('http://masscredit-api.stagingapps.net/master/bank',this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					var banks 		= response.data.tipe_bank;
					this.banks 		= banks;
					console.log(response);
					// this.router.navigateByUrl('/dashboard/fund');
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
		
		// Get date
		let date = jQuery("#date").datepicker("setDate", new Date());
		let value_date = jQuery("#date").val();
		this.data.date = value_date;
	}
	

	// Headers
  	public headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		})
	public options = new RequestOptions({ headers: this.headers })

	// Get access_token in localstorage
	access_token = JSON.parse(localStorage.getItem("access_token"));
	
	// objek request Get No Reference
	public data_access_token = {
		access_token : this.access_token
	}

	// objek request Add Fund
	public data = {
		access_token: this.access_token,
	  	date		: '',
	  	no_reference: '',
	  	nama_lengkap: '',
	  	bank_name	: 0,
		no_rekening	: '',
		amount		: '',		
	}

	// objek for save data bang when success get data bank on API
	public banks = [];

	// get id bank name
	getBankName(id){
		this.data.bank_name = id;
		console.log(this.data)
	}

  	createWithdrawal(data) {
		if(jQuery("#createForm").valid()) {	
		// if(true) {
	  		console.log(this.data)
				
			// API Add Fund
			this.http.post('http://masscredit-api.stagingapps.net/user/withdrawal/add',this.data,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					var id_verification 	= response.data.id;
					var verification_code 	= response.data.verification_code
					localStorage.setItem("id_verification",id_verification);
					localStorage.setItem("verification_code",verification_code);
					console.log(code,message);
					console.log(response)
					alert("Silahkan konfirmasi penarikan dana anda")
					this.router.navigateByUrl('/dashboard/fund/fund-withdrawal/confirm');
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
						if(message == "unauthorized") {
							alert("Maaf session anda telah habis silahkan login kembali")
							return this.router.navigateByUrl('/dashboard/sign-out')
							
						}	
						if(message == "Saldo anda tidak mencukupi.") {
							alert("Maaf saldo anda tidak mencukupi")
							
						}	
				}
			);				
		}
		else{
			alert("Data tidak valid")
		}
  		
	  }

	  cancelFund(){
	  	return this.router.navigateByUrl('/dashboard/fund');
	  }

}