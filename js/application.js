$(document).ready(function(){
  // I want to make a AJAX () get request to
  // url = https://www.quandl.com/api/v1/datasets/EIA/IES_1_1_4_CHN.json?auth_token=FP8bkYkc77t-TqcZkK1c

  var newDate; // this is the changed data format that is required in highchart... quandl came in a diff date format and we need to change it..
  var newItem= {}; // this is the new associative array with amended date and price from above
  var price;   // this is just taking the price from the existing associative array and storing it for use in newItem
  var newData = []; //newData is the new resulting associative array with amended dates and prices gotten from Quandl

  var request = { // this is an associative array (objects) with the key value pairs to GET the info from Quandl
    type: "GET",
    url : "https://www.quandl.com/api/v1/datasets/EIA/IES_1_1_4_CHN.json?auth_token=FP8bkYkc77t-TqcZkK1c",
    dataType: "JSON",
    success: function(response) { // success function is it returns the data from Quandl and stores it in "response"

      //console.log("These are all the responses: " + response.data);

      // we need to loop thru all the data and convert the date format using new Date(), so that Highcharts cann accept
      // response.data = [["2014-01-01", 2.01], [2014-01-01",2.01] [...]]
      response.data.forEach(function(item){ // data gotten from Quandl function
        newDate = new Date(item[0]); //newDate amends date to new format
        price   = item[1];
        newItem = {};            // price from quandl is taken and stored in (an array) price variable
        newItem.x = newDate;   //new resulting associative array
        newItem.y = price;        // newData for new associative array to newItem associative array
        newData.unshift(newItem);
        //console.log(item[0], "------->>>> ", newDate);
      });
      console.log(newData);
      initializeHighChart();
      //for (var i =0; i< response.data.length; i++) {
      //  console.log(response.data[i]);
      //}
    }
  };

  $.ajax(request); // ajax request is an asynchronous request initiated by the browser that does not directly result in a page transition.
                  //A process in a multitasking system whose execution can proceed independently, "in the background ". Other processes may be started before the asynchronous process has finished. 
  function initializeHighChart() {
     var highchartConfig = {
      title: {
        text: 'Total Coal Exports - China 1980-2012',
        x: -20 //center
      },
      subtitle: {
        text: 'U.S. Energy Information Administration Data',
        x: -20
      },
      xAxis: {
        type: 'datetime'
      },
      series: [{
        //data points
        name: 'China Coal Exports (Units=Thousand Short Tons)',
        data: newData


      }]

    };
    $('#chart').highcharts(highchartConfig);

  }
  
});





