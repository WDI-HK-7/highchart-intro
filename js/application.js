// $(document).ready(function(){
  var dataPork = [];
  var dataChicken = [];
  var requestPork = {
      type: 'GET',
      url: 'https://www.quandl.com/api/v1/datasets/INDEXMUNDI/COMMODITY_SWINEPORK.json?auth_token=vj8iTTykbZFYCUuFSzkg',
      dataType: 'JSON',
      success: function(response){
        // console.log(response.data);
        $.each(response.data, function(index){
          dataPork.unshift({x: (new Date(response.data[index][0])),y: response.data[index][1]});
        })
        // console.log(response.data);
        // initializeHighChart();
      }
    };

  var requestChicken = {
      type: 'GET',
      url: 'https://www.quandl.com/api/v1/datasets/INDEXMUNDI/COMMODITY_POULTRYCHICKEN.json?auth_token=vj8iTTykbZFYCUuFSzkg',
      dataType: 'JSON',
      success: function(response){
        // console.log(response.data);
        $.each(response.data, function(index){
          dataChicken.unshift({x: (new Date(response.data[index][0])),y: response.data[index][1]});
        })
        // console.log(response.data);
        initializeHighChart();
      }
    };

  $.ajax(requestPork);
  $.ajax(requestChicken);

  function initializeHighChart(){
    var highchartConfig = {
      title: {
        text: 'Swine (pork) vs Chicken Monthly Price'
      },
      subtitle: {
        text: 'US CENTS PER POUND'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: ""
        }
      },
      series: [{
        name: 'Pork',
        data: dataPork
      }, {
        name: 'Chicken',
        data: dataChicken
      }],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    };

    $('#chart').highcharts(highchartConfig);
  }

// });