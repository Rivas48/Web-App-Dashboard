
var trafficButton = document.getElementsByClassName('nav--btn');

//Add Event Function 
   
   function addEvent(element, evnt, funct){
    if(element.attachEvent)
        return element.attach.Event('on'+evnt,funct);
    else
        return element.addEventListener(evnt,funct, false);
   }    
//Add Data Function

   function addData(chart, label, fun) {
    chart.data.datasets[0].data = fun.slice(0);
    console.log(chart.data.datasets[0].data);
    chart.update();
    };





  //Clicking Function w/t Data 

   addEvent(hourly,'click',hourlyData)
   addEvent(daily,'click',dailyData)
   addEvent(weekly,'click',weeklyData)
   addEvent(monthly,'click',monthlyData)

   //Data Assigned Based Of Time

    function hourlyData(){
    var lame = [50, 200, 25, 255, 185, 290, 100];
        addData( myChart, '', lame);
    var bar  = [25, 50, 73];
        addData(myDoughnutChart, '', bar);
    var line = [1200, 1300, 1900, 1700, 1200, 900, 1500, 1100, 800, 1000];
        addData(lineChart, '', line);
   }

   function dailyData(){
    var lame = [50, 200, 25, 255, 185, 290, 100]; 
        addData( myChart, '', lame);
    var bar  = [35, 60, 83];
        addData(myDoughnutChart, '', bar);
    var line = [300, 1500, 1900, 1200, 900, 1800, 1200, 1200, 1900, 1000];
        addData(lineChart, '', line);
   }

   function weeklyData(){
    var lame = [5, 10, 25, 255, 80, 90, 100];
     addData( myChart, '', lame);
    var bar  = [10, 20, 30];
        addData(myDoughnutChart, '', bar);
    var line = [100, 900, 500, 180, 200, 600, 600, 1100, 800, 1000];
        addData(lineChart, '', line);  
   }

   function monthlyData(){
    var lame = [20, 300, 55, 155, 385, 90, 200];
     addData( myChart, '', lame);
    var bar  = [75, 30, 43];
        addData(myDoughnutChart, '', bar);
    var line = [1200, 1300, 1900, 1700, 1200, 900, 1500, 1100, 800, 1000];
        addData(lineChart, '', line);   
   }


 // Add Click Functions
   addEvent(trafficButton[1], 'onclick', hourlyData());

   addEvent(trafficButton[2], 'click', dailyData());

   addEvent(trafficButton[3], 'click', weeklyData());

   addEvent(trafficButton[4], 'click', monthlyData());


