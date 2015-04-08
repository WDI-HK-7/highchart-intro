$(document).ready(function(){
	var newDate;
	var tonsPurchased;
	var newData = [];

	var request = {
		type: "GET",
		url: "https://www.quandl.com/api/v1/datasets/UN/JETFUELIMPORTS_SGP.json?auth_token=93nmmc2v1WDxxBi7qN7b",
		dataType: "JSON",
		success: function (response) {
			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				tonsPurchased = item[1];

				var newItem = {};
				newItem.x = newDate;
				newItem.y= tonsPurchased;

				newData.unshift(newItem);
			}) 

			console.log(newData);

			initializeHighChart();
		}
	}

	$.ajax(request);

	function initializeHighChart(){
		var highchartConfig = {
			title: {
				text: 'Jet Fuel Imports Singapore', 
			},
			subtitle: {
				text: 'United Nations',
			},
			xAxis: {
				type: 'datetime'
			},
			series: [{
				//Data Points
				name: 'Singapore',
				data: newData
			}]
		};
		$('#chart').highcharts(highchartConfig);
	}

	// function initializeHighChartSmart(){

	// }

});

// $(document).ready(function() {
// 	var newData = [];
// 	var newDate;
// 	var studNum;

// 	var request = { 
// 		type: "GET",
// 		url: "https://www.quandl.com/api/v1/datasets/WORLDBANK/SGP_SE_PRM_ENRL.json?auth_token=93nmmc2v1WDxxBi7qN7b",
// 		dataType: "JSON",
// 		success: function(response) {
// 			console.log(response);
// 			response.data.forEach(function(item) {
// 				newDate = new Date(item[0]);
// 				studNum = item[1];

// 				var newItem ={};
// 				newItem.x = newDate;
// 				newItem.y = studNum;

// 				newData.unshift(newItem);
// 			})
// 			console.log(newData)
// 			initializeHighChart();
// 		}
// 	}
// 	$.ajax(request);

// 	function initializeHighChart(){
// 		var highchartConfig = {
// 			title: {
// 				text: 'Primary Education Student Enrolment in Singapore',
// 			},
// 			subtitle: {
// 				text: 'World Bank Cross Country Data',
// 			},
// 			xAxis: {
// 				type: 'datetime', //not datatime 
// 			},
// 			series: [{
// 				name: 'Singapore',
// 				data: newData,
// 			}]
// 		};
// 		$('#chart').highcharts(highchartConfig);
// 	}

// })