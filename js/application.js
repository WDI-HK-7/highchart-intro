$(document).ready(function(){

// I want to make a AJAX (jQuery) get request


      	var newData = [];

  $('.getButton').click(function(){
 	var newDate;
      	var newItem = {};
      	var price;

  var getRequest = { //note: the variable request1 has to be within the search button click function because you can't define a variable within request1. And you need to define movieName within the same scope.
    type: "GET", //get (read), post (create), patch/put(update), delete (delete)
    url: "https://www.quandl.com/api/v1/datasets/BTS_MM/RETAILGAS.json?auth_token=E6kNzExHjay2DNP8pKvB",
    dataType: "JSON", //JSON is a hash that does not have method as value.
    //don't need "data" if we are not sending any data
    success: function(response) { // stuff you want to do after request comes back with a response
     // console.log("Great get title success", response);
     // console.log(response["data"]);
      console.log("These are all the data points", response.data);
      // response.data = [["2014-01-01"], [],[],[],[]...[] ]
      response.data.forEach(function(item){
      	// the parameter "item" represents each item
      	// console.log(item);
    //item[1] is the first price 
    	newDate =  new Date(item[0]); // Date is a javascript thing. Puts date into a certain format.
   // console.log(newDate); 	
  		price = item[1];
  		newItem = {};
  		newItem.x =newDate;
  		newItem.y =price;

  	//	console.log(item, "--->", newItem);
  		newData.unshift(newItem);  //because we want them reversed. Sort of the opposite of push.
    	//console.log(item[0]);
    	//console.log(item[0], "--->", newDate);
      });
       console.log(newData);
        initializeHighChart();
      // for (var i=0; i< response.data.length; i++) {
      //	console.log(response.data[i]);
      // }
        }
      }     
      $.ajax(getRequest);
    }
  );

	function initializeHighChart() {
		var highChartConfig = {
			title: {
				text: "Average retail gas prices"
			},
			subtitle: {
				text: "Subtitle: Average retail gas prices"
			},
			xAxis: { //xAxis is a highchart OPTION
				type: 'datetime'
			},
			series: [{
				//data points
				name: 'US',
				data: newData,
			}]
		};
		$('#chart').highcharts(highChartConfig); // .highcharts comes from the highcarts library.
	}

      	var newData2 = [];
     	var newData3 = [];

  $('.getButton2').click(function(){
 	var newDate;
      	var newItem = {};
      	var price;

 	var newDate2;
      	var newItem2 = {};
      	var price2;

  var getRequest2 = { 
    type: "GET", 
    url: "https://www.quandl.com/api/v1/datasets/SF1/AAPL_PRICE.json?auth_token=BrzTyjLMzyMBByksbFeZ",
    dataType: "JSON", 
    success: function(response) { 
      console.log("These are all the data points", response.data);
      response.data.forEach(function(item){
    	newDate =  new Date(item[0]);  	
  		price = item[1];
  		newItem = {};
  		newItem.x =newDate;
  		newItem.y =price;
  		newData2.unshift(newItem);  
      });
       console.log(newData2);
        initializeHighChart2();
        }
      }     
      $.ajax(getRequest2);
    // }
  // );

  var getRequest3 = { 
    type: "GET", 
    url: "https://www.quandl.com/api/v1/datasets/SF1/GOOGL_PRICE.json?auth_token=BrzTyjLMzyMBByksbFeZ",
    dataType: "JSON", 
    success: function(response) { 
      console.log("These are all the data points", response.data);
      response.data.forEach(function(item){
    	newDate2 =  new Date(item[0]);  	
  		price2 = item[1];
  		newItem2 = {};
  		newItem2.x =newDate2;
  		newItem2.y =price2;
  		newData3.unshift(newItem2);  
      });
       console.log(newData3);
         initializeHighChart2();
        }
      }     
      $.ajax(getRequest3);
    }
  );


	function initializeHighChart2() {
		var highChartConfig = {
			title: {
				text: "Apple vs Google: Share Price Comparison"
			},
			subtitle: {
				text: "Crazy growth"
			},
			xAxis: { //xAxis is a highchart OPTION
				type: 'datetime'
			},
			yAxis: {
            title: {
                text: 'Share price (USD)'
            },
        	},
			series: [{
				name: 'Apple Inc',
				data: newData2,
			}, {
				name: 'Google Inc',
				data: newData3,
			}]
		};
		$('#chart2').highcharts(highChartConfig); // .highcharts comes from the highcarts library.
	}


});



// ____________
// var array = [1,2,3,4,5];
// for (var i=0; i<array.length;i++) {
// 	console.log(array[i]);
// }

// -------is the same as----------- 

// array.forEach(function(item){
// 	console.log(item);
// })

// _______
