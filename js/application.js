$(document).ready(function(){

  // var newDate;
  // var newData = [];

  // function getRequest() {
  //   $.ajax({
  //     type: 'GET',
  //     url: 'https://www.quandl.com/api/v1/datasets/BTS_MM/RETAILGAS.json?auth_token=7KntuEf-5eGgY52UzGCy',
  //     dataType: 'json',
  //     success: function(response) {

  //       response.data.forEach(function(item) {
  //         newDate = new Date(item[0]);
          
  //         var newItem = {};
  //         newItem.x = newDate;
  //         newItem.y = item[1];
  //         newData.unshift(newItem);
  //       })
  //       console.log(newData);
  //       initializeHighChart();
  //     }
  //   });
  // }

  // getRequest();

  // function initializeHighChart() {
  //   var highChartConfig = {
  //     title: { text: 'Average Retail Gas Prices' },
  //     subtitle: { text: 'Bureau of Transportation Statistics (Multimodal)' },
  //     xAxis: { type: 'datetime' },
  //     yAxis: { 
  //       title: { text: "Price/$" }
  //     },
  //     series: [{ name: 'US', data: newData }]
  //   };

  //   $('#chart').highcharts(highChartConfig);
  // }

  var newDate;
  var newDataJapan = [];
  var newDataSpain = [];
  var newDataSweden = [];
  var newDataAustralia = [];

  function getRequest() {
    $.ajax({
      type: 'GET',
      url: 'https://www.quandl.com/api/v1/datasets/GOOGLEORG/FLUCOUNTRY.json?auth_token=7KntuEf-5eGgY52UzGCy',
      dataType: 'json',
      success: function(response) {

        response.data.forEach(function(item) {
          newDate = new Date(item[0]);
          
          var newItemJapan = {};
          newItemJapan.x = newDate;
          newItemJapan.y = item[13];
          newDataJapan.unshift(newItemJapan);

          var newItemSpain = {};
          newItemSpain.x = newDate;
          newItemSpain.y = item[23];
          newDataSpain.unshift(newItemSpain);

          var newItemSweden = {};
          newItemSweden.x = newDate;
          newItemSweden.y = item[24];
          newDataSweden.unshift(newItemSweden);

          var newItemAustralia = {};
          newItemAustralia.x = newDate;
          newItemAustralia.y = item[2];
          newDataAustralia.unshift(newItemAustralia);


        })
        initializeHighChart();
      }
    });
  }

  getRequest();

  function initializeHighChart() {
    $('#chart').highcharts({
      title: { text: 'Flu Trends By Country' },
      subtitle: { text: 'Weekly Flu Trends Since 2002 From GOOGLEORG / FLUCOUNTRY' },
      xAxis: { type: 'datetime' },
      yAxis: { title: { text: "Flu Cases" } },
      legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle' },
      series: [
        { name: 'Japan', data: newDataJapan },
        { name: 'Spain', data: newDataSpain},
        { name: 'Sweden', data: newDataSweden},
        { name: 'Australia', data: newDataAustralia} 
      ]
    });
  }



});