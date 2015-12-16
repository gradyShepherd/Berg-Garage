//variable to keep track of login status
var loggedIn;

//function to change tab displayed
$('.nav-tabs a').click(function(){
    $(this).tab('show');
})

//variables to hold price info
var fluidPrices = [
  ["AC Delco","Autotrac II","$5.02 ","$7.05 "  ],
  ["AC Delco","Dexos 5w30","$4.04 ","$5.65 "  ],
  ["Castrol","GTX 5w30","$4.18 ","$5.85 "  ],
  ["Castrol","GTX 10w30","$4.31 ","$6.05 "  ],
  ["Castrol","Synthetic Blend 5w30","$5.17 ","$7.25 "  ],
  ["Castrol","Syntec 10w30","$7.53 ","$10.55 "  ],
  ["Castrol","Syntec Dextron III Mercon","$3.95 ","$5.55 "  ],
  ["Citgo","Citgear Synthetic HD 75w 90 5 gal.","$117.43 ","$158.55 "  ],
  ["Citgo","Citgear Synthetic HD 75w 90 qt. price","$5.67 ","$7.95 "  ],
  ["Citgo","Dextron VI","$3.80 ","$5.30 "  ],
  ["Conoco"," 5w20 ","$3.16 ","$4.45 "  ],
  ["Conoco"," 5w20 Case ","$37.95 ","$53.10 "  ],
  ["Conoco"," 5w20 55 gal. ","$717.20 ","$968.20 "  ],
  ["Conoco","5w30","$3.16 ","$4.45 "  ],
  ["Conoco","5w30 Case","$37.95 ","$53.10 "  ],
  ["Conoco","5w30 55 gal.","$717.20 ","$968.20 "  ],
  ["Conoco","10w30","$3.13 ","$4.40 "  ],
  ["Conoco","10w30 Case","$37.53 ","$52.55 "  ],
  ["Conoco ","10w30 55 gal.","$709.26 ","$957.50 "  ],
  ["Conoco ","Fleet 10w30","$3.11 ","$4.35 "  ],
  ["Conoco ","Fleet 10w30 Case","$37.28 ","$52.20 "  ],
  ["Conoco ","Fleet 10w30 55 gal.","$704.55 ","$951.14 "  ],
  ["Conoco ","Fleet 30","$40.74 ","$57.05 "  ],
  ["Conoco ","Fleet 15w40","$3.11 ","$4.35 "  ],
  ["Conoco ","Fleet 15w40 Case","$37.28 ","$52.20 "  ],
  ["Conoco ","Fleet 15w40 gal. (price per gal)","$16.11 ","$22.55 "  ],
  ["Conoco ","Fleet 15W40 5 gal. ","$69.35 ","$93.60 "  ],
  ["Conoco ","Fleet 15w40 55 gal. ","$704.55 ","$986.35 "  ],
  ["Conoco ","Gear Lube- 80w 90 5 gal.","$82.63 ","$111.55 "  ],
  ["Conoco ","Gear Lube- 80w 90 (price per lb)","$2.07 ","$2.80 "  ],
  ["Conoco ","Gear Lube- 85w 140 5 gal.","$90.85 ","$122.65 "  ],
  ["Conoco ","Gear Lube- 85w 140 (price per qt)","$4.54 ","$6.15 "  ],
  ["Conoco ","MegaFlow Hydraluic Fluid - AW 68 5 gal.","$72.82 ","$98.30 "  ],
  ["Conoco ","PowerTran (price per qt.)","$3.44 ","$4.80 "  ],
  ["Conoco ","Powertran 5 gal.","$73.44 ","$99.15 "  ],
  ["Conoco ","Powertran 55 gal.","$727.16 ","$981.65 "  ],
  ["Conoco ","Super Sta. Grease (10/14 oz)","$25.14 ","$35.20 "  ],
  ["Conoco ","Super Sta Grease (40/14 oz)","$98.44 ","$137.80 "  ],
  ["Conoco ","Super Sta No. 2 35 lb.","$103.38 ","$139.55 "  ],
  ["Conoco ","Super ATF (per qt.)","$3.28 ","$4.60 "  ],
  ["Conoco ","T5X Heavy Duty Sae 30 5 gal.","$67.64 ","$91.30 "  ],
  ["Delo","Low Emission 15w40","$3.03 ","$4.25 "  ],
  ["Halvoline","5w20","$2.82 ","$3.95 "  ],
  ["Halvoline","5w30","$2.71 ","$3.80 "  ],
  ["Halvoline","10w30","$3.24 ","$4.55 "  ],
  ["Halvoline","10w40","$3.24 ","$4.55 "  ],
  ["Mobil ","5w20","$7.21 ","$10.10 "  ],
  ["Mobil ","5w30","$7.21 ","$10.10 "  ],
  ["Mobil ","10w30","$7.21 ","$10.10 "  ],
  ["Mobil ","ATF - Dextron 3","$8.73 ","$12.20 "  ],
  ["Mopar","Mercon V","$4.40 ","$6.15 "  ],
  ["Mopar","Mercon LV","$4.40 ","$6.15 "  ],
  ["Motorcraft ","5w20 Syn Blend","$3.92 ","$5.50 "  ],
  ["Motorcraft ","Mercon V","$4.56 ","$6.40 "  ],
  ["Motorcraft ","Mercon LV","$4.56 ","$6.40 "  ],
  ["Motorcraft ","Mercon SP","$5.30 ","$7.40 "  ],
  ["Motorcraft ","Motorcraft Gold (qt. Price)","$4.79 ","$6.70 "  ],
  ["Motorcraft ","Motor Special Orange (qt. Price)","$6.40 ","$8.95 "  ],
  ["O Riley","ATF +4","$6.00 ","$8.40 "  ],
  ["O Riley","Power Steering Fluid (price/oz)","$0.17 ","$0.25 "  ],
  ["O Riley","Power Steering Fluid (price/qt)","$5.52 ","$7.75 "  ],
  ["Pennzoil ","5w20","$4.23 ","$5.90 "  ],
  ["Pennzoil ","5w30","$4.23 ","$5.90 "  ],
  ["Pennzoil ","10w30","$4.13 ","$5.80 "  ],
  ["Pennzoil ","10w40","$4.13 ","$5.80 "  ],
  ["Prestone","Extended Life Dex-Cool","$2.54 ","$3.55 "  ],
  ["Purus","5w40 Synthetic (price per gallon)","$16.17 ","$22.65 "  ],
  ["Purus","5w40 Synthetic (price per qt.)","$4.04 ","$5.65 "  ],
  ["Quaker State ","10w30","$3.98 ","$5.60 "  ],
  ["Quaker State ","10w40","$3.95 ","$5.55 "  ],
  ["Service Pro","0w20","$3.75 ","$5.25 "  ],
  ["Service Pro","15w40","$61.11 ","$82.50 "  ],
  ["Service Pro","80 w90","$55.01 ","$77.00 "  ],
  ["Service Pro","AW 32 Hydraulic Fluid 5 gal.","$39.72 ","$53.60 "  ],
  ["Service Pro","AW 46 Hydraulic Fluid 5 gal.","$39.72 ","$53.60 "  ],
  ["Service Pro","Sae 30","$2.71 ","$3.80 "  ],
  ["Service Pro","Low Silica Antifreeze-regular green","$2.11 ","$2.95 "  ],
  ["Service Pro","All makes/All models Antifreeze","$2.11 ","$2.95 "  ],
  ["Service Pro","Tractor Hydraulic 5 gal.","$49.96 ","$67.45 "  ],
  ["Shell","Rotella 15w40 - gallons (price/qt.)","$3.23 ","$4.50 "  ],
  ["Shell"," Rotella 15w40 - qts. ","$3.84 ","$5.35 "  ],
  ["Trop Arctic "," 5w30 ","$3.39 ","$4.75 "  ],
  ["Trop Arctic "," 10w30 ","$0.31 ","$0.45 "  ],
  ["Trop Arctic "," 10w40 ","$3.25 ","$4.55 "  ],
  ["Valvoline ","5w20","$4.45 ","$6.25 "  ],
  ["Valvoline ","5w30","$4.45 ","$6.25 "  ],
  ["Valvoline ","10w30","$4.41 ","$6.15 "  ],
  ["Valvoline ","10w40","$4.41 ","$6.20 "  ],
  ["Wagner","Brake Fluid Price per qt.","$6.90 ","$9.65 "  ],
  ["Wagner","Brake Fluid Price per oz.","$0.21 ","$0.30 "  ],
  ["Zerex","Original Low Silica Antifreeze","$2.08 ","$2.90 "  ],
  ["Other","Heat","$1.95 ","$3.00 "  ],
  ["Other","Kerosene (price per gal)","$5.07 ","$7.10 "  ],
  ["Other","Solvent","$6.86 ","$9.60 "  ],
  ["Other","TerraCair Diesel Exhaust Fluid (2.5 gal jug)","$8.72 ","$12.20 "  ],
  ["Other","Washer Fluid gal.","$2.57 ","$3.60 "  ],
  ["Other","Washer Fluid (price per qt.)","$0.62 ","$0.85 "  ]
]
var filterPrices = [
	  [" AC Delco ","PF2","Oil"," $3.99 "," $9.10 "  ],
	  [" AC Delco ","PF9/PF970C","Oil"," $6.78 "," $9.50 "  ],
	  [" AC Delco ","PF13","Oil"," $3.99 "," $9.10 "  ],
	  [" AC Delco ","PF20","Oil"," $3.99 "," $9.10 "  ],
	  [" AC Delco ","PF24","Oil"," $4.09 "," $9.10 "  ],
	  [" AC Delco ","PF45","Oil"," $4.61 "," $9.10 "  ],
	  [" AC Delco ","PF46","Oil"," $4.45 "," $9.10 "  ],
	  [" AC Delco ","PF47","Oil"," $4.45 "," $9.10 "  ],
	  [" AC Delco ","PF48","Oil"," $4.45 "," $9.10 "  ],
	  [" AC Delco ","PF52","Oil"," $4.45 "," $9.10 "  ],
	  [" AC Delco ","PF53","Oil"," $3.79 "," $9.10 "  ],
	  [" AC Delco ","PF54","Oil"," $3.99 "," $9.10 "  ],
	  [" AC Delco ","PF60","Oil"," $5.10 "," $9.10 "  ],
	  [" AC Delco ","PF61","Oil"," $4.45 "," $9.10 "  ],
	  [" AC Delco ","PF63","Oil"," $8.61 "," $12.05 "  ],
	  [" AC Delco ","PFL400A","Oil"," $4.35 "," $9.10 "  ],
	  [" AC Delco ","PF454","Oil"," $4.45 "," $9.10 "  ],
	  [" AC Delco ","PF457g","Oil"," $5.25 "," $9.10 "  ],
	  [" AC Delco ","PF932","Oil"," $9.85 "," $13.80 "  ],
	  [" AC Delco ","PF1054","Oil"," $13.59 "," $19.05 "  ],
	  [" AC Delco ","PF1070","Oil"," $7.39 "," $10.35 "  ],
	  [" AC Delco ","PF1127 ","Oil"," $3.99 "," $9.10 "  ],
	  [" AC Delco ","PF1233","Oil"," $3.99 "," $9.10 "  ],
	  [" AC Delco ","PF1237","Oil"," $4.75 "," $9.10 "  ],
	  [" AC Delco ","PF1218","Oil"," $4.45 "," $9.10 "  ],
	  [" AC Delco ","PF1250","Oil"," $5.15 "," $9.10 "  ],
	  [" AC Delco ","PF2057","Oil"," $3.50 "," $9.10 "  ],
	  [" AC Delco ","PF2192","Oil"," $4.75 "," $9.10 "  ],
	  [" AC Delco ","PF2232","Oil"," $8.05 "," $11.25 "  ],
	  [" AC Delco ","TP3012","Oil"," $45.65 "," $63.90 "  ],
	  [" AC Delco ","A348C","Air"," $8.49 "," $11.90 "  ],
	  [" AC Delco ","A1618C","Air"," $27.55 "," $38.55 "  ],
	  [" AC Delco ","TF950SPIN","Air"," $38.15 "," $53.40 "  ]
]
var tubePrices = [
  ["410/350-4"," $4.09 "," $5.70 "  ],
  ["11X4-5"," $5.55 "," $7.80 "  ],
  ["13X5-6"," $6.36 "," $8.90 "  ],
  ["15X6-6"," $7.07 "," $9.90 "  ],
  ["400/480X8"," $5.28 "," $7.40 "  ],
  ["18/850/950X8"," $9.44 "," $13.20 "  ],
  ["20X10X8"," $12.36 "," $17.30 "  ],
  ["20X11-9, 21X8, 22X11-9"," $12.78 "," $17.90 "  ],
  ["450/530-11"," $8.36 "," $11.70 "  ],
  ["23-10X12, 24X8-12, 25-8X10"," $15.92 "," $22.30 "  ],
  ["FR 13/14 "," $8.50 "," $11.90 "  ],
  ["11L 14"," $13.23 "," $18.50 "  ],
  ["GR 13/14/15"," $9.51 "," $13.30 "  ],
  ["MR 14/15"," $9.96 "," $13.90 "  ],
  ["11L 15/16"," $15.77 "," $22.10 "  ],
  ["GKR16 TR13",""," $-   "  ],
  ["GKR16 TR15",""," $-   "  ],
  ["700/750-15 TR13"," $15.20 "," $21.30 "  ],
  ["700/750-15 TR15",""," $-   "  ],
  ["700/750-15 TR150"," $12.58 "," $17.60 "  ],
  ["700/750-16 TR13"," $13.95 "," $19.55 "  ],
  ["12R16.5","25.47"," $35.70 "  ],
  ["750/8.25X20","20.86"," $29.20 "  ],
  ["9.00X20"," $22.85 "," $32.00 "  ],
  ["10.00X20"," $24.44 "," $34.20 "  ]
]

