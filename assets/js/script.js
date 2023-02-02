$(function(){

  //wow js
  new WOW().init();

  //header sticky 
  $(window).on("scroll", function(){
    var scrollBarPosition = $(this).scrollTop(); 

    if (scrollBarPosition > 150) {
      $(".header-top").addClass("sticky"); 
    } else {
      $(".header-top").removeClass("sticky");
    }
  });


  $("#click-text-1").click(function(){
    $("#show-text-1").slideToggle("slow");
  });
  $("#click-text-2").click(function(){
    $("#show-text-2").slideToggle("slow");
  });
  $("#click-text-3").click(function(){
    $("#show-text-3").slideToggle("slow");
  });
  $("#click-text-4").click(function(){
    $("#show-text-4").slideToggle("slow");
  });
  $("#click-text-5").click(function(){
    $("#show-text-5").slideToggle("slow");
  });
  
});

//Pie Chart
$(function () {
  Highcharts.setOptions({
      chart: {
          style:{
                  fontFamily:'Arial, Helvetica, sans-serif', 
                  fontSize: '2em',
                  color:'#f4da43'
              }
      }
  });
      $('#chart1').highcharts({
          chart: {
              type: 'pie'
          },
          colors: [
             '#ED5565',
             '#5D9CEC', 
             '#A0D468', 
             '#FFCE54',  
             '#48CFAD', 
             '#AC92EC',
             '#AAB2BD', 
             '#D770AD', 
             '#c42525', 
             '#a6c96a'
          ],
          title: {
              text: 'Example Chart',
              style: {
                color: '#555'
              }
          },
          legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              backgroundColor: '#f4da43'
          },
          xAxis: {
              categories: [
                  '2006',
                  '2007',
                  '2008',
                  '2009',
                  '2010',
                  '2011'
              ]
          },
          yAxis: {
              title: {
                  text: ''
              }
          },
          tooltip: {
              shared: false,
              valueSuffix: 'points'
          },
          credits: {
              enabled: false
          },
          plotOptions: {
              areaspline: {
                  fillOpacity: 0.1
              },
          series: {
              groupPadding: .15
          }
          },
          series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
              ['Development',   3.0],
              ['Pass Holders',       3.0],
              ['Referrel',       1.0]
          ]
          }]
      });
  });
  

//]]> 

$(function(){ 

  //pie chart
  window.onload = function() {

    var chartt = new CanvasJS.Chart("piepie", {
      animationEnabled: true,
      backgroundColor:"#151117",
      title: {
        text: ""
      },
    
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabelFontColor: "#ffffff",
        indexLabel: "{label} {y}",
        dataPoints: [
          { label: "Development",  y: 10, legendText: "Public Round"}, 
          { label: "Presale",    y: 35, legendText: "Locked"  }, 
          { label: "Marketing",    y: 1, legendText: "Locked"  },
          { label: "partners",  y: 5, legendText: "Public Round"}, 
          { label: "cex",    y: 11, legendText: "Locked"  }, 
          { label: "team",    y: 6, legendText: "Locked"  },
          { label: "Liqudity(PCS)",    y: 20, legendText: "Locked"  },
              
        ]
      }]
    });
    chartt.render();
    
    }

});