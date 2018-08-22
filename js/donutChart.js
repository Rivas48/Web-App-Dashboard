

/*BARCHART DATA*/
var atx = document.getElementById("myChart");
var myChart = new Chart(atx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '',
            data: [160, 200, 175, 255, 185, 290, 100],
            backgroundColor: [
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc'
            ],
            borderColor: [
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc',
                '#7070cc'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
 



/*DOUGHNUT GRAPH*/
    var btx = document.getElementById("chart-area");
    var myDoughnutChart = new Chart(btx, {
    type: 'doughnut',
    data:{
                datasets: [{
                    data: [
                        5,
                        10,
                        15,
                    ],
                    backgroundColor: [
                        '#7070cc',
                        '#009BA2',
                        '#a0d6b4',
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    'Phones',
                    'Tablets',
                    'Desktops'                   
                ]
            },
    options: {
         responsive: true,
        legend: {
            position:'right'
        },
        animation: {
                    animateScale: true,
                    animateRotate: true
                }
        
    }
});

/*LINE GRAPH */
    var ctx =document.getElementById("lineChart");
  let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [750, 1300, 1000, 700, 1700, 1400, 1300 , 1800, 1600, 1900],
            backgroundColor: [
                'rgb(199,199,239)'
                
            ],
            pointBackgroundColor: ['rgb(255,255,255)'],
        }],
        labels: ['16-22', '23-29', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24', '25-31']
    },
    options: {
         responsive: true,
         legend: {
            display:false,
        },
        scales: {
            yAxes: [{
               
            }]
        }
        
    }
});



//Selecting Icons 

var menu      = document.getElementById('menu');
var members   = document.getElementById('member');
var dashboard = document.getElementById('dashboards');
var visits    = document.getElementById('visit');
var settings  = document.getElementById('setting');
var arrow     = document.getElementById('arrow');

//Open Nav Menu

function openMenu(){
    arrow.className     = "flex highlight";
    menu.className      = "flex highlight";
    members.className   = "flex highlight";
    dashboard.className = "flex highlight";
    visits.className    = "flex highlight";
    settings.className  = "flex highlight";
}

//Closes Nav Menu

function closeMenu(){
    arrow.className     = "none";
    menu.className      = "none";
    members.className   = "none";
    dashboard.className = "none";
    visits.className    = "none";
    settings.className  = "none";
}

    var close           = document.getElementById('close'); 
    var overlay         = document.getElementById('overlay');
function myMessage() {
    var user            = document.getElementsByClassName('write')[0].value;
    var write           = document.getElementsByClassName('write')[1].value;
    var link            = document.getElementsByClassName('name');
    var warningMessage  = document.createElement("p");
    var nodeNoUser      = document.createTextNode("No User was selected");
    var nodeYes         = document.createTextNode("Message Sent To " + user);
    var nodeNoMessage   = document.createTextNode("No Message was written")
    var element         = document.getElementById("pop_up");
    var button          = document.createElement("button");
    var nodeButton      = document.createTextNode("Close")
    
    //if no user is put down
    if (user !== ""){
       console.log('you wrote something in user bar good job genius');
    //if no message is written down
               if (write !== ""){
                console.log('you wrote something in the message input good job genius');
                warningMessage.appendChild(nodeYes);
                element.appendChild(warningMessage);
                button.appendChild(nodeButton);
                button.setAttribute("id", "close");
                button.setAttribute("onclick", "closed()");
                warningMessage.setAttribute("id", "message");
                element.appendChild(button);
                overlay.style.display= 'block';
                document.getElementById('warning').innerHTML="Success!";
                document.getElementById('warning').style.background='#85db80';
                } else {
                    console.log('you got the message right again');
                    warningMessage.appendChild(nodeNoMessage);
                    element.appendChild(warningMessage);
                    element.appendChild(button);
                    button.appendChild(nodeButton);
                    button.setAttribute("id", "close");
                    button.setAttribute("onclick", "closed()");
                    warningMessage.setAttribute("id", "message");
                    overlay.style.display= 'block';
                    
                               }
    } else{
        console.log("you didnt write anything in the in the user box genius");
        warningMessage.appendChild(nodeNoUser);
        element.appendChild(warningMessage);
        element.appendChild(button);
        button.appendChild(nodeButton);
        button.setAttribute("id", "close");
        button.setAttribute("onclick", "closed()");
        warningMessage.setAttribute("id", "message");
        overlay.style.display= 'block';
    }          
}
  //Closes Modal 
function closed(){
    overlay.style.display = 'none';
    var take = document.getElementById("close");
    var element = document.getElementById("pop_up");
    var taken = document.getElementById("message");
    element.removeChild(take);
    element.removeChild(taken);
}