//build tables
function buildTables() {
$(document).ready(function() {
	//build admin table if logged in
	if(loggedIn){
		$('#fluidTable').DataTable( {
			data: fluidPrices,
			order: [0,'asc'],
			pageLength: 25,
			paging: true,
			"pagingType": "full",
			buttons: [
				'csv'
			] ,
			columns: [
				{ title: "Brand"},
				{ title: "Product" },
				{ title: "Our Cost" },
				{ title: "Customer Cost" }
			]
		} );
	}
	//hide shop's cost if not logged in
	else {
		$('#fluidTable, #xsFluidTable').DataTable( {
			data: fluidPrices,
			order: [0,'asc'],
			pageLength: 25,
			aoColumnDefs: [
				{"bVisible":false,"aTargets": [2]}
			] ,
			columns: [
				{ title: "Brand"},
				{ title: "Product" },
				{ title: "Our Cost" },
				{ title: "Your Price" }
			]
		} );
	}
	//reapeat process above hiding rows with lower priority for xs view
	if(loggedIn){
		$('#xsFluidTable').DataTable( {
			data: fluidPrices,
			order: [0,'asc'],
			paging: true,
			pageLength: 25,
			aoColumnDefs: [
				{"bVisible":false,"aTargets": [0]}
			] ,
			columns: [
				{ title: "Brand"},
				{ title: "Product" },
				{ title: "Our Cost" },
				{ title: "Customer Cost" }
			]
		} );
	}
} );

$(document).ready(function() {
	//admin table
	if(loggedIn){
		$('#filterTable').DataTable( {
			data: filterPrices,
			order: [1, "asc"],
			pageLength: 25,
			columns: [
				{ title: "Brand"},
				{ title: "Product" },
				{ title: "Filter Type" },			
				{ title: "Our Cost" },
				{ title: "Customer Cost" }
			]
		} );
	}
	//customer view table
	else {
		$('#filterTable').DataTable( {
			data: filterPrices,
			order: [1, "asc"],
			pageLength: 25,
			aoColumnDefs: [
				{"bVisible":false,"aTargets": [3]}
			] ,
			columns: [
				{ title: "Brand"},
				{ title: "Product" },
				{ title: "Filter Type" },
				{ title: "Our Cost" },
				{ title: "Your Price" }
			]
		} );
	}
	//xs tables
	if(loggedIn){
		$('#xsFilterTable').DataTable( {
			data: filterPrices,
			order: [1, "asc"],
			pageLength: 25,
			aoColumnDefs: [
				{"bVisible":false,"aTargets": [0,2]}
			] ,
			columns: [
				{ title: "Brand"},
				{ title: "Product" },
				{ title: "Filter Type" },			
				{ title: "Our Cost" },
				{ title: "Customer Cost" }
			]
		} );
	}
	else {
		$('#xsFilterTable').DataTable( {
			data: filterPrices,
			order: [1, "asc"],
			pageLength: 25,
			aoColumnDefs: [
				{"bVisible":false,"aTargets": [2,3]}
			] ,
			columns: [
				{ title: "Brand"},
				{ title: "Product" },
				{ title: "Filter Type" },
				{ title: "Our Cost" },
				{ title: "Your Price" }
			]
		} );
	}
} );

$(document).ready(function() {
	//admin view table
	if(loggedIn) {
		$('#tubeTable').DataTable( {
			data: tubePrices,
			order: [1, "asc"],
			pageLength: 25,
			columns: [
				{ title: "Product" },
				{ title: "Our Cost" },
				{ title: "Customer Cost" }
			]
		} );
	}
	//customer view table
	else {
		$('#tubeTable').DataTable( {
			data: tubePrices,
			order: [1, "asc"],
			pageLength: 25,
			aoColumnDefs: [
				{"bVisible":false,"aTargets": [1]}
			] ,
			columns: [
				{ title: "Product" },
				{ title: "Our Cost" },
				{ title: "Your Price" }
			]
		} );
	}
} );
}
//function to retrieve cookie data
function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i=0; i<ca.length; i++) {
         var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
         if (c.indexOf(name) == 0) {
			 return c.substring(name.length,c.length);
		 }
     }
     return "";
} 

//check if signed in on product page load
function checkSignIn() {
	$(document).ready(function() {
	var user = getCookie("userEmail");
	//if user is signed in hide login link and replace with current user email
	if(user!= ""){
		$("#login").hide();
		$("#logout").show();
		loggedIn = true;
	}
	//if user is not logged in show login link
	else {
		$("#login").show();
		$("#logout").hide();
	}
	buildTables();
})
}

//check entered credentials. If valid, redirect to Product page, showing admin tables
function checkValidation() {
	var email = document.getElementById("email").value;
	var pword = document.getElementById("password").value;
	
	//temporary -- will have excepted credentials on server eventually
	if(email=="cmd10067@ttc-cmc.net" && pword=="5473514") {
		document.cookie = "userEmail=" + email;
		document.cookie= "userPassword=" + pword;
		window.location = "Products.html";
	}
	else {
		alert("The credentials entered do not match our records.")
	}
	
}

function logout() {
	document.cookie = "userEmail=" + "";
	document.cookie= "userPassword=" + "";
	location.reload(true);
	window.history.forward(1);
}