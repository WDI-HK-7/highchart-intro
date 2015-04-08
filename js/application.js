$(document).ready(function(){

// I want to make a AJAX (jQuery) request 
// url =https://www.quandl.com/api/v1/datasets/BTS_MM/RETAILGAS.json
	
	var newData = [];
	
	var request = {
		type: "GET", 
		url: "https://www.quandl.com/api/v1/datasets/UKONS/MRET_AJFU_A.json?auth_token=TcgzM8xuCaizwP_DiQD_",
		dataType: "JSON", 
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				price = item[1];

				newItem = {};
				newItem.x = newDate;
				newItem.y = price;

				newData.unshift(newItem);

			}); 

			console.log(newData);

			initializeHighChart();
		}
	};

	$.ajax(request);

	function initializeHighChart() {
		var highChartConfig = {
			title: {
				text: "Hong Kong Dollar Annual",
			},
			xAxis: {
				type: "datetime"
			},
			series: [{
				name: 'HKDollar',
				data: newData
			}]
		};

		$('#chart').highcharts(highChartConfig);
	}

});


// EXAMPLE IN CLASS

// $(document).ready(function(){

// // I want to make a AJAX (jQuery) request 
// // url =https://www.quandl.com/api/v1/datasets/BTS_MM/RETAILGAS.json
	
// 	var newData = [];
	
// 	var request = {
// 		type: "GET", 
// 		url: "https://www.quandl.com/api/v1/datasets/BTS_MM/RETAILGAS.json?auth_token=E6kNzExHjay2DNP8pKvB",
// 		dataType: "JSON", 
// 		success: function(response) {


// 			// we need to convert all the data using new Date()
// 			// .forEach loop can be used
// 			// for loop can be used (var i = 0, i < response.data.length, i++);
// 			// response.data is the whole array called data
// 			// 

// 			response.data.forEach(function(item) {
// 				newDate = new Date(item[0]);
// 				originalPrice = item[1];

// 				newItem = {};
// 				newItem.x = newDate;
// 				newItem.y = originalPrice;

// 				newData.unshift(newItem);

// 			}); 

// 			console.log(newData);

// 			initializeHighChart();
// 		}
// 	};

// 	$.ajax(request);

// 	function initializeHighChart() {
// 		var highChartConfig = {
// 			xAxis: {
// 				type: "datetime"
// 			},
// 			series: [{
// 				name: 'US',
// 				data: newData
// 			}]
// 		};
// 		$('#chart').highcharts(highChartConfig);
// 	}

// });


