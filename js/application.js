$(document).ready(function(){

	var newDate;
	var newPrice;
	var price;
	var newItem = {};
	var newDataUSD = [];
	var newDataEUR = [];

	var request = {
		type: 'GET',
		url: 'https://www.quandl.com/api/v1/datasets/BITCOIN/ICBITUSD.json?auth_token=E6kNzExHjay2DNP8pKvB',
		dataType: 'JSON',
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				price = item[1];
				newItem = {};
				newItem.x = newDate;
				newItem.y = price;

				newDataUSD.unshift(newItem);
			})

			console.log(newDataUSD);
			initializeHighChart();
 		}

	}

	$.ajax(request);

		var request2 = {
		type: 'GET',
		url: 'https://www.quandl.com/api/v1/datasets/BITCOIN/BCEUR.json?trim_start=2012-03-02&auth_token=E6kNzExHjay2DNP8pKvB',
		dataType: 'JSON',
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				price = item[7];
				newItem = {};
				newItem.x = newDate;
				newItem.y = price;

				newDataEUR.unshift(newItem);
			})

			console.log(newDataEUR);
			initializeHighChart();
 		}

	}

	$.ajax(request2);

	function initializeHighChart() {
		var highchartConfig = {
			title: {
            text: 'Price of Bitcoin',
        },
			yAxis: {
				title: {
                text: 'Price'
            }
        },

			xAxis: {
				type: 'datetime',
				title: {
                text: 'Time'
            }
			},
			series: [{name: 'Price of Bitcoin in USD', data: newDataUSD}, {name: 'Price of Bitcoin in EUR', data: newDataEUR}]
		};

		$('#chart').highcharts(highchartConfig);
	}


});