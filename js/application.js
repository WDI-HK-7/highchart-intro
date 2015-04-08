$(document).ready(function(){
	var newDate;
	var newItem = {};
	var urbanites;

	var newData = [];
	var newData2 = [];
	var newData3 = [];
	var newData4 = [];
	var newData5 = [];

	var china = {
		type: "GET",
		url: "https://www.quandl.com/api/v1/datasets/WORLDBANK/CHN_SP_URB_TOTL_IN_ZS.json?auth_token=feDyJMMFstsWJZBpHu86",
		dataType: "JSON",
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				urbanites = item[1];

				newItem = {};
				newItem.x = newDate;
				newItem.y = urbanites;

				newData.unshift(newItem);
			});

			console.log(newData);

			initializeHighChart();
		}
	};

	var brazil = {
		type: "GET",
		url: "https://www.quandl.com/api/v1/datasets/WORLDBANK/BRA_SP_URB_TOTL_IN_ZS.json?auth_token=feDyJMMFstsWJZBpHu86",
		dataType: "JSON",
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				urbanites = item[1];

				newItem = {};
				newItem.x = newDate;
				newItem.y = urbanites;

				newData2.unshift(newItem);
			});

			console.log(newData2);

			initializeHighChart();
		}
	};

	var russia = {
		type: "GET",
		url: "https://www.quandl.com/api/v1/datasets/WORLDBANK/RUS_SP_URB_TOTL_IN_ZS.json?auth_token=feDyJMMFstsWJZBpHu86",
		dataType: "JSON",
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				urbanites = item[1];

				newItem = {};
				newItem.x = newDate;
				newItem.y = urbanites;

				newData3.unshift(newItem);
			});

			console.log(newData3);

			initializeHighChart();
		}
	};

	var india = {
		type: "GET",
		url: "https://www.quandl.com/api/v1/datasets/WORLDBANK/IND_SP_URB_TOTL_IN_ZS.json?auth_token=feDyJMMFstsWJZBpHu86",
		dataType: "JSON",
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				urbanites = item[1];

				newItem = {};
				newItem.x = newDate;
				newItem.y = urbanites;

				newData4.unshift(newItem);
			});

			console.log(newData4);

			initializeHighChart();
		}
	};

	var southAfrica = {
		type: "GET",
		url: "https://www.quandl.com/api/v1/datasets/WORLDBANK/ZAF_SP_URB_TOTL_IN_ZS.json?auth_token=feDyJMMFstsWJZBpHu86",
		dataType: "JSON",
		success: function(response) {

			response.data.forEach(function(item) {
				newDate = new Date(item[0]);
				urbanites = item[1];

				newItem = {};
				newItem.x = newDate;
				newItem.y = urbanites;

				newData5.unshift(newItem);
			});

			console.log(newData5);

			initializeHighChart();
		}
	};

	$.ajax(china);
	$.ajax(brazil);
	$.ajax(russia);
	$.ajax(india);
	$.ajax(southAfrica);

	function initializeHighChart() {
		var highchartConfig = {
			title: {
				text: 'Urban population growth'
			},
			subtitle: {
				text: 'a comparison on BRICS'
			},
			xAxis: {
				type: 'datetime',
			},
			yAxis: {
				startOnTick: true,
				endOnTick: true,
				max: 90,
				min: 10
			},
			series: [{
				name: 'China',
				data: newData,
			},
			{
				name: 'Brazil',
				data: newData2,
			},
			{
				name: 'Russia',
				data: newData3,
			},
			{
				name: 'India',
				data: newData4,				
			},
			{
				name: 'South Africa',
				data: newData5,
			}
			]
		};

		$('#chart').highcharts(highchartConfig);
	}

	//function initializeHighChartSmart() {

	//}

});